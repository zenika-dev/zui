> **DEPRECATED** — this file is no longer maintained. Use `docs/rules/` for authoritative architecture rules.

# ZUI — Architecture

## Overview

ZUI is a React UI library built as a themed wrapper around Ant Design (AntD), using the Zenika Design System (SG) Figma file as the brand source of truth.

It is **not** a from-scratch component library. Instead it is:

1. An AntD `ConfigProvider` with Zenika brand tokens baked in
2. Re-exports of AntD components with Zenika-sensible defaults and constrained prop APIs
3. Custom components for domain-specific pieces that don't exist in AntD

AntD handles accessibility, keyboard navigation, ARIA, RTL, and component logic. ZUI owns the brand layer.

---

## Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | React (peer dep `>=16.9.0`) | Matches AntD's peer dep range — consumers control their version |
| Base library | Ant Design v6 | Core component engine |
| Theming | AntD `ConfigProvider` + `theme.token` + `theme.components` | No separate CSS-in-JS runtime needed |
| Custom component styles | CSS Modules | For domain-specific components not covered by AntD |
| TypeScript | strict mode | |
| Build | tsup | Outputs CJS + ESM + `.d.ts`, zero config |
| Storybook | v8 + Vite addon | Co-located devDependency; visual playground during development |
| Icons | `@ant-design/icons` | Custom SVGs only for brand-specific icons (Medium, Figma, ZenikaCode) |
| Package manager | npm | |

### Why not styled-components?

AntD v6 ships its own CSS-in-JS engine (`@ant-design/cssinjs`). Adding styled-components creates two competing style runtimes — specificity conflicts and unnecessary bundle weight. AntD's `theme.token` / `theme.components` API covers everything the brand layer needs.

---

## Brand Tokens

Tokens map directly to AntD's `theme.token` API via `ConfigProvider`.

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
  700  #96163F
  800  #750F30
  900  #630F30

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

### Spacing (8px base)

```
4px   8px   12px   16px   20px   24px   32px   40px   48px   64px
```

### Typography

```
fontFamily   TBD — confirm if Montserrat should be loaded, otherwise system-ui
fontSize     14px (AntD default)
```

### Border Radius

```
borderRadius      6px   (default controls)
borderRadiusLG    8px   (large controls)
borderRadiusSM    4px   (small controls)
```

---

## Component Inventory

### AntD Wrapper Components

Re-export AntD components pre-configured with Zenika defaults. `ConfigProvider` handles most of the brand; these wrappers add constrained prop APIs, default values, or small behavioural tweaks.

| ZUI component | AntD base | Key customisations |
|---|---|---|
| `Button` | `antd/Button` | Maroon 500 primary; size defaults; constrained variant API |
| `InputField` | `antd/Input` | Zenika border radius + spacing tokens; consolidated API |
| `Modal` | `antd/Modal` | Zenika surface token for background; default footer layout |
| `ConfirmationModal` | `antd/Modal` | Pre-wired confirm/cancel pattern on top of Modal |
| `AvatarThumbnail` | `antd/Avatar` | Size variants mapped to Zenika scale |

### Custom Components

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
│   │   ├── colors.ts        # Raw color scale + semantic aliases
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
│   └── index.ts             # Public barrel export
├── .storybook/
│   ├── main.ts
│   └── preview.ts           # Wraps all stories in ZuiProvider
├── docs/
│   └── architecture/
│       └── architecture.md
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── .eslintrc.json
```

---

## Build & Publish

```json
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

**Commands:**
```bash
npm run build        # compile src/ → dist/
npm run storybook    # start local dev playground at localhost:6006
npm run build-storybook  # build static storybook site for deployment
npm publish          # publish to npm registry
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
