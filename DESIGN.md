---
name: BC Chess Masters
description: CFC-rated classical chess in British Columbia — an evergreen, brass, and ivory tournament record.
colors:
  ink: "#1c211d"
  ink-soft: "#4a534c"
  paper: "#fbf9f4"
  surface-card: "#ffffff"
  ivory: "#efe9db"
  ivory-line: "#e2dccd"
  forest: "#14261d"
  forest-raised: "#1d3529"
  brass: "#826423"
  brass-lit: "#cba24a"
  danger: "#8a3b2e"
  tbd-bg: "#fbeccb"
  tbd-border: "#d9a93a"
  tbd-text: "#6b4e12"
typography:
  display:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "normal"
  body:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.22em"
  data:
    fontFamily: "Calibri, 'Segoe UI', Arial, Helvetica, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
rounded:
  sm: "3px"
  md: "4px"
  pill: "999px"
spacing:
  gap: "clamp(1rem, 2.5vw, 1.75rem)"
  section-y: "clamp(2.75rem, 5.5vw, 4.5rem)"
  card-pad: "clamp(1.4rem, 3vw, 2rem)"
  panel-pad: "clamp(1.75rem, 4vw, 2.75rem)"
  wrap: "1080px"
  wrap-narrow: "760px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#6b511c"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  button-on-dark:
    backgroundColor: "{colors.brass-lit}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  button-on-dark-hover:
    backgroundColor: "#dbb45c"
    textColor: "{colors.forest}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  button-lg:
    padding: "1.05rem 2.1rem"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-pad}"
  register-panel:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "{spacing.panel-pad}"
  callout:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    padding: "1.1rem 1.35rem"
  round-tag:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
    rounded: "{rounded.sm}"
    padding: "0.1rem 0.5rem"
  deadline-pill:
    backgroundColor: "#f7e7e3"
    textColor: "{colors.danger}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem"
  tbd-marker:
    backgroundColor: "{colors.tbd-bg}"
    textColor: "{colors.tbd-text}"
    rounded: "{rounded.sm}"
    padding: "0.08em 0.45em"
---

# Design System: BC Chess Masters

## Overview

**Creative North Star: "The Scoresheet"**

This system is built to look like a record, not an advertisement. A tournament scoresheet is the object every player in this audience handles all weekend: ruled, numbered, filled in by hand, containing nothing that is not a fact. That is the register the site adopts. Information arrives as columns, hairlines, uppercase field labels, and figures that line up vertically — the visual grammar of a wallchart and a pairing sheet rather than an event landing page.

The material palette comes from the board and the room around it: deep evergreen for the surfaces that carry commitment, ivory for the light square, brass for the one accent that marks what matters. It is a warm, low-contrast, paper-toned world with a single metal in it. Nothing glows, nothing floats, and nothing is decorated. Depth is built almost entirely from 1px rules and shifts in surface tone, which is why the site reads as printed matter rather than as software.

The discipline that makes this work is restraint about the accent. Brass appears on eyebrows, field labels, prices, and primary actions — never as a background wash, never as a gradient, never on more than a fraction of a screen. Because the palette is otherwise so quiet, a single brass rule under a sub-nav item does the work that a colored panel would do in a louder system. This is the direct visual translation of the product's own rule: state the number, not the adjective.

**Key Characteristics:**

- One typeface for everything; hierarchy from size, weight, case, and tracking alone
- Tabular figures on every number a player would verify
- Hairline rules and tonal steps instead of shadows
- Deep evergreen reserved for moments of commitment
- Two brasses, strictly separated by background lightness
- Generous measure (65–68ch) and a calm 1080px column

## Colors

A warm, paper-toned neutral field with one metal accent and a single reserved alarm color.

### Primary

- **Trophy Brass** (`#826423`): the accent for light surfaces. Eyebrows, field labels in spec rows, fee amounts and add-on prices, prose links, the primary button, the active sub-nav underline, and the callout's left rule. It reads as struck metal rather than yellow, and it is the only chromatic voice on a light page.
- **Lit Brass** (`#cba24a`): the same metal raised for dark surfaces. Brand sub-label, hero timestamps, footer column headings, e-Transfer key values, and focus rings. Never used on paper, ivory, or white — see The Two Brasses Rule.

