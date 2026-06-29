## Overview

ZUI is a React UI library built as a themed wrapper around Ant Design (AntD), using the Zenika Design System (SG) Figma file as the brand source of truth.

It is **not** a from-scratch component library. Instead it is:

1. An AntD `ConfigProvider` with Zenika brand tokens baked in
2. Re-exports of AntD components with Zenika-sensible defaults and constrained prop APIs
3. Custom components for domain-specific pieces that don't exist in AntD

AntD handles accessibility, keyboard navigation, ARIA, RTL, and component logic. ZUI owns the brand layer.

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