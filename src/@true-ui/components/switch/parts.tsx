import { Switch as ArkSwitch } from "@ark-ui/react";
import { el, type HTMLTrueElProps } from "@true-ui/components/factory";
import { createStyles, type StyleVariantProps } from "@true-ui/styles";
import {
  createStyleVariantContext,
  type StrictVariants,
  type StylesSchema,
} from "@true-ui/styles/utils";
import { forwardRef } from "react";

// 🚧 WIP
// [x] Root
// [] Control
// [] Thumb
// [] HiddenInput
// [] Label

// ================================================
//  Style Variant Schema and Context
// ================================================

const { StyleVariantContext, useStyleVariantContext } =
  createStyleVariantContext<typeof rootStyles>();

const switchVariants = {
  variants: {
    size: ["xs", "sm", "base", "lg", "xl"],
  },
  defaultVariants: {
    size: "base",
  },
} as const satisfies StrictVariants;

type SwitchStylesSchema = StylesSchema<typeof switchVariants>;

// ================================================
//  Root
// ================================================

export type RootProps = HTMLTrueElProps<"div"> &
  ArkSwitch.RootProps & {
    styleVariant?: StyleVariantProps<typeof rootStyles>;
  };

const rootStyles = createStyles({
  base: {
    /* styles... */
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
    <StyleVariantContext.Provider value={styleVariant}>
      <ArkSwitch.Root asChild>
        <el.div
          ref={ref}
          addStyles={[rootStyles.raw(styleVariant || {}), addStyles]}
          {...rest}
        />
      </ArkSwitch.Root>
    </StyleVariantContext.Provider>
  );
});

Root.displayName = "SwitchRoot";

// ================================================
//  Control
// ================================================

export type ControlProps = HTMLTrueElProps<"div">;

const controlStyles = createStyles({
  base: {
    /* styles... */
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: {
    ...switchVariants.defaultVariants,
  },
} satisfies SwitchStylesSchema);

export const Control = forwardRef<HTMLDivElement, ControlProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariantContext = useStyleVariantContext();

    return (
      <el.div
        ref={ref}
        addStyles={[controlStyles.raw(styleVariantContext || {}), addStyles]}
        {...rest}
      />
    );
  }
);

Control.displayName = "CompControl";