### Secondary

- **Forest** (`#14261d`): the deep field. Header, hero, footer, and the registration panel. It is not a background color in general use; it marks the surfaces that carry commitment or identity.
- **Forest Raised** (`#1d3529`): a lighter step for raised surfaces sitting on forest. **Currently declared but unused** — reserved for a future panel-on-dark, and worth reaching for before inventing a new value.

### Tertiary

- **Deadline Red** (`#8a3b2e`): reserved for genuinely time-bound facts. It appears once, on the early-bird cutoff pill. Its scarcity is what makes it legible as urgency.
- **Pencil Amber** (`#fbeccb` fill / `#d9a93a` dashed edge / `#6b4e12` text): the unfinished-business marker. A dashed amber chip with a pencil glyph, used for information the organizer has not yet decided. It is deliberately ugly against the rest of the system so that no placeholder ships unnoticed.

### Neutral

- **Ink** (`#1c211d`): primary text. A green-black, not a true black — it belongs to the forest family and keeps the page warm.
- **Soft Ink** (`#4a534c`): secondary text, prose body, table headers, and captions. Tinted from the same green hue rather than a neutral gray.
- **Paper** (`#fbf9f4`): the page ground. Warm off-white.
- **Card White** (`#ffffff`): the raised surface. Pure white against warm paper is what makes a card read as lifted, without a shadow doing the work.
- **Ivory** (`#efe9db`): the light board square. Alternating section bands, callout fills, and round tags.
- **Ivory Line** (`#e2dccd`): every hairline in the system — card borders, table row rules, spec-row dividers, sub-nav base.

### Named Rules

**The Two Brasses Rule.** `#826423` on light, `#cba24a` on dark. They are one metal under different light, never interchangeable, and swapping them is always a contrast failure in one direction or the other. The single documented exception is the player title abbreviation (CM / NM / FM), which the owner has deliberately kept lit on white; it is recorded in PRODUCT.md and is not to be silently corrected.

**The One Voice Rule.** Brass covers well under 10% of any screen. If a layout needs more brass to feel finished, the layout is underbuilt — add hierarchy through space and rule weight instead.

**The Warm Neutral Rule.** No neutral in this system is chromatically dead. Every gray, black, and white carries a trace of the forest hue or paper warmth. Never introduce `#000`, `#888`, or a blue-tinted gray.

## Typography

**Display Font:** Calibri (with Segoe UI, Arial, Helvetica, sans-serif)
**Body Font:** Calibri (identical stack)
**Label/Mono Font:** Calibri (identical stack)

**Character:** There is exactly one typeface here, and that is the defining decision of the system. No webfont is loaded, nothing blocks first paint, and the page renders in the reader's own system sans — plain, humanist, unremarkable in the way an official document is unremarkable. All the hierarchy is manufactured from size, weight, case, and letter-spacing. The `--font-mono` token is a semantic role, not a second family: it means tabular figures, uppercase, and wide tracking, and it never means a monospaced typeface.

### Hierarchy

- **Display** (600, `clamp(2.6rem, 7vw, 5rem)`, 1.08, `-0.02em`): page heroes only, capped at a 14–16ch measure so it always breaks into two or three stacked lines. Interior pages step the clamp down (`clamp(2.4rem, 6vw, 4.2rem)`) so the home hero stays the largest type on the site.
- **Headline** (600, `clamp(1.9rem, 4vw, 2.7rem)`, 1.08, `-0.01em`): section titles.
- **Title** (600, `1.18–1.7rem`): brand name, registration panel heading, prose sub-headings.
- **Body** (400, `1.02rem`, 1.6): prose in Soft Ink, held to a **65–68ch** measure.
- **Label** (500, `0.70–0.74rem`, `0.10em–0.22em`, uppercase): eyebrows, table headers, spec-row terms, footer column headings, sub-nav, fee flags. The widest tracking (`0.22em`) belongs to the section eyebrow; data labels sit tighter (`0.12em`).
- **Data** (400, tabular figures): ratings, CFC IDs, round numbers, times, and prices.

