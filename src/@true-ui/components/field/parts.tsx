import { Field as ArkField, useFieldContext } from "@ark-ui/react/field";
import {
  el,
  type HTMLProps,
  type HTMLTrueElProps,
} from "@true-ui/components/factory";
import { createStyles, type StyleVariantProps } from "@true-ui/styles";
import { ariaAttr, dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { forwardRef, useMemo } from "react";

// Root
export type RootProps = ArkField.RootProps &
  HTMLTrueElProps<"div"> & {
    styleVariant?: StyleVariantProps<typeof rootStyles>;
  };

const rootStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    // label: {
    //   color: "colorPalette.12",
    //   //   fontWeight: "",
    //   textStyle: "sm",
    //   _disabled: {
    //     color: "fg.disabled",
    //   },
    // },
    // helperText: {
    //   color: "fg.muted",
    //   textStyle: "sm",
    //   _disabled: {
    //     color: "fg.disabled",
    //   },
    // },
    // errorText: {
    //   alignItems: "center",
    //   color: "fg.error",
    //   display: "inline-flex",
    //   gap: "2",
    //   textStyle: "sm",
    //   _disabled: {
    //     color: "fg.disabled",
    //   },
    // },
  },
});

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
    <ArkField.Root asChild>
      <el.div
        ref={ref}
        addStyles={[rootStyles.raw(styleVariant || {}), addStyles]}
        {...rest}
      />
    </ArkField.Root>
  );
});

Root.displayName = "FieldRoot";

// Frame
export type FrameProps = HTMLTrueElProps<"div">;

const frameStyles = createStyles({
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

export const Frame = forwardRef<HTMLDivElement, FrameProps>((props, ref) => {
  const { addStyles, ...rest } = props;
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
  const mergedProps = mergeProps(frameProps, rest);

  return (
    <el.div
      {...mergedProps}
      addStyles={[frameStyles.raw(), addStyles]}
      ref={ref}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          // Use the control ID from field context
          const control = document.getElementById(field?.ids?.control);
          if (control instanceof HTMLElement) control.focus();
        }
      }}
    />
  );
});

Frame.displayName = "FieldFrame";


// ================================================
//  Input
// ================================================

export type InputProps =
  HTMLTrueElProps<"div"> & {
    styleVariant?: StyleVariantProps<typeof inputStyles>;
  };

const inputStyles = createStyles({
  base: {
      /* styles... */
  },
});

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
      <el.div
        ref={ref}
        addStyles={[inputStyles.raw(styleVariant || {}), addStyles]}
        {...rest}
      />
  );
});

Input.displayName = "CompInput";