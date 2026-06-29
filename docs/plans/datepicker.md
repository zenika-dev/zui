# DatePicker — Implementation Plan

## Part 1: Component

1. Create `src/components/DatePicker/DatePicker.tsx` with a constrained `DatePickerProps` interface exposing: `value?: Dayjs`, `defaultValue?: Dayjs`, `onChange?: (date: Dayjs | null) => void`, `placeholder?: string`, `disabled?: boolean`, `size?: "small" | "middle" | "large"`, `format?: string`, `picker?: "date" | "week" | "month" | "year" | "quarter"`, `disabledDate?: (date: Dayjs) => boolean`, `allowClear?: boolean`, `status?: "error" | "warning"`. Import `Dayjs` from `dayjs` (already a peer dep of antd v6 — no new dependency).
2. Wrap `antd/DatePicker`. Adapt `onChange` to drop the `dateString` second argument, exposing only `date: Dayjs | null`. Focus/hover border colors flow from `colorPrimary` in `ZuiProvider` — no local `ConfigProvider` needed.

## Part 2: Stories

1. Create `src/components/DatePicker/DatePicker.stories.tsx` covering base states: `Default`, `Disabled`, `ErrorStatus`, `AllowClear`.
2. Add picker-variant stories: `MonthPicker` (`picker="month"`), `YearPicker` (`picker="year"`), `WithFormat`, `DisabledDate`, `Small`, `Large`.

## Part 3: Exports

1. Create `src/components/DatePicker/index.ts` re-exporting `DatePicker` and `DatePickerProps`.
2. Append to `src/index.ts`: `export { DatePicker } from "./components/DatePicker"` and `export type { DatePickerProps } from "./components/DatePicker"`.
