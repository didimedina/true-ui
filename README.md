# 🧮 True-UI

A React component library built with modern styling patterns and motion capabilities.

## Core Technologies

- **React**: UI framework
- **TypeScript**: Type safety and developer experience
- **Panda CSS**: Zero-runtime CSS-in-JS styling system
- **Framer Motion**: Animation library
- **Ark UI**: Unstyled, accessible components

## Key Concepts

### Element System (`el`)

The `el` factory combines Ark UI's asChild feature with Framer Motion's animation capabilities:

```tsx
import { el } from '@true-ui/components/element'

// Basic usage
<el.div/>

// With Framer Motion props
<el.div animate={{ opacity: 0 }} />

// With Ark UI props
<el.button asChild>
{children}
</el.button>
```

### Styling System

We use Panda CSS with some custom abstractions for consistent styling:

```tsx
import { createStyles, mergeStyles } from '@true-ui/styles'
// Create reusable style variants
const buttonStyles = createStyles({
  base: {
    // Base styles
  },
  variants: {
    size: {
      sm: { /* ... */ },
      md: { /* ... */ }
    }
  }
})
// Use in components
<Component className={buttonStyles({ size: 'sm' })} />
```

### Style Utilities

- `createStyles()`: Create style variants with type-safe props
- `mergeStyles()`: Combine multiple style objects
- `mergeClasses()`: Combine className strings

### Component Patterns

Components follow these patterns:

1. Use the `el` factory for base elements
2. Style variants defined with `createStyles`
3. Accept an optional `addStyles` prop for style overrides
4. Forward refs when needed

Example:

```tsx
type ButtonProps = {
  styleVariant?: StyleVariantProps<typeof buttonStyles>;
  addStyles?: SystemStyleObject;
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { styleVariant, addStyles, ...rest } = props;
    return (
      <el.button
        ref={ref}
        className={mergeStyles(buttonStyles(styleVariant), addStyles)}
        {...rest}
      />
    );
  }
);
```

## Development

1. Install dependencies:

```bash
pnpm install
```

2. Start dev server:

```bash
pnpm dev
```

3. Build:

```bash
pnpm build
```

## Project Structure

```bash
src/
-- @true-ui/
---- components/ # React components
---- styles/ # Styling system
------ panda-codegen/ # Generated Panda CSS files (don't edit directly)
```

## Project Owner

- [@didimedina](https://github.com/didimedina)
