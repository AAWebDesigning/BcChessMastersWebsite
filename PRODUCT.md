# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** chess players currently rated **2000+ CFC**, based in British Columbia (the venue is in Richmond, so the Lower Mainland is the realistic catchment). They are deciding whether to commit a full weekend and $65–80 to a first-year event from an organizer with no track record. They hold a CFC membership and know their CFC ID and current rating.

**Secondary:** players rated **1900–1999 CFC** seeking a play-up into the field. They must request entry by email and pay a $20 play-up fee if approved. This is an admission path, not a separate section — they play in the same field.

Their job: find serious, CFC-rated classical competition against players near their own strength, without travelling outside the province.

## Product Purpose

BC Chess Masters organizes CFC-rated classical chess tournaments in British Columbia for higher-rated players. Its first event is **BC Elite Invitational 1** — five games over two days, August 29–30 2026, at the Executive Hotel Vancouver Airport in Richmond BC.

Success for this first event is filling the 25-player field with genuinely 2000+ players and running it cleanly enough to justify a second. A continuing series is the intent but **not a commitment** — see Capabilities and Constraints.

## Positioning

**The rating floor is the product.** A 2000+ entry requirement means a strong player gets an entire event of appropriate opposition, rather than the few competitive rounds an open Swiss yields after the early mismatches burn off.

This is the claim a neighbouring organizer could not truthfully copy without adopting the same floor and accepting the same smaller field. It is a deliberate trade of volume for field quality, and future product decisions should protect it rather than dilute it for entries.

## Operating Context

- **Format:** two-day weekend event in a hotel function room. Five rounds, Swiss, one section. Rounds 1–3 at 50 min + 10s increment on day one; rounds 4–5 at 90 min + 30s on day two.
- **Tie-breaks**, in order: direct encounter, Buchholz Cut 1, Buchholz, Sonneborn-Berger.
- **Registration** runs off-site through a Google Form. **Payment** is Interac e-Transfer to `bcchessmasters@gmail.com`, reconciled manually by the organizer; a registration is confirmed only once payment is received. Registration closes **August 28 2026**, or earlier if the field fills.
- **Roster:** the authoritative pre-registered player list lives in a Google Sheet, mirrored as a snapshot on the site.
- **Rating dependency:** every game is CFC-rated, so each player must hold a current CFC membership from chess.ca. This is an external dependency the organizer does not control.
- **Play-up requests** are handled by email, one at a time, at the organizer's discretion.
- The entire operation is run by hand, by a very small team, with a spreadsheet and an email account.
- **Deployment:** static site served at **bcchessmasters.com** (GitHub Pages; `CNAME` in repo root).

## Capabilities and Constraints

**Confirmed:**

