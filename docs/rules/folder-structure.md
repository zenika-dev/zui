# Folder Structure Rules

## Project layout
- `src/tokens/` — all design tokens (colors, spacing, typography, radius); nowhere else
- `src/theme/` — AntD ThemeConfig mapping and ZuiProvider; nothing else goes here
- `src/components/` — all components; one subdirectory per component or component family
- `src/index.ts` — public barrel export only; no logic

## Component directory
- every component lives in its own named directory: `src/components/ComponentName/`
- required files in every component directory:
  - `ComponentName.tsx` — the component
  - `index.ts` — re-export only, no logic
  - `ComponentName.stories.tsx` — Storybook stories
- CSS Modules file (custom components only): `ComponentName.module.css` in the same directory
- related components that share a domain go in a shared directory (eg: `Modal/` contains Modal, ConfirmationModal, PointsModal with one shared `index.ts`)

## Naming
- component files: PascalCase (`Button.tsx`, `AvatarThumbnail.tsx`)
- token files: camelCase (`colors.ts`, `spacing.ts`)
- CSS Module files: match the component name (`Button.module.css`)
- story files: match the component name (`Button.stories.tsx`)
- barrel files: always named `index.ts`

## What does not belong in src/
- docs, config files, scripts — project root or `docs/`
- Storybook config — `.storybook/`
- test setup — project root or a config directory
