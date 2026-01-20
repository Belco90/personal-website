# Build and Deployment

## Commands

All commands use pnpm (managed via corepack):

- **Development**: `pnpm dev`
- **Build**: `pnpm build`
- **Type check**: `pnpm type-check`
- **Lint**: `pnpm lint` (or `pnpm lint:fix` for auto-fixing)
- **Format**: `pnpm format` (or `pnpm format:check` to verify)

## Deployment

The site deploys to Netlify. The build process:

1. Runs `pnpm build` which creates the production bundle
2. Uses Vite with the Netlify TanStack Start plugin (`@netlify/vite-plugin-tanstack-start`)

## Pre-commit Hooks

The project uses Husky with lint-staged to:

- Format code with Prettier
- Run ESLint on staged files
- Type check before commits

## Panda CSS

Styles are generated at build time via Panda CSS. Run `panda codegen` to regenerate the `styled-system` directory (this happens automatically via the `prepare` script).
