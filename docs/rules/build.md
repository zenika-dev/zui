# Build Rules

## Output
- tsup outputs CJS (`dist/index.js`) + ESM (`dist/index.mjs`) + types (`dist/index.d.ts`)
- only `dist/` is published — `"files": ["dist"]` in package.json

## Dependencies
- react, react-dom, antd are peer deps — never bundle them
- do not add runtime dependencies without discussion; prefer AntD primitives and browser APIs first

## Commands
- `npm run build` — compile `src/` → `dist/`
- `npm run storybook` — dev playground at localhost:6006
- `npm run build-storybook` — static Storybook build for deployment
- `npm publish` — publish to npm registry
