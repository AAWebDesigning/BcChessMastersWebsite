#!/usr/bin/env node
/**
 * Syncs the pre-registered player list from a published Google Sheet into
 * bc-elite-invitational-1.html (rendered rows) and players.json (reusable feed).
 *
 * SETUP
 * -----
 * 1. In the roster spreadsheet, add a tab named `Public` containing ONLY the
 *    columns shown on the site — never Section, Bye Request or Notes. Populate
 *    it by formula from the working sheet, e.g.
 *      =QUERY(Registrations!A:H, "select G, A, B, C, D where A is not null", 1)
 *    Never publish the working sheet itself — it holds payment reconciliation
 *    and play-up notes.
 * 2. The `Public` tab must have a header row. Column order does not matter;
 *    headers are matched by name. Recognised: Title (optional), Name — or
 *    First Name + Last Name — CFC ID, and Rating.
 * 3. File → Share → Publish to web → select the `Public` tab → CSV → Publish.
 * 4. Copy the generated URL into a repository variable named ROSTER_CSV_URL
 *    (Settings → Secrets and variables → Actions → Variables → New variable).
 *
 * SAFETY
 * ------
 * The script refuses to write an empty roster. If the sheet returns no usable
 * rows the run fails loudly rather than silently blanking the most
 * trust-critical section on the site.
 *
 * Run locally with:  ROSTER_CSV_URL="..." node scripts/update-roster.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = path.join(ROOT, 'bc-elite-invitational-1.html');
const FEED = path.join(ROOT, 'players.json');

const CAPACITY = 25;
const TIMEZONE = 'America/Vancouver';

const TITLE_NAMES = {
  GM: 'Grandmaster',
  IM: 'International Master',
  FM: 'FIDE Master',
  CM: 'Candidate Master',
  NM: 'National Master',
  WGM: 'Woman Grandmaster',
  WIM: 'Woman International Master',
  WFM: 'Woman FIDE Master',
  WCM: 'Woman Candidate Master',
  // FIDE Arena titles — confirm these expansions read correctly for CFC events.
  AGM: 'Arena Grandmaster',
  AIM: 'Arena International Master',
  AFM: 'Arena FIDE Master',
  ACM: 'Arena Candidate Master',
};
const LEADING_TITLE = /^(WGM|WIM|WFM|WCM|AGM|AIM|AFM|ACM|GM|IM|FM|CM|NM)\s+/i;

/* ---------- CSV ---------- */

// Full quoted-field parser: names contain commas, apostrophes and accents, and
// Google prefixes published output with a BOM. split(',') corrupts all three.
function parseCsv(input) {
  let text = input;
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else {
        field += ch;
      }
      continue;
    }
    if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (ch !== '\r') field += ch;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ''));
}

// Names may arrive as one "Name" column or as separate "First Name" / "Last
// Name" columns; both are supported. The generic name match deliberately
// excludes first/last so it can't swallow half of a split name.
function findColumns(header) {
  const norm = header.map((h) => h.trim().toLowerCase());
  const at = (pred) => norm.findIndex(pred);
  return {
    title: at((h) => h.includes('title')),
    firstName: at((h) => h.includes('first')),
    lastName: at((h) => h.includes('last')),
    name: at((h) => (h.includes('name') || h.includes('player')) && !h.includes('first') && !h.includes('last')),
    cfcId: at((h) => h.includes('cfc id')) !== -1
      ? at((h) => h.includes('cfc id'))
      : at((h) => /\bid\b/.test(h)),
    rating: at((h) => h.includes('rating') || h.includes('elo')),
  };
}

function toPlayers(rows) {
  const [header, ...body] = rows;
  const col = findColumns(header);

  const hasName = col.name !== -1 || (col.firstName !== -1 && col.lastName !== -1);
  const missing = [];
  if (!hasName) missing.push('name (or first name + last name)');
  if (col.cfcId === -1) missing.push('cfc id');
  if (col.rating === -1) missing.push('rating');
  if (missing.length) {
    throw new Error(
      `Could not find column(s) [${missing.join(', ')}] in the sheet header: ${JSON.stringify(header)}. ` +
      `The Public tab needs a header row with a name, CFC ID and rating.`,
    );
  }

  return body
    .map((r) => {
      const cell = (i) => (i === -1 ? '' : String(r[i] ?? '').trim());
      let name = col.name !== -1
        ? cell(col.name)
        : [cell(col.firstName), cell(col.lastName)].filter(Boolean).join(' ');
      let title = cell(col.title).toUpperCase();

      // Title may live in its own column or be prefixed onto the name.
      const inline = name.match(LEADING_TITLE);
      if (!title && inline) {
        title = inline[1].toUpperCase();
        name = name.slice(inline[0].length).trim();
      } else if (title && inline && inline[1].toUpperCase() === title) {
        name = name.slice(inline[0].length).trim();
      }

      return { title, name, cfcId: cell(col.cfcId), rating: cell(col.rating) };
    })
    .filter((p) => p.name)
    .sort((a, b) => (parseInt(b.rating, 10) || 0) - (parseInt(a.rating, 10) || 0));
}

