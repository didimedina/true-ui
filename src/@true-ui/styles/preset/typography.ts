import type { TextStyles, Tokens } from "@pandacss/types";

// xs: ['0.75rem', { lineHeight: '1rem' }],
// sm: ['0.875rem', { lineHeight: '1.25rem' }],
// base: ['1rem', { lineHeight: '1.5rem' }],
// lg: ['1.125rem', { lineHeight: '1.75rem' }],
// xl: ['1.25rem', { lineHeight: '1.75rem' }],

export const fontSizes: Tokens["fontSizes"] = {
  // "2xs": { value: "0.5rem" },
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  base: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  // "2xl": { value: "1.5rem" },
  // "3xl": { value: "1.875rem" },
  // "4xl": { value: "2.25rem" },
  // "5xl": { value: "3rem" },
  // "6xl": { value: "3.75rem" },
  // "7xl": { value: "4.5rem" },
  // "8xl": { value: "6rem" },
  // "9xl": { value: "8rem" },
};

export const fontWeights: Tokens["fontWeights"] = {
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" },
};

export const letterSpacings: Tokens["letterSpacings"] = {
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  normal: { value: "0em" },
  loose: { value: "0.025em" },
  looser: { value: "0.05em" },
  // maybe change these to percentage like lineHieght?
};

export const lineHeights: Tokens["lineHeights"] = {
  none: { value: "1" },
  tight: { value: "1.25" },
  normal: { value: "1.5" },
  loose: { value: "1.75" },
};

export const fonts: Tokens["fonts"] = {
  sans: {
    value: [
      "Inter var",
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
  },
  mono: {
    value: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
};

export const textStyles: TextStyles = {
  xs: {
    value: {
      fontSize: "0.75rem",
      lineHeight: "1.25",
    },
  },
  sm: {
    value: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  },
  base: {
    value: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
  lg: {
    value: {
      fontSize: "1.125rem",
      lineHeight: "1.75",
    },
  },
  xl: {
    value: {
      fontSize: "1.25rem",
      lineHeight: "1.75",
    },
  },
};
