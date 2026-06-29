# Agent Instructions

Each agent should load only the rules files relevant to its task. Do not load all files by default.

---

## Component agent
> Building, modifying, or reviewing components

Load:
- `docs/rules/folder-structure.md`
- `docs/rules/components.md`
- `docs/rules/theming.md`
- `docs/rules/typescript.md`
- `docs/rules/exports.md`

---

## Token / theming agent
> Adding or modifying design tokens, updating the AntD theme mapping, or changing ZuiProvider

Load:
- `docs/rules/theming.md`
- `docs/rules/folder-structure.md`
- `docs/rules/typescript.md`

---

## Storybook agent
> Writing or updating Storybook stories

Load:
- `docs/rules/components.md`
- `docs/rules/folder-structure.md`

---

## Build / publish agent
> Modifying build config, package.json, tsup config, or publishing the package

Load:
- `docs/rules/build.md`
- `docs/rules/exports.md`

---

## Review / audit agent
> Reviewing code for rule compliance across the whole codebase

Load all:
- `docs/rules/folder-structure.md`
- `docs/rules/components.md`
- `docs/rules/theming.md`
- `docs/rules/typescript.md`
- `docs/rules/exports.md`
- `docs/rules/build.md`
