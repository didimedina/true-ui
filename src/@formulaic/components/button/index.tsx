import { type SystemStyleObject } from "@formulaic/styles";
import { forwardRef } from "react";
import {
  createStyles,
  mergeClasses,
  mergeStyles,
  type StyleVariantProps,
} from "../../styles";
import { el, type FormulaicElProps } from "../element";

const buttonStyleVariants = createStyles({
  base: {
    boxSizing: "border-box",
    fontFamily: "sans",
    fontWeight: "medium",
    backgroundClip: "padding-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    w: "fit-content",
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    position: "relative",
  },
  variants: {
    iconOnly: {
      true: {
        aspectRatio: "1/1",
      },
    },
    ghost: {
      true: {},
    },
    size: {
      xs: { height: "16px", px: "4px", fontSize: "12px" },
      sm: { height: "24px", px: "8px", fontSize: "14px" },
      md: { height: "32px", px: "12px", fontSize: "16px" },
    },
    color: {
      base: { colorPalette: "base" },
      amber: { colorPalette: "amber" },
      grass: { colorPalette: "grass" },
      violet: { colorPalette: "violet" },
      pink: { colorPalette: "pink" },
      indigo: { colorPalette: "indigo" },
      cyan: { colorPalette: "cyan" },
      jade: { colorPalette: "jade" },
    },
    affordance: {
      primary: {
        bg: "colorPalette.9",
        color: "colorPalette.1",
        border: "1px solid",
        borderColor: "colorPalette.A11",
        shadow: "0 1px 4px 0 {colors.colorPalette.A5}",
        _hover: {
          bg: "colorPalette.10",
          border: "1px solid",
          borderColor: "colorPalette.A11",
        },
      },
      secondary: {
        bg: "colorPalette.2",
        borderColor: "colorPalette.A5",
        border: "1px solid",
        color: "colorPalette.11",
        shadow: "0 1px 2px 0 {colors.colorPalette.A3}",
        _hover: {
          bg: "colorPalette.3",
          borderColor: "colorPalette.A6",
        },
      },
      tertiary: {
        bg: "colorPalette.A3",
        color: "colorPalette.12",
        _hover: { bg: "colorPalette.A4" },
      },
    },
  },
  compoundVariants: [
    {
      affordance: "tertiary",
      ghost: true,
      css: { bg: "transparent" },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "base",
    affordance: "primary",
  },
});

type ButtonProps = FormulaicElProps<"button"> & {
  styleVariant?: StyleVariantProps<typeof buttonStyleVariants>;
  addStyles?: SystemStyleObject;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { styleVariant, addStyles, className, ...rest } = props;

    return (
      <el.button
        ref={ref}
        className={mergeClasses(
          mergeStyles(buttonStyleVariants.raw(styleVariant || {}), addStyles),
          "some-tw-class",
          className
        )}
        {...rest}
      >
        {props.children}
      </el.button>
    );
  }
);

// type StyleVariantAPI = React.ComponentProps<typeof Button>['styleVariant']
