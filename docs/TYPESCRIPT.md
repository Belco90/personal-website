# TypeScript Conventions

## Compiler Configuration

The project uses strict TypeScript settings with:

- Strict mode enabled (`strict: true`)
- No unchecked indexed access (`noUncheckedIndexedAccess: true`)
- Strict null checks enabled

## Type Definitions

Use `type` aliases by default. Use `interface` for public APIs when extension might be needed, but `type` is preferred in most cases to avoid index signature issues with interfaces.

## Imports

Always use type imports when importing types:

```typescript
import type { ComponentProps } from 'react'
```

The ESLint config enforces:

- Consistent type imports (`@typescript-eslint/consistent-type-imports`)
- Consistent type exports (`@typescript-eslint/consistent-type-exports`)

## Path Aliases

The project uses path aliases defined in `tsconfig.json`:

- `#/*` maps to `./src/*`
- `#/styled-system/*` maps to `./styled-system/*`

## Array Types

Prefer generic syntax for arrays:

```typescript
Array<string>  // preferred
string[]       // avoid
```
