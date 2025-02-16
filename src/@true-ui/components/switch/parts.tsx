"use client";
import { Switch as ArkSwitch } from "@ark-ui/react";
import { withBase, type BaseProps } from "@true-ui/components/factory";
import { createStyles, type StyleVariantProps } from "@true-ui/styles";
import {
  createStyleVariantContext,
  type StrictVariants,
  type StylesSchema,
} from "@true-ui/styles/utils";
import * as motion from "motion/react-client";
import { forwardRef } from "react";

// ================================================
//  Style Variant Schema and Context
// ================================================

const { StyleVariantContext, useStyleVariantContext } =
  createStyleVariantContext<typeof rootStyles>();

const switchVariants = {
  variants: {
    size: ["xs", "sm", "base", "lg", "xl"],
    color: ["base", "violet", "grass"],
  },
  defaultVariants: {
    size: "base",
    color: "base",
  },
} as const satisfies StrictVariants;

type SwitchStylesSchema = StylesSchema<typeof switchVariants>;

// ================================================
//  Root
// ================================================

export type RootProps = BaseProps &
  ArkSwitch.RootProps & {
    styleVariant?: StyleVariantProps<typeof rootStyles>;
  };

const ArkSwitchRootWithBase = withBase(ArkSwitch.Root);

const rootStyles = createStyles({
  base: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    gap: "8px",
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
    color: {
      base: { colorPalette: "base" },
      violet: { colorPalette: "violet" },
      grass: { colorPalette: "grass" },
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Root = forwardRef<HTMLLabelElement, RootProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
    <StyleVariantContext.Provider value={styleVariant ? styleVariant : {}}>
      <ArkSwitchRootWithBase
        ref={ref}
        addStyles={[rootStyles.raw(styleVariant || {}), addStyles]}
        {...rest}
      />
    </StyleVariantContext.Provider>
  );
});

Root.displayName = "SwitchRoot";

// ================================================
//  Control
// ================================================

export type ControlProps = BaseProps & ArkSwitch.ControlProps;

const ArkSwitchControlWithBase = withBase(ArkSwitch.Control);

const controlStyles = createStyles({
  base: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    p: "1px",
    cursor: "pointer",
    bg: "base.7",
    rounded: "full",
    justifyContent: "start",
    _checked: {
      bg: "colorPalette.9",
      justifyContent: "end",
    },
  },
  variants: {
    size: {
      xs: {
        h: "16px",
        w: "calc(16px * 1.5)",
      },
      sm: {
        h: "20px",
        w: "calc(20px * 1.5)",
      },
      base: {
        h: "24px",
        w: "calc(24px * 1.5)",
      },
      lg: {}, // 🚧
      xl: {}, // 🚧
    },
    color: {
      base: {},
      violet: {},
      grass: {},
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Control = forwardRef<HTMLSpanElement, ControlProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariantContext = useStyleVariantContext();

    return (
      <ArkSwitchControlWithBase
        ref={ref}
        addStyles={[controlStyles.raw(styleVariantContext || {}), addStyles]}
        {...rest}
      />
    );
  }
);

Control.displayName = "SwitchControl";

// ================================================
//  Thumb
// ================================================

export type ThumbProps = BaseProps & ArkSwitch.ThumbProps;

const MotionSpanWithBase = withBase(motion.span);

const thumbStyles = createStyles({
  base: {
    boxSizing: "border-box",
    backgroundClip: "padding-box",
    bg: "base.1",
    h: "full",
    borderColor: "base.A3",
    border: "1px solid",
    shadow: "0 1px 2px 0 {colors.base.A3}",
    rounded: "full",
    aspectRatio: "1/1",
    _hover: {
      bg: "base.2",
      borderColor: "base.A5",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
    },
    _active: {
      scale: "0.9",
    },
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
    color: {
      base: {},
      violet: {},
      grass: {},
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Thumb = forwardRef<HTMLSpanElement, ThumbProps>((props, ref) => {
  const { addStyles, asChild, ...rest } = props;

  const styleVariantContext = useStyleVariantContext();

  return (
    <ArkSwitch.Thumb ref={ref} {...rest} asChild>
      <MotionSpanWithBase
        layout
        asChild={asChild}
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        addStyles={[thumbStyles.raw(styleVariantContext || {}), addStyles]}
      />
    </ArkSwitch.Thumb>
  );
});

Thumb.displayName = "SwitchThumb";

// ================================================
//  HiddenInput (has no styles)
// ================================================

export type HiddenInputProps = ArkSwitch.HiddenInputProps;

export const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>(
  (props, ref) => {
    return <ArkSwitch.HiddenInput ref={ref} {...props} />;
  }
);

HiddenInput.displayName = "SwitchHiddenInput";

// ================================================
//  Label
// ================================================

export type LabelProps = BaseProps & ArkSwitch.LabelProps;

const ArkSwitchLabelWithBase = withBase(ArkSwitch.Label);

const labelStyles = createStyles({
  base: {
    color: "base.11",
  },
  variants: {
    size: {
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      base: { fontSize: "sm" },
      lg: { fontSize: "base" },
      xl: { fontSize: "lg" },
    },
    color: {
      base: {},
      violet: {},
      grass: {},
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { addStyles, ...rest } = props;

  const styleVariantContext = useStyleVariantContext();

  return (
    <ArkSwitchLabelWithBase
      ref={ref}
      addStyles={[labelStyles.raw(styleVariantContext || {}), addStyles]}
      {...rest}
    />
  );
});

Label.displayName = "SwitchLabel";