- Dates, venue, address, round times, time controls, and tie-break order as described in Operating Context.
- **Rating floor:** 2000+ CFC, with 1900–1999 admitted by approved play-up request.
- **Field capacity:** 25 players, first-come first-served, closing when full.
- **Fees:** $65 early bird before Aug 8 2026; $80 regular from Aug 8; **+$20** play-up; **−$10** sibling discount (off a second sibling's entry); **50% off** titled discount for **NM or higher — CM does not qualify**.
- **Forfeit time:** 30 minutes in the 50+10 rounds; 60 minutes in the 90+30 rounds.
- **Refunds:** full refund on or before Aug 8; 50% before Aug 27; none after registration closes Aug 28.
- **Withdrawals:** notice must be given before rounds are paired; once paired, withdrawals are not considered.
- **Byes:** up to two half-point byes per player, requested in advance. A round 5 bye is worth 0 points.
- **Electronic devices:** all devices stored away. A device found on a player's person, or ringing, forfeits the round, with possible disqualification at the arbiter's discretion.
- **Parking:** limited, first-come first-served, at the venue.
- **Playing room:** Fraser Room.
- **Public contact and e-Transfer recipient:** `bcchessmasters@gmail.com` (one address serves both).
- Static site — no backend, no database, no server-side registration or payment. Every commitment made on the site must be honourable manually.

**Explicitly undecided.** Future work must not invent values for these:

- Google Form URL — the Register button still points at a `[[ PASTE GOOGLE FORM LINK ]]` placeholder, so registration is currently unreachable from the site
- Social presence, if any
- Founding story and who runs the organization
- Prize fund — none has been stated anywhere, and none should be implied
- **Whether a second event happens at all** — the series is conditional on this one working

## Brand Commitments

- **Name: "BC Chess Masters"** — settled, and matched by the domain `bcchessmasters.com`, the contact address, and every page. A prior working name, "Road to Masters", is obsolete and must not appear in public copy.
- **Journey to Masters (JtM) is not part of the public story.** Do not reference JtM, imply lineage from it, or claim continuity with prior events in any public-facing copy.
- Descriptor in use: "Chess · British Columbia".
- Tagline in use: "Building the road to mastery, one classical game at a time." The "road to mastery" phrasing survives as a tagline only; it is not the organization's name.
- **Voice — confirmed binding.** Copy is plain, literal, and domain-fluent: it states numbers and rules rather than selling. No marketing language, no superlatives, no urgency devices. A warmer, more human register is permitted on About and Contact, but the no-marketing floor holds everywhere, including there.

## Evidence on Hand

**Real:**

- Venue and address: Executive Hotel Vancouver Airport, 7311 Westminster Hwy, Richmond BC V6X 1A1
- Pre-registered player list: live Google Sheet (URL in `bc-elite-invitational-1.html`) — note this is currently linked in its `/edit` form and should be published or set view-only
- Three confirmed pre-registered players, real names with CFC IDs and ratings, mirrored in the on-site snapshot (CM Barath Subramanian Suresh 2171, Aadit Arya 2159, Zhengyu Chen 2132)
- CFC membership signup: `chess.ca/en/players/membership-join/`
- Sole brand asset: an inline SVG pawn mark in each page header, plus `favicon-32x32.png`. There is no `assets/` directory.

**Absences future work must not fabricate:**

- No photographs of any kind — no venue, no players, no past events
- No logo, wordmark, or type asset beyond the inline SVG and favicon
- No testimonials, endorsements, press, or partner logos
- No past-event results, attendance figures, or track record — this is a first event
- No prize fund has been stated anywhere
- The roster is three players, not a full field; it must not be presented as more than it is

## Product Principles

1. **Protect the floor.** The 2000+ requirement is the entire proposition. Filling seats by lowering it destroys the reason the event exists.
2. **Say the number, not the adjective.** This audience reads "90 min + 30s" and "Buchholz Cut 1" fluently. Specificity is the register; promotional language reads as a warning sign to them.
3. **A first-year event sells on certainty.** With no track record, published decisions are the only proof available. An unwritten policy costs more trust than an unfavourable one — which is why capacity, refunds, byes, forfeits, and devices are now all published.
4. **Everything published must be honourable by hand.** No backend exists. Do not promise live standings, instant confirmation, or automated anything that two people with a spreadsheet cannot deliver on the weekend.
5. **Earn the second event.** The series is conditional. Build so a second event is easy to add, but never publish a calendar that may not materialize.

## Accessibility & Inclusion

No user-specific accessibility requirement has been established by the owner. A working standard was adopted and applied on 2026-07-27:

- WCAG 2.x **AA** contrast (4.5:1 body, 3:1 large text) across all surfaces
- Functional/interactive text no smaller than **11px**
- Skip-to-content link, `<main>` landmark, and a skip-free heading outline on every page

Future work should hold this line rather than treat it as a one-time cleanup.

**One accepted exception**, decided by the owner on 2026-07-29: the player title abbreviation (CM / NM / FM / IM / GM) in the pre-registered roster uses the lit brass `#cba24a` on white, measuring 2.38:1. This is a deliberate visual choice and is not to be "corrected" by a future accessibility pass without asking. It is the only knowing exception; everything else holds AA.
