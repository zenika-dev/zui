# Component Rules

## Wrapper vs custom
- if AntD has a base component: wrap it, don't rebuild from scratch
- if no AntD equivalent exists: build custom using CSS Modules; use AntD primitives where helpful

## Props
- use TypeScript interfaces for all props, not type aliases
- constrain the API — don't expose raw AntD props passthrough; expose only what ZUI consumers need
- apply Zenika defaults inside the component so consumers get correct brand without any extra config

## Styling
- AntD wrappers: style via `theme.token` / `theme.components` in ConfigProvider — no inline styles, no CSS Modules
- custom components: CSS Modules only — no inline styles, no styled-components

## Storybook
- every component must have a stories file
- stories wrap in ZuiProvider automatically via `.storybook/preview.ts` — do not add it manually per story
- cover at minimum: default state + all meaningful variants
