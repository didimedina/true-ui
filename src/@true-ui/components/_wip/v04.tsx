const styleVariants = createStyles({
    base: {},
    variants: {
      weight: {
        solid: {},
        outline: {},
        subtle: {},
        ghost: {},
        inline: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      }
    }
  })
  
  type StyleSchema = StyleVariantProps<typeof styleVariants>
  
  // This will error if you don't implement all the same variant options
  const anotherComponent = createStyles({
    variants: {
      size: {
        sm: { /* must implement sm */ },
        md: { /* must implement md */ },
        lg: { /* must implement lg */ }
      },
      variant: {
        solid: { /* must implement solid */ },
        outline: { /* must implement outline */ },
        something: {},
      }
    } satisfies Record<keyof StyleSchema, any>
  })