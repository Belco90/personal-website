# Styling Conventions

## Styling System

This project uses [Panda CSS](https://panda-css.com/) with [Park UI](https://park-ui.com/) components.

## Architecture

- **Theme configuration**: `panda.config.ts` at the root
- **Theme tokens**: Located in `src/theme/`
  - Colors, durations, fonts, shadows, z-index
  - Animation styles, keyframes, layer styles
  - Recipes and slot recipes for component variants
- **Generated styles**: Output to `styled-system/` directory

## Using Styles

Import from the generated styled-system:

```typescript
import { css } from '#/styled-system/css'
import { container } from '#/styled-system/patterns'
```

## Color Tokens

The project uses semantic tokens with light/dark mode support:

- `fg.default`, `fg.muted`, `fg.subtle` for text colors
- `border` for borders
- Custom color palettes: lime (accent), olive (gray), red, green

## Adding Components

To add Park UI components:

```bash
pnpm park:add [component-name]
```

## Import Order

ESLint enforces import grouping with `import-x/order`. Internal imports using `#/` prefix are grouped together.
