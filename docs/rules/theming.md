# Theming Rules

## Tokens
- all token values live in `src/tokens/` — never hardcode hex, px, or font values in components
- token files: `colors.ts`, `spacing.ts`, `typography.ts`, `radius.ts`, exported via `src/tokens/index.ts`

## AntD theme mapping
- tokens map to AntD's `theme.token` and `theme.components` in `src/theme/antdTheme.ts`
- all consumers must wrap their app in `ZuiProvider` to apply the Zenika theme

## What is not allowed
- styled-components or any second CSS-in-JS runtime — AntD v5 ships its own; two runtimes cause specificity conflicts
- overriding AntD styles with `!important` or deep CSS selectors
- hardcoded color, spacing, or radius values outside of `src/tokens/`
