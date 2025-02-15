import { ark, type HTMLArkProps } from "@ark-ui/react";
import {
  createStyles,
  mergeClasses,
  type StyleVariantProps,
} from "@true-ui/styles";
import { forwardRef} from "react";
import { createStyleVariantContext } from "@true-ui/styles/utils";

// Root
const rootStyles = createStyles({
  base: {
    colorPalette: "base",
    background: "colorPalette.1",
    borderWidth: "1px",
    borderColor: "colorPalette.A5",
    borderRadius: "sm",
    display: "flex",
    gap: "3",
    p: "4",
    width: "full",
  },
  variants: {
    size: {
      base: {
        p: "4",
      },
      sm: {
        p: "3",
      },
    },
  },
  defaultVariants: {
    size: "base",
  },
});

const { StyleVariantContext, useStyleVariantContext } =
  createStyleVariantContext<typeof rootStyles>();

export type RootProps = HTMLArkProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof rootStyles>;
};

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, className, ...rest } = props;

  return (
    <StyleVariantContext.Provider value={styleVariant}>
      <ark.div
        ref={ref}
        className={mergeClasses(rootStyles(styleVariant), className)}
        {...rest}
      />
    </StyleVariantContext.Provider>
  );
});

Root.displayName = "Root";

// Content
const contentStyles = createStyles({
  base: {
    // ...some styles
  },
  variants: {
    size: {
      base: {
        p: "9",
      },
      sm: {
        p: "6",
      },
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export type ContentProps = HTMLArkProps<"div">;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    const styleVariant = useStyleVariantContext();

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(contentStyles(styleVariant), className)}
        {...rest}
      />
    );
  }
);

Content.displayName = "Content";