/* ---------- Rendering ---------- */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
// Sheet content is arbitrary text from anyone with edit access. Always escape.
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESCAPES[c]);

function renderRows(players) {
  return players
    .map((p, i) => {
      const title = p.title
        ? `<abbr class="title-abbr" title="${esc(TITLE_NAMES[p.title] || p.title)}">${esc(p.title)}</abbr> `
        : '';
      return [
        '              <tr>',
        `                <td class="num">${i + 1}</td>`,
        `                <td>${title}${esc(p.name)}</td>`,
        `                <td class="num">${esc(p.cfcId)}</td>`,
        `                <td class="num">${esc(p.rating)}</td>`,
        '              </tr>',
      ].join('\n');
    })
    .join('\n');
}

function renderCount(n) {
  if (n >= CAPACITY) return `Field is full — ${CAPACITY} of ${CAPACITY} places taken`;
  if (n === 1) return `1 of ${CAPACITY} places filled`;
  return `${n} of ${CAPACITY} places filled`;
}

function replaceBlock(html, marker, content) {
  const open = `<!-- ${marker}:start -->`;
  const close = `<!-- ${marker}:end -->`;
  const a = html.indexOf(open);
  const b = html.indexOf(close);
  if (a === -1 || b === -1 || b < a) {
    throw new Error(`Marker "${marker}" is missing or malformed in ${path.basename(PAGE)}.`);
  }
  return html.slice(0, a + open.length) + content + html.slice(b);
}

/* ---------- Main ---------- */

async function main() {
  const url = (process.env.ROSTER_CSV_URL || '').trim();
  if (!url) {
    throw new Error(
      'ROSTER_CSV_URL is not set. Add it as a repository variable ' +
      '(Settings → Secrets and variables → Actions → Variables). See the header of this file for setup.',
    );
  }

  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Sheet fetch failed: HTTP ${res.status} ${res.statusText}`);

  const rows = parseCsv(await res.text());
  if (rows.length < 2) throw new Error('Sheet returned no data rows. Check the published tab and its URL.');

  const players = toPlayers(rows);

  // Never blank the roster. An empty result means a broken URL or the wrong tab,
  // not that everyone withdrew — and a silently emptied table is the worst
  // failure this page can have.
  if (players.length === 0) {
    throw new Error('Parsed 0 players from the sheet. Refusing to write an empty roster.');
  }

  const now = new Date();
  const isoDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
  const humanDate = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIMEZONE, day: 'numeric', month: 'long', year: 'numeric',
  }).format(now);

  const original = fs.readFileSync(PAGE, 'utf-8');
  const previousBlock = original.slice(
    original.indexOf('<!-- roster:start -->'),
    original.indexOf('<!-- roster:end -->'),
  );
  const previous = (previousBlock.match(/<tr>/g) || []).length;

  let html = original;
  html = replaceBlock(html, 'roster', `\n${renderRows(players)}\n            `);
  html = replaceBlock(html, 'roster-count', renderCount(players.length));
  html = replaceBlock(html, 'roster-updated', `<time datetime="${isoDate}">${humanDate}</time>`);

  const feed = JSON.stringify(
    { updated: isoDate, capacity: CAPACITY, count: players.length, players },
    null, 2,
  ) + '\n';

  const pageChanged = html !== original;
  const feedChanged = !fs.existsSync(FEED) || fs.readFileSync(FEED, 'utf-8') !== feed;

  if (pageChanged) fs.writeFileSync(PAGE, html);
  if (feedChanged) fs.writeFileSync(FEED, feed);

  if (previous && players.length < previous) {
    console.warn(`Warning: roster shrank from ${previous} to ${players.length} player(s).`);
  }
  console.log(
    `${players.length} player(s) synced. ` +
    `${pageChanged || feedChanged ? 'Files updated.' : 'No changes.'}`,
  );
}

main().catch((err) => {
  console.error(`update-roster failed: ${err.message}`);
  process.exit(1);
});
