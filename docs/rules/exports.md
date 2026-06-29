# Export Rules

- all public components export through `src/index.ts`
- each component directory has an `index.ts` that re-exports from the component file — no logic in barrel files
- consumers import from the package root (`@zenika/zui`), never from deep internal paths
- do not export internal helpers, CSS Modules, or token internals unless intentionally part of the public API