### Named Rules

**The One Typeface Rule.** Hierarchy comes from size, weight, case, and tracking. Do not introduce a second family — no serif for display, no monospace for data. The system's plainness is the point, and a display serif would immediately make it look like an event promotion.

**The Scoresheet Rule.** Any figure a player could check against a wallchart, a scoresheet, or their own wallet gets `font-variant-numeric: tabular-nums`. Ratings, CFC IDs, round times, and dollar amounts must align vertically in columns.

**The Uppercase Label Rule.** Uppercase is for labels — short, functional, tracked out, never longer than a few words. Never set a heading, sentence, or button longer than three words in uppercase.

## Layout

A single centered column of **1080px** (`--wrap`), narrowing to **760px** (`--wrap-narrow`) for uninterrupted reading on About. Both use `width: min(100% - 2.5rem, …)`, so the 1.25rem side gutter is preserved at every size without a media query.

Vertical rhythm is one token: `--section-y` at `clamp(2.75rem, 5.5vw, 4.5rem)` of block padding per section. Sections alternate between Paper and Ivory (`.section--ivory`, bordered top and bottom with a hairline) to band the page without boxes.

Two-column relationships use three named ratios rather than a general grid: `.split` (1:1, symmetric pairs), `.split-wide` (1.5:1, prose beside a summary card), and `.split-feature` (1.3:0.9, vertically centered, for the home page's featured event). All three collapse to a single column at **780px**.

Density is deliberately low. Cards use `clamp(1.4rem, 3vw, 2rem)` of internal padding and the registration panel uses `clamp(1.75rem, 4vw, 2.75rem)`, so the most important block on the site is also the most generously padded.

**Sticky chrome:** the header is sticky at `top: 0` with a 68px minimum height; the tournament sub-nav is sticky beneath it at exactly `top: 68px`. Anchored sections carry `scroll-margin-top: 130px` so a jump-link target never lands under either bar. **These three numbers are coupled — changing the header height requires changing the other two.**

The offset must sit on **the element carrying the `id`**, which is the `<section>`, not the inner `.wrap`. The rule is therefore `.anchor, .section[id]`. Putting it only on the inner wrapper silently does nothing: the browser reads `scroll-margin` from the element it scrolls to, so the section lands flush at viewport top and its own padding pushes the heading under the sticky bars.

**Breakpoints** are currently four ad-hoc values: 780px (column splits), 760px (nav collapse), 680px (footer regrouping), 620px (spec rows stack). They are per-component rather than systematic. Preserve them as-is when editing existing components; if the set grows further, consolidate to a named scale first.

## Elevation & Depth

**This system is flat by design.** There is exactly one shadow token in the entire stylesheet, and it is applied to exactly one component. Depth is otherwise produced by two mechanisms: a 1px Ivory Line hairline, and a step in surface tone (Forest → Ivory → Paper → Card White). A white card on warm paper reads as raised because of the tonal difference, not because of a shadow.

### Shadow Vocabulary

- **Card lift** (`box-shadow: 0 1px 2px rgba(20,38,29,.06), 0 8px 28px rgba(20,38,29,.07)`): a two-part shadow — a tight contact edge plus a wide, very soft ambient pool — tinted with the forest hue rather than neutral black. Used only on `.card`. Both layers are under 7% opacity, so it registers as air rather than as elevation.
- **Selection ring** (`box-shadow: 0 0 0 1px var(--brass)`): not a shadow. It doubles the early-bird fee card's border to a 2px brass edge without shifting layout. Treat it as a border technique.

### Named Rules

**The Hairline Rule.** Separation is a 1px `--ivory-line`. Reach for a rule before reaching for a shadow, a box, or a background fill.

**The One Shadow Rule.** The card lift is the system's only shadow. New raised surfaces borrow it verbatim or use tone instead. Do not author a second elevation level, and never put a shadow on a button, input, nav bar, or table.

## Shapes

The form language is almost square. `--radius` is **4px** — enough to avoid a hard mechanical edge, far too little to read as friendly or rounded. Small chips (the TBD marker, round tags) tighten to **3px**, and exactly one element is fully round: the deadline pill at **999px**, whose shape is doing the work of signalling "time-bound" before the color does.

Borders are the primary form-making tool. Almost every container is defined by a 1px Ivory Line rather than by a fill. The callout is the one asymmetric shape in the system: a 3px brass rule on the left with the radius suppressed on that edge (`0 4px 4px 0`), so it reads as a margin annotation rather than a box.

The brand mark is a single pawn silhouette in brass — a filled body, a two-stroke cross above, and a rectangular base — drawn on a 32px grid and rendered at 30px in the header. It is the only illustrative element in the system.

## Components

### Buttons

- **Shape:** near-square (4px radius), 1px transparent border reserved so ghost variants swap in a border without shifting layout.
- **Type:** uppercase label, `0.82rem`, `0.06em` tracking, weight 500 — buttons are labels, not sentences.
- **Primary:** Trophy Brass fill with white text, `0.85rem 1.5rem` padding. Hover deepens to `#6b511c`.
- **Ghost:** transparent with a `rgba(20,38,29,.25)` border and Forest text; hover resolves the border to full Forest.
- **On dark:** Lit Brass fill with Forest text; hover lightens to `#dbb45c`. **Ghost dark:** transparent with a `rgba(239,233,219,.35)` border and Ivory text.
- **Large** (`.btn--lg`): `1.05rem 2.1rem`, `0.95rem` type. Reserved for the two hero actions and the registration panel.
- **Motion:** the whole button lifts `translateY(-1px)` on hover and the trailing arrow advances `translateX(3px)`, both at `0.15s ease`. The arrow is a text glyph (`→` / `↗`), marked `aria-hidden`, with `↗` signalling an external destination.

### Cards / Containers

- **Corner Style:** 4px.
- **Background:** Card White on Paper or Ivory sections.
- **Border:** 1px Ivory Line — always present, and the primary definition of the card.
- **Shadow Strategy:** the card lift from Elevation, and nothing else.
- **Internal Padding:** `clamp(1.4rem, 3vw, 2rem)`.

### Navigation

- **Primary nav:** Ivory links on Forest at `0.92rem`, resting at 85% opacity, resolving to full opacity and Lit Brass on hover. The current page is marked with `aria-current="page"` and rendered at weight 600 in Lit Brass — state is carried by the attribute, not a separate class.
- **Mobile (≤760px):** the nav becomes a full-width Forest drop panel below the header, with `1px rgba(239,233,219,.08)` dividers between items and a generous `0.85rem 1.25rem` touch target. The toggle is a bordered `☰` button whose `aria-expanded` is kept in sync by `main.js`.
- **Sub-nav (tournament page):** a horizontally scrollable strip of uppercase labels on translucent paper (`rgba(251,249,244,.92)` with `backdrop-filter: blur(8px)`), scrollbar hidden. The active section is marked by a 2px brass bottom border and Forest text, driven by an IntersectionObserver scroll-spy with a `-140px 0px -65% 0px` root margin.

### Tables (signature component)

The clearest expression of the north star. Full-width, fully collapsed borders, no vertical rules and no zebra striping — rows are separated only by a bottom hairline, and the last row's rule is removed so the table ends cleanly. Headers are uppercase Soft Ink labels at `0.7rem` with `0.12em` tracking and weight 500, deliberately quieter than the data beneath them. Numeric cells carry tabular figures. Cells align to `baseline`, not middle, so mixed-size content sits on a shared line. Every table is wrapped in `.table-scroll` with a `min-width` on the table itself, so on a phone it scrolls horizontally instead of crushing.

- **Round tag:** a bold Forest-on-Ivory chip at 3px radius marking round numbers.
- **Title abbreviation:** the player title (CM / NM / FM) set bold in Lit Brass — the documented contrast exception noted above.

### Spec List (signature component)

The format-and-eligibility pattern: a definition list on a fixed `190px 1fr` grid, where terms are uppercase brass labels and descriptions are Ink body text, separated by hairlines with the final rule removed. Below 620px the two columns stack to a single column with the gap tightening to `0.35rem`, so the label sits directly above its value like a form field. A nested `small` renders as a Soft Ink footnote beneath the description.

### Fee Cards

An auto-fitting grid (`minmax(220px, 1fr)`) of white bordered cards. The price is the only place display-scale type appears outside a hero: `2.6rem` at weight 600. Above it sits a small uppercase brass flag naming the tier; below, a Soft Ink note. The recommended tier takes a brass border plus the brass selection ring — a doubled edge, never a fill or a badge. Add-ons are a separate stack of thin bordered rows with the label left and a bold brass price right.

### Registration Panel (signature component)

The one full-bleed Forest block inside the page body. It inverts the palette — Ivory text on Forest, on-dark buttons — and carries the largest padding in the system. Beneath a hairline divider at 16% ivory sits the e-Transfer detail block, where key values are set in Lit Brass to separate transcribable data (an address, a memo line) from instruction text. Use this treatment for any block asking the visitor to commit or transact.

### Callout

An annotation, not an alert: 3px brass left rule, Ivory fill, radius suppressed on the ruled edge. Body text at `0.96rem` with brass semibold links.

### Placeholder Marker

A dashed amber chip prefixed with a pencil glyph (`✎`), set `white-space: nowrap` so it never breaks mid-phrase. It marks information the organizer has not yet decided, and is intentionally the least attractive element in the system so it cannot ship unnoticed.

### Focus & Skip Link

Focus is visible everywhere: a 2px Lit Brass outline at 3px offset with a 2px radius on all links, buttons, and `.btn` elements. The skip link is positioned off-canvas at `left: -9999px` and slides to `left: 0` on focus, rendering as a brass bar with white text.

## Do's and Don'ts

### Do:

- **Do** use Trophy Brass (`#826423`) on light surfaces and Lit Brass (`#cba24a`) on Forest. Check the background before choosing.
- **Do** set every rating, CFC ID, round time, and dollar amount in tabular figures.
- **Do** separate with a 1px `--ivory-line` hairline before considering a shadow, a box, or a fill.
- **Do** band long pages by alternating Paper and Ivory sections rather than wrapping content in cards.
- **Do** reserve Forest for header, hero, footer, and blocks that ask for commitment.
- **Do** hold prose to a 65–68ch measure and keep hero headings at a 14–16ch measure.
- **Do** wrap every table in `.table-scroll` with a `min-width`, so phones scroll rather than crush.
- **Do** mark undecided facts with the `.tbd` chip rather than inventing a value or quietly omitting the row.
- **Do** update `scroll-margin-top` and the sub-nav's `top` together if the 68px header height ever changes.

### Don't:

- **Don't** add a second typeface. Hierarchy comes from size, weight, case, and tracking.
- **Don't** use `--font-mono` expecting a monospaced face — it is the same stack, and the role means tabular figures and tracking.
- **Don't** author a second shadow level. The card lift is the system's only shadow, and buttons, inputs, nav bars, and tables never carry one.
- **Don't** fill a surface with brass or run it as a gradient. It is a rule, a label, a price, and a button — never a wash.
- **Don't** introduce a neutral black, mid-gray, or blue-tinted gray. Every neutral here carries forest or paper warmth.
- **Don't** raise the radius above 4px. The near-square form is what keeps this reading as a record rather than a consumer app.
- **Don't** set headings, sentences, or long button labels in uppercase — uppercase is for short functional labels only.
- **Don't** add zebra striping or vertical rules to tables. Horizontal hairlines only.
- **Don't** use Deadline Red for anything that is not genuinely time-bound; a second use halves the meaning of the first.
- **Don't** ship marketing language, superlatives, or urgency devices anywhere in this system. The plain register is the brand's strongest asset.
