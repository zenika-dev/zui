# Checkbox — Implementation Plan

## Part 1: Component

1. Create `src/components/Checkbox/Checkbox.tsx` with a constrained `CheckboxProps` interface exposing: `children?: ReactNode` (label), `checked?: boolean`, `defaultChecked?: boolean`, `onChange?: (checked: boolean) => void`, `disabled?: boolean`, `indeterminate?: boolean`. ✅︎
2. Wrap `antd/Checkbox`. Internally adapt `onChange` from AntD's `CheckboxChangeEvent` to extract `e.target.checked` before calling the prop. Checked-state color flows from `colorPrimary` in `ZuiProvider` — no local `ConfigProvider` needed. ✅︎

## Part 2: Stories

1. Create `src/components/Checkbox/Checkbox.stories.tsx` covering base states: `Default` (unchecked), `Checked`, `Indeterminate`, `Disabled`. ✅︎
2. Add remaining variants: `DisabledChecked`, `WithLabel`. ✅︎

## Part 3: Exports

1. Create `src/components/Checkbox/index.ts` re-exporting `Checkbox` and `CheckboxProps`. ✅︎
2. Append to `src/index.ts`: `export { Checkbox } from "./components/Checkbox"` and `export type { CheckboxProps } from "./components/Checkbox"`. ✅︎
