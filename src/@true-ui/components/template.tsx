// ================================================
//  {{CompName}}
// ================================================

export type {{CompName}}Props =
  HTMLTrueElProps<"div"> & {
    styleVariant?: StyleVariantProps<typeof {{compName}}Styles>;
  };

const {{compName}}Styles = createStyles({
  base: {
      /* styles... */
  },
});

export const {{CompName}} = forwardRef<HTMLDivElement, {{CompName}}Props>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
      <el.div
        ref={ref}
        addStyles={[{{compName}}Styles.raw(styleVariant || {}), addStyles]}
        {...rest}
      />
  );
});

{{CompName}}.displayName = "Comp{{CompName}}";