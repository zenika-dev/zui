# Input — Implementation Plan

## Part 1: Component

1. Create `src/components/Input/Input.tsx` with a constrained `InputProps` interface exposing: `value?: string`, `defaultValue?: string`, `onChange?: (value: string) => void`, `placeholder?: string`, `disabled?: boolean`, `readOnly?: boolean`, `size?: "small" | "middle" | "large"`, `status?: "error" | "warning"`, `prefix?: ReactNode`, `suffix?: ReactNode`, `allowClear?: boolean`, `maxLength?: number`, `onPressEnter?: () => void`.
2. Wrap `antd/Input`. Internally adapt `onChange` from `React.ChangeEvent<HTMLInputElement>` to extract `e.target.value` before calling the prop. Do the same for `onPressEnter`. Focus-state border color flows from `colorPrimary` in `ZuiProvider` — no local `ConfigProvider` needed.

## Part 2: Stories

1. Create `src/components/Input/Input.stories.tsx` covering base states: `Default`, `Disabled`, `ReadOnly`, `ErrorStatus`, `WarningStatus`.
2. Add variant stories: `WithPrefix`, `WithSuffix`, `AllowClear`, `Small`, `Large`.

## Part 3: Exports

1. Create `src/components/Input/index.ts` re-exporting `Input` and `InputProps`.
2. Append to `src/index.ts`: `export { Input } from "./components/Input"` and `export type { InputProps } from "./components/Input"`.
