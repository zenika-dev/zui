> **DEPRECATED** — this file is no longer maintained. Use `docs/rules/` for authoritative architecture rules.


# ZUI — Implementation Plan

React UI library built as a themed wrapper around Ant Design, using the Zenika Design System (SG) Figma file as the brand source of truth.

---

## Architecture

ZUI is **not** a from-scratch component library. It is:

1. An AntD `ConfigProvider` with Zenika brand tokens baked in
2. Re-exports of AntD components with Zenika-sensible defaults and constrained prop APIs
3. Custom components for domain-specific pieces that don't exist in AntD (rewards, bell, carousel, etc.)

AntD handles accessibility, keyboard navigation, ARIA, RTL, and component logic. ZUI owns the brand layer.

---

## Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | React (peer dep `>=16.9.0`) | Matches AntD's own peer dep range — consumers control their version |
| Base library | Ant Design v6 | Core component engine |
| Theming | AntD `ConfigProvider` + `theme.token` + `theme.components` | No separate CSS-in-JS runtime needed |
| Custom component styles | CSS Modules | For domain-specific components not covered by AntD |
| TypeScript | strict mode | |
| Build | tsup | Outputs CJS + ESM + `.d.ts`, zero config |
| Storybook | v8 + Vite addon | Co-located devDependency |
| Package manager | npm | |

### Why not styled-components?

AntD v6 ships its own CSS-in-JS engine (`@ant-design/cssinjs`). Adding styled-components creates two competing style runtimes — specificity conflicts and unnecessary bundle weight. AntD's `theme.token` / `theme.components` API covers everything the brand layer needs.

---

## Open Questions

1. **Package name** — `@zenika/zui` ✓
2. **Storybook deploy** — revisit after development phase (Chromatic, Vercel, or GitHub Pages)
3. **Icon strategy** — `@ant-design/icons` ✓; custom SVGs only for brand-specific icons (Medium, Figma, ZenikaCode)
4. **Testing** — unit tests (Vitest + RTL) added later; Storybook covers visual/playground needs during dev ✓
5. **AntD version pin** — `"antd": ">=6"` ✓

---

## Brand Tokens

### Colors

```
Primary (Maroon)
  50   #FDE8EF
  100  #FAD0E0
  200  #F4A1C1
  300  #E8729F
  400  #D94880
  500  #C71E5B  ← brand Maroon 500
  600  #A6184D
  700  #96163F  (hover)
  800  #750F30
  900  #630F30  (pressed)

Neutral
  0    #FFFFFF
  50   #FAFAFA
  100  #F5F5F5
  200  #E5E5E5
  300  #D4D4D4
  400  #A3A3A3
  500  #737373
  600  #525252
  700  #404040
  800  #262626
  900  #171717

Semantic → AntD token mapping
  colorPrimary          #C71E5B        (primary.500)
  colorBgContainer      #FFFFFF        (neutral.0)
  colorBgLayout         #F5F5F5        (neutral.100)
  colorText             #171717        (neutral.900)
  colorTextSecondary    #737373        (neutral.500)
  colorTextDisabled     #D4D4D4        (neutral.300)
  colorBorder           #E5E5E5        (neutral.200)
  colorBorderSecondary  #F5F5F5        (neutral.100)
```

### Spacing scale (8px base)

```
space.1   4px
space.2   8px
space.3   12px
space.4   16px
space.5   20px
space.6   24px
space.8   32px
space.10  40px
space.12  48px
space.16  64px
```

### Typography

```
Font family: system-ui (confirm if Montserrat should be loaded)

Scale:
  xs    12px / 16px line-height
  sm    14px / 20px
  md    16px / 24px  ← body default
  lg    18px / 28px
  xl    20px / 30px
  2xl   24px / 32px
  3xl   30px / 38px

Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
```

### Border radius

```
radius.sm   4px
radius.md   8px
radius.lg   12px
radius.xl   16px
radius.full 9999px
```

---

## Component Inventory

### AntD wrapper components
Re-export AntD components pre-configured with Zenika defaults. `ConfigProvider` handles most of the brand; these wrappers add constrained prop APIs, default values, or small behavioural tweaks.

| ZUI component | AntD base | Key customisations |
|---|---|---|
| `Button` | `antd/Button` | Maroon 500 primary; size defaults; constrained variant API |
| `InputField` | `antd/Input` | Zenika border radius + spacing tokens; consolidated API |
| `Modal` | `antd/Modal` | Zenika surface token for background; default footer layout |
| `ConfirmationModal` | `antd/Modal` | Pre-wired confirm/cancel pattern on top of Modal |
| `AvatarThumbnail` | `antd/Avatar` | Size variants mapped to Zenika scale |

### Custom components
Built from scratch (AntD primitives where helpful, CSS Modules for style) — no direct AntD equivalent exists.

| ZUI component | Notes |
|---|---|
| `PointsModal` | Rewards points display — extends Modal shell |
| `Bell` | Notification bell with unread badge — wraps AntD `Badge` + custom SVG |
| `Carousel` | Slick-dots pagination — wraps AntD `Carousel` |
| `RewardBalance` | Displays point balance — domain-specific layout |
| `RewardBalanceContent` | Inner content for balance display |
| `RewardCategory` | Category chip/card for reward items |
| `ZenikaCode` | QR-code style brand element |
| `MediumIcon` | Medium social icon (SVG) |
| `FigmaIcon` | Figma social icon (SVG) |

---

## Project Structure

```
zui/
├── src/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── radius.ts
│   │   └── index.ts
│   ├── theme/
│   │   ├── antdTheme.ts     # Maps Zenika tokens → AntD ThemeConfig object
│   │   └── ZuiProvider.tsx  # Wraps AntD ConfigProvider with Zenika theme
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── InputField/
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   ├── ConfirmationModal.tsx
│   │   │   ├── PointsModal.tsx
│   │   │   ├── Modal.stories.tsx
│   │   │   └── index.ts
│   │   ├── AvatarThumbnail/
│   │   ├── Bell/
│   │   ├── Carousel/
│   │   ├── Reward/
│   │   │   ├── RewardBalance.tsx
│   │   │   ├── RewardBalanceContent.tsx
│   │   │   ├── RewardCategory.tsx
│   │   │   ├── Reward.stories.tsx
│   │   │   └── index.ts
│   │   └── ZenikaCode/
│   └── index.ts              # Public barrel export
├── .storybook/
│   ├── main.ts
│   └── preview.ts            # Wraps all stories in ZuiProvider
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── .eslintrc.json
```

---

## Build & Publish Config

```json
// package.json (key fields)
{
  "name": "@zenika/zui",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "peerDependencies": {
    "react": ">=16.9.0",
    "react-dom": ">=16.9.0",
    "antd": ">=6"
  },
  "files": ["dist"]
}
```

---

## Implementation Order

1. **Scaffold** — `package.json`, `tsconfig.json`, `tsup.config.ts`, Storybook config
2. **Tokens** — colors → spacing → typography → radius
3. **ZuiProvider** — map tokens to AntD `ThemeConfig`, wrap `ConfigProvider`
4. **Button** — first wrapper; sets the pattern for all AntD wrappers
5. **InputField**
6. **Modal family** — Modal → ConfirmationModal → PointsModal
7. **AvatarThumbnail** + **Bell**
8. **Carousel**
9. **Reward components** — RewardBalance, RewardCategory, RewardBalanceContent
10. **Brand components** — ZenikaCode, MediumIcon, FigmaIcon
11. **Barrel export + build verification**
