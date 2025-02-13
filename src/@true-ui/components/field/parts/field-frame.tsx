import { ark, type HTMLArkProps, type HTMLProps } from "@ark-ui/react";
import { createStyles, mergeStyles, type StyleVariantProps } from "@true-ui/styles";
import { forwardRef, useMemo } from "react";
import { useFieldContext } from "@ark-ui/react";
import { ariaAttr, dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";


const fieldFrameStyles = createStyles({
  base: {
    appearance: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    colorPalette: "base",
    w: "full",
    rounded: "4px",
    _selection: {
      bg: "colorPalette.A4",
    },
    _disabled: {
      opacity: "0.5",
    },
    _invalid: {
      colorPalette: "red",
    },
  },
  variants: {
    weight: {
      outline: {
        bg: "colorPalette.A1",
        color: "colorPalette.12",
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        border: "1px solid {colors.colorPalette.A5}",

        _placeholder: {
          color: "colorPalette.A6",
        },
        _hover: { border: "1px solid {colors.colorPalette.A7}" },
        _focusWithin: {
          border: "1px solid {colors.colorPalette.A9}",
          _hover: { border: "1px solid {colors.colorPalette.A9}" },
        },
      },
      subtle: {
        bg: "colorPalette.A3",
        color: "colorPalette.11",

        _placeholder: {
          color: "colorPalette.A6",
        },
        _hover: { bg: "colorPalette.A4" },
        _focusVisible: {
          bg: "colorPalette.A4",
          _hover: { bg: "colorPalette.A4" },
        },
      },
    },
    size: {
      xs: { gap: "4px", height: "16px", px: "4px", fontSize: "xs" },
      sm: { gap: "6px", height: "24px", px: "6px", fontSize: "sm" },
      base: { gap: "8px", height: "32px", px: "8px", fontSize: "base" },
      lg: { gap: "12px", height: "40px", px: "12px", fontSize: "lg" },
      xl: { gap: "16px", height: "48px", px: "16px", fontSize: "xl" },
    },
  },
  defaultVariants: {
    weight: "subtle",
    size: "base",
  },
});

export type FieldFrameProps = HTMLArkProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof fieldFrameStyles>;
};

export const Frame = forwardRef<HTMLDivElement, FieldFrameProps>(
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
          fieldFrameStyles.raw({ size: "base", weight: "outline" })
        )}
      />
    );
  }
);

Frame.displayName = "FieldFrame";
