import { el, HTMLTrueElProps } from "@true-ui/components/factory";
import { createStyles, type StyleVariantProps } from "@true-ui/styles";
import { forwardRef } from "react";

// ================================================
//  Button
// ================================================

export type ButtonProps = HTMLTrueElProps<"button"> & {
  styleVariant?: StyleVariantProps<typeof buttonStyles>;
};

const buttonStyles = createStyles({
  base: {
    appearance: "none",
    lineHeight: "none",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    // colorPalette: "base",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    w: "fit-content",
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    position: "relative",
    isolation: "isolate",
  },
  variants: {
    iconOnly: {
      true: {
        aspectRatio: "1/1",
      },
    },
    size: {
      xs: { height: "16px", px: "6px", fontSize: "sm" },
      sm: { height: "24px", px: "8px", fontSize: "md" },
      base: { height: "32px", px: "12px", fontSize: "base" },
      lg: { height: "40px", px: "16px", fontSize: "lg" },
      xl: { height: "48px", px: "20px", fontSize: "xl" },
    },
    color: {
      // base: { colorPalette: "base" },
      amber: { colorPalette: "amber" },
      red: { colorPalette: "red" },
      violet: { colorPalette: "violet" },
    },
    weight: {
      solid: {
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        bg: "colorPalette.9",
        color: "colorPalette.1",
        border: "1px solid",
        borderColor: "colorPalette.A11",
        shadow: "0 1px 4px 0 {colors.colorPalette.A5}",
        _hover: {
          bg: "colorPalette.10",
          boxSizing: "border-box",
          backgroundClip: "padding-box",
        },
      },
      outline: {
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        bg: "colorPalette.2",
        borderColor: "colorPalette.A5",
        border: "1px solid",
        color: "colorPalette.11",
        shadow: "0 1px 2px 0 {colors.colorPalette.A3}",
        _hover: {
          boxSizing: "border-box",
          backgroundClip: "padding-box",
          bg: "colorPalette.3",
          borderColor: "colorPalette.A6",
        },
      },
      subtle: {
        bg: "colorPalette.A3",
        color: "colorPalette.11",
        _hover: { bg: "colorPalette.A4" },
      },
      ghost: {
        bg: "transparent",
        color: "colorPalette.11",
        _hover: { bg: "colorPalette.A4" },
      },
      inline: {
        h: "fit-content",
        w: "fit-content",
        p: "2px",
        bg: "transparent",
        color: "colorPalette.11",
        _hover: {
          bg: "colorPalette.A4",
        },
      },
    },
  },
  defaultVariants: {
    size: "base",
    color: "base",
    weight: "solid",
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { styleVariant, addStyles, ...rest } = props;

    return (
      <el.button
        ref={ref}
        addStyles={[buttonStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
