# L2 Patterns — shipyouridea

> Recurring UX/UI patterns observed in static HTML of https://shipyouridea.today/.
> Aligns with `02_patterns_spec.md`.

**Top note.** shipyouridea.today shares its Next.js codebase with ideacheck.cc. The key pattern-level delta is a simplified anchor navigation (3 anchors vs 4) and a reframing of the first nav slot from `服務` (Service) to `範例` (Example). Together these suggest a repositioning experiment — same codebase, leaner information architecture, example-first CTA framing.

> Note on live verification: server-rendered HTML at the time of capture still emits `服務` for the first nav label, while the React component source uses `範例`. The 3-vs-4 anchor delta and the 範例 reframing are confirmed at the source level; the SSR snapshot may lag the deployed client bundle.

---

## 1. Sticky Backdrop Navigation

- **Where seen:** Top-level `<header>` (root layout, every page).
- **Pattern:** `sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-950/5`, 3-column grid (logo / centered links / actions).
- **Rationale:** Keeps nav visible during long-scroll landing pages while staying visually quiet over hero imagery; backdrop blur preserves content legibility.
- **Confidence:** HIGH
- **Spec mapping:** `02_patterns_spec.md` → Navigation Patterns → sticky header variant.

## 2. Max-width Centered Container

- **Where seen:** Every section wrapper across landing, pricing, FAQ.
- **Pattern:** `mx-auto max-w-6xl px-6` (≈1152px content column with 24px gutter).
- **Rationale:** One canonical content width simplifies vertical rhythm and keeps line-length readable on wide displays.
- **Confidence:** HIGH
- **Spec mapping:** Layout Patterns → container token `container.max-6xl`.

## 3. Responsive Flex Column-to-Row

- **Where seen:** Hero CTA group, pricing card actions, FAQ rows.
- **Pattern:** `flex flex-col gap-4 sm:flex-row` — stack on mobile, inline from `sm:` breakpoint up.
- **Rationale:** Single-source layout that handles touch and desktop without media-query branching; gap token reused everywhere for consistent spacing.
- **Confidence:** HIGH
- **Spec mapping:** Layout Patterns → responsive stack utility.

## 4. Simplified Anchor Navigation (Pattern Delta vs ideacheck)

- **Where seen:** Header nav links.
- **Pattern:** Exactly 3 in-page anchors — `#demo`, `#pricing`, `#faq`. ideacheck.cc additionally exposes `#data-sources`. The first nav label is `範例` (Example) in component source, replacing ideacheck's `服務` (Service).
- **Rationale:** Reframes the product around a single demonstrable example rather than a feature/service catalog. Removing `#data-sources` shortens the IA and pushes evidence into the demo block itself. This is the central repositioning hypothesis of the shipyouridea variant.
- **Confidence:** HIGH (anchor count, source label); MEDIUM (live SSR still shows `服務` — see top note).
- **Spec mapping:** Navigation Patterns → IA hierarchy; Differentiation → repositioning experiments.

## 5. Inline Interactive Demo Form

- **Where seen:** `InteractiveDemo` client component beneath hero.
- **Pattern:** Inferred — single-step inline form (no modal), client-rendered, likely posts to a backend route for idea validation.
- **Rationale:** Inline form removes friction vs modal/route navigation; reinforces the example-first framing of pattern #4.
- **Confidence:** LOW (component is client-side; static HTML does not include the form markup).
- **Spec mapping:** Form Patterns → inline single-step form.

## 6. Internationalization Shell

- **Where seen:** Root layout — `<html lang="zh-Hant">`, `LanguageSwitcher` in header, `LocaleProvider` wrapping the tree.
- **Pattern:** Locale-aware provider with a header switcher; default locale Traditional Chinese.
- **Rationale:** Same codebase serves multiple market positions (ideacheck / shipyouridea) and presumably multiple locales; centralizing in a provider avoids per-page wiring.
- **Confidence:** HIGH
- **Spec mapping:** Global Shell Patterns → i18n provider.

## 7. Auth Gate

- **Where seen:** `AuthProvider` in root layout; `/login` route present in route tree.
- **Pattern:** Global auth context with a dedicated login route; gated actions presumably redirect to `/login`.
- **Rationale:** Allows the marketing surface to remain public while protecting demo submission / saved-idea flows.
- **Confidence:** HIGH
- **Spec mapping:** Auth Patterns → provider + route gate.

## 8. Metadata-First SEO

- **Where seen:** `<head>` of `/`.
- **Pattern:** Full Open Graph and Twitter card meta — `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`, plus `twitter:card=summary_large_image` and matching `twitter:*` fields.
- **Rationale:** Optimizes social-link previews, which are the primary distribution channel for an idea-validation product launched via X/LinkedIn posts.
- **Confidence:** HIGH
- **Spec mapping:** SEO Patterns → metadata-first.
