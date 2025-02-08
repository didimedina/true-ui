import { el, type TrueElProps } from "@true-ui/components/element";
import { createStyles, type StyleVariantProps } from "@true-ui/styles";
import { forwardRef } from "react";

/*

This is a basic template for creating a component.

Includes:
- Styles 
- Props and their Types
- ForwardRef
- DisplayName
- Exports

const TreeFormNodeIndent = React.forwardRef<
  React.ElementRef<typeof RadixPrimitiveElement.div>,
  React.ComponentPropsWithoutRef<typeof RadixPrimitiveElement.div>
>(({ className, ...props }, ref) => (
  <RadixPrimitiveElement.div
    ref={ref}
    data-part="node-indent"
    className={cn('relative h-full w-[calc((var(--depth)-1)*20px)]', className)}
    {...props}
  />
));
TreeFormNodeIndent.displayName = 'TreeForm.NodeIndent';

*/

const someStyles = createStyles({
  base: {
    /* styles */
  },
  variants: {
    variant: {
      optionA: {
        /* styles */
      },
      optionB: {
        /* styles */
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export type CompProps = TrueElProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof someStyles>;
};

export const Comp = forwardRef<HTMLDivElement, CompProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
    <el.div
      ref={ref}
      addStyles={[someStyles.raw(styleVariant || {}), addStyles]}
      {...rest}
    />
  );
});

Comp.displayName = "Comp";
