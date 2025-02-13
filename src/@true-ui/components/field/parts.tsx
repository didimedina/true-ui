import { ark, type HTMLArkProps, type HTMLProps } from "@ark-ui/react";
import { Field, fieldAnatomy, useFieldContext } from "@ark-ui/react/field";
import {
  createSlotStyles,
  mergeClasses,
  type StyleVariantProps,
} from "@true-ui/styles";
import { ariaAttr, dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { createContext, forwardRef, useContext, useMemo } from "react";

// Styles
export const fieldStyles = createSlotStyles({
  className: "field",
  slots: [...fieldAnatomy.keys(), "frame"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    label: {
      color: "colorPalette.12",
    //   fontWeight: "",
      textStyle: "sm",
      _disabled: {
        color: "fg.disabled",
      },
    },
    helperText: {
      color: "fg.muted",
      textStyle: "sm",
      _disabled: {
        color: "fg.disabled",
      },
    },
    errorText: {
      alignItems: "center",
      color: "fg.error",
      display: "inline-flex",
      gap: "2",
      textStyle: "sm",
      _disabled: {
        color: "fg.disabled",
      },
    },
  },
  variants: {
    weight: {
      outline: {
        frame: {
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
      },
      subtle: {
        frame: {
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
    },
    size: {
      xs: {
        frame: { gap: "4px", height: "16px", px: "4px", textStyle: "xs" },
      },
      sm: {
        frame: { gap: "6px", height: "24px", px: "6px", textStyle: "sm" },
      },
      base: {
        frame: { gap: "8px", height: "32px", px: "8px", textStyle: "base" },
      },
      lg: {
        frame: { gap: "12px", height: "40px", px: "12px", textStyle: "lg" },
      },
      xl: {
        frame: { gap: "16px", height: "48px", px: "16px", textStyle: "xl" },
      },
    },
  },
  defaultVariants: {
    weight: "subtle",
    size: "base",
  },
});

// Style Context
const FieldStyleContext = createContext<ReturnType<typeof fieldStyles> | null>(
  null
);

const useFieldStyleContext = () => {
  const context = useContext(FieldStyleContext);
  if (!context) {
    throw new Error(
      "Field components must be wrapped in <Field.Root> to inherit styles"
    );
  }
  return context;
};

// Root
export type RootProps = Field.RootProps & {
  styleVariant?: StyleVariantProps<typeof fieldStyles>;
};

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, className, ...rest } = props;

  const slotStyles = fieldStyles({ styleVariant });

  return (
    <FieldStyleContext.Provider value={slotStyles}>
      <ark.div
        ref={ref}
        className={mergeClasses(slotStyles.root, className)}
        {...rest}
      />
    </FieldStyleContext.Provider>
  );
});

Root.displayName = "FieldRoot";

// Frame
export type FrameProps = HTMLArkProps<"div">;

export const Frame = forwardRef<HTMLDivElement, FrameProps>((props, ref) => {
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
      className={slotStyles.frame}
    />
  );
});

Frame.displayName = "FieldFrame";

// Content
export type ContentProps = HTMLArkProps<"div">;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    const slotStyles = useFieldStyleContext();

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(slotStyles.content, className)}
        {...rest}
      />
    );
  }
);

Content.displayName = "FieldContent";
