import { forwardRef, useMemo } from 'react'
import { ark, type HTMLArkProps, type HTMLProps } from '@ark-ui/react'
import { createStyles, mergeStyles, type StyleVariantProps} from '@true-ui/styles'
import { Field, useFieldContext } from "@ark-ui/react/field";
import { mergeProps } from "@zag-js/react";


export const fieldFrameStyles = createStyles({
  base: {
    appearance: 'none',
    background: 'none',
    borderColor: 'border.default',
    borderRadius: 'l2',
    borderWidth: '1px',
    color: 'fg.default',
    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'box-shadow, border-color',
    transitionTimingFunction: 'default',
    width: 'full',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: 'colorPalette.default',
      boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
    _invalid: {
      borderColor: 'fg.error',
      _focus: {
        borderColor: 'fg.error',
        boxShadow: '0 0 0 1px var(--colors-border-error)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      '2xs': { px: '1.5', h: '7', minW: '7', fontSize: 'xs' },
      xs: { px: '2', h: '8', minW: '8', fontSize: 'xs' },
      sm: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' },
      md: { px: '3', h: '10', minW: '10', fontSize: 'md' },
      lg: { px: '3.5', h: '11', minW: '11', fontSize: 'md' },
      xl: { px: '4', h: '12', minW: '12', fontSize: 'lg' },
      '2xl': { px: '4.5', h: '16', minW: '16', textStyle: '3xl' },
    },
  },
})

type FieldFrameProps = HTMLArkProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof fieldFrameStyles>;
};

export const FieldFrame = forwardRef<HTMLDivElement, FieldFrameProps>(
    (props, ref) => {
      // is there a way to create a new context here and use it for input and text area so they both get data-framed attribute?
      const field = useFieldContext();
      // ark doesn't export getControlProps() so we're essentially asking for the same contexts to recreate it
      const frameProps = useMemo(
        () =>
          ({
            // "aria-describedby": field?.ariaDescribedby,
            "aria-invalid": ariaAttr(field?.invalid),
            "data-invalid": dataAttr(field?.invalid),
            "data-required": dataAttr(field?.required),
            "data-readonly": dataAttr(field?.readOnly),
            "data-disabled": dataAttr(field?.disabled),
            "data-part": "frame",
            "data-scope": "field",
          }) as HTMLProps<"div">,
        [
          // field?.ariaDescribedby,
          field?.invalid,
          field?.required,
          field?.readOnly,
          field?.disabled,
        ]
      );
      const mergedProps = mergeProps(frameProps, props);
  
      return (
        <ark.div
          {...mergedProps}
          ref={ref}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              // Use the control ID from field context
              const control = document.getElementById(field?.ids?.control);
              if (control instanceof HTMLElement) control.focus();
            }
          }}
          className={mergeStyles(
            fieldFrameStyles.raw({ size: "base", affordance: "secondary" })
          )}
        />
      );
    }
  );
  
  FieldFrameWIP.displayName = "FieldFrame";