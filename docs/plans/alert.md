# Alert — Implementation Plan

## Part 1: Component

1. ✅︎ Create `src/components/Alert/Alert.tsx` with a constrained `AlertProps` interface exposing: `message: ReactNode`, `type?: "info" | "success" | "warning" | "error"` (default `"info"`), `description?: ReactNode`, `showIcon?: boolean` (default `true`), `closable?: boolean`, `onClose?: () => void`, `banner?: boolean`.
2. ✅︎ Wrap `antd/Alert`, applying the above defaults inside the component. No local `ConfigProvider` needed — semantic color tokens in `ZuiProvider` already drive Alert's color system.

## Part 2: Stories

1. ✅︎ Create `src/components/Alert/Alert.stories.tsx` covering: `Info` (default), `Success`, `Warning`, `Error`.
2. ✅︎ Add additional story variants: `WithDescription`, `Closable`, `Banner`.

## Part 3: Exports

1. ✅︎ Create `src/components/Alert/index.ts` re-exporting `Alert` and `AlertProps`.
2. ✅︎ Append to `src/index.ts`: `export { Alert } from "./components/Alert"` and `export type { AlertProps } from "./components/Alert"`.
