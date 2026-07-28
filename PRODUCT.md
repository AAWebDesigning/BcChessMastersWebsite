# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** chess players currently rated **2000+ CFC**, based in British Columbia (the venue is in Richmond, so the Lower Mainland is the realistic catchment). They are deciding whether to commit a full weekend and $65–80 to a first-year event from an organizer with no track record. They hold a CFC membership and know their CFC ID and current rating.

**Secondary:** players rated **1900–1999 CFC** seeking a play-up into the field. They must request entry by email and pay a $20 play-up fee if approved. This is an admission path, not a separate section — they play in the same field.

Their job: find serious, CFC-rated classical competition against players near their own strength, without travelling outside the province.

## Product Purpose

Road to Masters organizes CFC-rated classical chess tournaments in British Columbia for higher-rated players. Its first event is **BC Elite Invitational 1** — five games over two days, August 29–30 2026, at the Executive Hotel Vancouver Airport in Richmond BC.

Success for this first event is filling the capped field with genuinely 2000+ players and running it cleanly enough to justify a second. A continuing series is the intent but **not a commitment** — see Capabilities and Constraints.

## Positioning

**The rating floor is the product.** A 2000+ entry requirement means a strong player gets an entire event of appropriate opposition, rather than the few competitive rounds an open Swiss yields after the early mismatches burn off.

This is the claim a neighbouring organizer could not truthfully copy without adopting the same floor and accepting the same smaller field. It is a deliberate trade of volume for field quality, and future product decisions should protect it rather than dilute it for entries.

## Operating Context

- **Format:** two-day weekend event in a hotel function room. Five rounds, Swiss, one section. Rounds 1–3 at 50 min + 10s increment on day one; rounds 4–5 at 90 min + 30s on day two.
- **Tie-breaks**, in order: direct encounter, Buchholz Cut 1, Buchholz, Sonneborn-Berger.
- **Registration** runs off-site through a Google Form. **Payment** is Interac e-Transfer, reconciled manually by the organizer; a registration is confirmed only once payment is received.
- **Roster:** the authoritative pre-registered player list lives in a Google Sheet, mirrored as a snapshot on the site.
- **Rating dependency:** every game is CFC-rated, so each player must hold a current CFC membership from chess.ca. This is an external dependency the organizer does not control.
- **Play-up requests** are handled by email, one at a time, at the organizer's discretion.
- The entire operation is run by hand, by a very small team, with a spreadsheet and an email account.

## Capabilities and Constraints

**Confirmed:**

- Dates, venue, address, round times, time controls, tie-break order, rating floor, and fee structure ($65 early bird before Aug 8 2026; $80 regular; +$20 play-up; −$10 sibling discount).
- Static site — no backend, no database, no server-side registration or payment. Every commitment made on the site must be honourable manually.

**Explicitly undecided.** Future work must not invent values for these:

- Field capacity ("first-come, first-served" is published, but the cap itself is unset)
- Forfeit time
- Refund policy and withdrawal process
- Bye / half-point policy
- Electronic device policy
- Player parking arrangements
- Playing room confirmation (Fraser Room is provisional)
- Public contact email
- e-Transfer recipient address
- Google Form URL (the Register button currently has no working destination)
- Social presence, if any
- Founding story and who runs it
- **Whether a second event happens at all** — the series is conditional on this one working

## Brand Commitments

- **Name: "Road to Masters"** — confirmed settled. Any prior "organizer name tentative" hedging is obsolete.
- **Journey to Masters (JtM) is not part of the public story.** Do not reference JtM, imply lineage from it, or claim continuity with prior events in any public-facing copy.
- Existing descriptor in use: "Chess · British Columbia".
- Existing tagline in use: "Building the road to mastery, one classical game at a time."
- *Observed, not yet confirmed by the owner:* the current copy voice is plain, literal, and domain-fluent — it states numbers and rules rather than selling, and contains no marketing language across any page. Worth confirming as a deliberate commitment, because it is currently the site's strongest asset.

## Evidence on Hand

**Real:**

- Venue and address: Executive Hotel Vancouver Airport, 7311 Westminster Hwy, Richmond BC V6X 1A1
- Pre-registered player list: live Google Sheet (URL in `bc-elite-invitational-1.html`) — note this is currently linked in its `/edit` form and should be published or set view-only
- CFC membership signup: `chess.ca/en/players/membership-join/`
- Sole brand asset: an inline SVG pawn mark in each page header. `assets/` is empty.

**Absences future work must not fabricate:**

- No photographs of any kind — no venue, no players, no past events
- No logo, wordmark, or type asset beyond the inline SVG
- No testimonials, endorsements, press, or partner logos
- No past-event results, attendance figures, or track record — this is a first event
- No confirmed player names; the on-site roster snapshot is empty placeholders
- No prize fund has been stated anywhere

## Product Principles

1. **Protect the floor.** The 2000+ requirement is the entire proposition. Filling seats by lowering it destroys the reason the event exists.
2. **Say the number, not the adjective.** This audience reads "90 min + 30s" and "Buchholz Cut 1" fluently. Specificity is the register; promotional language reads as a warning sign to them.
3. **A first-year event sells on certainty.** With no track record, published decisions are the only proof available. An unwritten refund policy costs more trust than an unfavourable one.
4. **Everything published must be honourable by hand.** No backend exists. Do not promise live standings, instant confirmation, or automated anything that two people with a spreadsheet cannot deliver on the weekend.
5. **Earn the second event.** The series is conditional. Build so a second event is easy to add, but never publish a calendar that may not materialize.

## Accessibility & Inclusion

No user-specific accessibility requirement has been established by the owner. A working standard was adopted and applied on 2026-07-27:

- WCAG 2.x **AA** contrast (4.5:1 body, 3:1 large text) across all surfaces
- Functional/interactive text no smaller than **11px**
- Skip-to-content link, `<main>` landmark, and a skip-free heading outline on every page

Future work should hold this line rather than treat it as a one-time cleanup.
