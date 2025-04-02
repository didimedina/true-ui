import { Field as ArkField, useFieldContext } from "@ark-ui/react/field";
import {
  el,
  withBase,
  type BaseProps,
  type HTMLProps,
  type HTMLTrueElProps,
} from "@true-ui/components/factory";
import { focusInternalField } from "@true-ui/components/field/focusInternalField";
import {
  createStyles,
  createStyleVariantContext,
  StrictVariants,
  StylesSchema,
  type StyleVariantProps,
} from "@true-ui/styles";
import { ariaAttr, dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { forwardRef, useMemo } from "react";

// ================================================
//  Style Variant Schema and Context
// ================================================

const { StyleVariantContext, useStyleVariantContext } =
  createStyleVariantContext<typeof rootStyles>();

const fieldVariants = {
  variants: {
    size: ["xs", "sm", "base", "lg", "xl"],
    weight: ["outline", "subtle"],
    layout: ["horizontal", "vertical"],
  },
  defaultVariants: {
    size: "base",
    weight: "outline",
    layout: "horizontal",
  },
} as const satisfies StrictVariants;

type FieldStylesSchema = StylesSchema<typeof fieldVariants>;

// ================================================
//  Root
// ================================================
export type RootProps = ArkField.RootProps &
  BaseProps & {
    styleVariant?: StyleVariantProps<typeof rootStyles>;
  };

const ArkFieldRootWithBase = withBase(ArkField.Root);

const rootStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    _disabled: {
      opacity: "0.6",
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
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, addStyles, ...rest } = props;

  return (
    <StyleVariantContext.Provider value={styleVariant}>
      <ArkFieldRootWithBase
        ref={ref}
        addStyles={[rootStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    </StyleVariantContext.Provider>
  );
});

Root.displayName = "FieldRoot";

// ================================================
//  Label
// ================================================

export type LabelProps = BaseProps & ArkField.LabelProps;

const ArkFieldLabelWithBase = withBase(ArkField.Label);

const labelStyles = createStyles({
  base: {
    color: "base.11",
    textStyle: "base",
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { addStyles, ...rest } = props;

  const styleVariant = useStyleVariantContext();

  return (
    <ArkFieldLabelWithBase
      ref={ref}
      addStyles={[labelStyles.raw(styleVariant), addStyles]}
      {...rest}
    />
  );
});

Label.displayName = "FieldLabel";

// ================================================
//  Frame
// ================================================

// 🚧 TODO: needs to grow when using textarea. Can be done by switching layout and using grid under the hood.

export type FrameProps = HTMLTrueElProps<"div"> & {
  autoFocus?: boolean;
};

const frameStyles = createStyles({
  base: {
    appearance: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    colorPalette: "base",
    "& :where(svg)": {
      color: "colorPalette.10",
    },
    w: "full",
    rounded: "4px",
    transition: "background 0.2s ease-in-out",
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
        _hover: { border: "1px solid { colors.colorPalette.A7 }" },
        _focusWithin: {
          border: "1px solid { colors.colorPalette.A9 }",
          _hover: { border: "1px solid { colors.colorPalette.A9 }" },
        },
      },
      subtle: {
        bg: "colorPalette.A3",
        color: "colorPalette.11",

        _placeholder: {
          color: "colorPalette.A6",
        },
        _hover: { bg: "colorPalette.A4" },
        _focusWithin: {
          bg: "colorPalette.A4",
          _hover: { bg: "colorPalette.A4" },
        },
      },
    },
    size: {
      xs: {
        gap: "4px",
        height: "16px",
        px: "4px",
        fontSize: "xs",
      },
      sm: {
        gap: "6px",
        height: "24px",
        px: "6px",
        fontSize: "sm",
      },
      base: {
        gap: "8px",
        height: "32px",
        px: "8px",
        fontSize: "base",
      },
      lg: {
        gap: "12px",
        height: "40px",
        px: "12px",
        fontSize: "lg",
      },
      xl: {
        gap: "16px",
        height: "48px",
        px: "16px",
        fontSize: "xl",
      },
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Frame = forwardRef<HTMLDivElement, FrameProps>((props, ref) => {
  const { autoFocus = false, addStyles, ...rest } = props;
  const field = useFieldContext();
  const styleVariant = useStyleVariantContext();

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
      addStyles={[frameStyles.raw(styleVariant), addStyles]}
      ref={ref}
      onClick={
        autoFocus ? (e) => focusInternalField(e.currentTarget) : undefined
      }
    />
  );
});

Frame.displayName = "FieldFrame";

// ================================================
//  Input
// ================================================

export type InputProps = BaseProps & ArkField.InputProps;

const ArkFieldInputWithBase = withBase(ArkField.Input);

const inputStyles = createStyles({
  base: {
    ring: "0",
    flex: "1",
    appearance: "none",
    w: "full",
    _selection: {
      bg: "colorPalette.A4",
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
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { addStyles, ...rest } = props;

  const styleVariant = useStyleVariantContext();

  return (
    <ArkFieldInputWithBase
      ref={ref}
      addStyles={[inputStyles.raw(styleVariant), addStyles]}
      {...rest}
    />
  );
});

Input.displayName = "FieldInput";

// ================================================
//  Select
// ================================================

export type SelectProps = BaseProps & ArkField.SelectProps;

const ArkFieldSelectWithBase = withBase(ArkField.Select);

const selectStyles = createStyles({
  base: {
    ring: "0",
    flex: "1",
    appearance: "none",
    w: "full",
    _selection: {
      bg: "colorPalette.A4",
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
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariant = useStyleVariantContext();

    return (
      <ArkFieldSelectWithBase
        ref={ref}
        addStyles={[selectStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    );
  }
);

Select.displayName = "FieldSelect";

// ================================================
//  Textarea
// ================================================

export type TextareaProps = BaseProps & ArkField.TextareaProps;

const ArkFieldTextareaWithBase = withBase(ArkField.Textarea);

const textareaStyles = createStyles({
  base: {
    ring: "0",
    flex: "1",
    appearance: "none",
    height: "100px",
    _selection: {
      bg: "colorPalette.A4",
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
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariant = useStyleVariantContext();

    return (
      <ArkFieldTextareaWithBase
        ref={ref}
        addStyles={[textareaStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    );
  }
);

Textarea.displayName = "FieldTextarea";

// ================================================
//  ErrorText
// ================================================

export type ErrorTextProps = BaseProps & ArkField.ErrorTextProps;

const ArkFieldErrorTextWithBase = withBase(ArkField.ErrorText);

const errorTextStyles = createStyles({
  base: {
    alignItems: "center",
    fontSize: "sm",
    lineHeight: "none",
    color: "red.9",
    display: "inline-flex",
    gap: "2",
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const ErrorText = forwardRef<HTMLTextAreaElement, ErrorTextProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariant = useStyleVariantContext();

    return (
      <ArkFieldErrorTextWithBase
        ref={ref}
        addStyles={[errorTextStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    );
  }
);

ErrorText.displayName = "FieldErrorText";

// ================================================
//  HelperText
// ================================================

export type HelperTextProps = BaseProps & ArkField.HelperTextProps;

const ArkFieldHelperTextWithBase = withBase(ArkField.HelperText);

const helperTextStyles = createStyles({
  base: {
    color: "base.7",
    textStyle: "sm",
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
    weight: {
      outline: {},
      subtle: {},
    },
    layout: {
      horizontal: {},
      vertical: {},
    },
  },
  defaultVariants: {
    ...fieldVariants.defaultVariants,
  },
} satisfies FieldStylesSchema);

export const HelperText = forwardRef<HTMLTextAreaElement, HelperTextProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    const styleVariant = useStyleVariantContext();

    return (
      <ArkFieldHelperTextWithBase
        ref={ref}
        addStyles={[helperTextStyles.raw(styleVariant), addStyles]}
        {...rest}
      />
    );
  }
);

HelperText.displayName = "FieldHelperText";
