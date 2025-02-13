import { ark, type HTMLArkProps } from "@ark-ui/react";
import {
  createSlotStyles,
  mergeClasses,
  type StyleVariantProps,
} from "@true-ui/styles";
import { createContext, forwardRef, useContext } from "react";


// Styles
const alertStyles = createSlotStyles({
  className: "alert",
  slots: ["root", "content", "description", "icon", "title"],
  base: {
    root: {
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
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
    },
    description: {
      color: "colorPalette.12",
      textStyle: "sm",
    },
    icon: {
      color: "colorPalette.12",
      flexShrink: "0",
      width: "5",
      height: "5",
    },
    title: {
      color: "colorPalette.12",
      fontWeight: "semibold",
      textStyle: "lg",
    },
  },
});

// Style Context (only needed if theres variants and you want to control that throught the root)
const AlertStyleContext = createContext<ReturnType<typeof alertStyles> | null>(
  null
);

const useAlertStyleContext = () => {
  const context = useContext(AlertStyleContext);
  if (!context) {
    throw new Error("Alert components must be wrapped in <Alert.Root>");
  }
  return context;
};

// Root
export type RootProps = HTMLArkProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof alertStyles>;
};

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { styleVariant, className, ...rest } = props;

  const slotStyles = alertStyles({ styleVariant });

  return (
    <AlertStyleContext.Provider value={slotStyles}>
      <ark.div
        ref={ref}
        className={mergeClasses(slotStyles.root, className)}
        {...rest}
      />
    </AlertStyleContext.Provider>
  );
});

Root.displayName = "AlertRoot";

// Content
export type ContentProps = HTMLArkProps<"div">;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    const slotStyles = useAlertStyleContext();

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(slotStyles.content, className)}
        {...rest}
      />
    );
  }
);

Content.displayName = "AlertContent";

// Description
export type DescriptionProps = HTMLArkProps<"div">;

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    const slotStyles = useAlertStyleContext();

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(slotStyles.description, className)}
        {...rest}
      />
    );
  }
);

Description.displayName = "AlertDescription";

// Icon
export type IconProps = HTMLArkProps<"svg">;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className, ...rest } = props;

  const slotStyles = useAlertStyleContext();

  return (
    <ark.svg
      ref={ref}
      className={mergeClasses(slotStyles.icon, className)}
      {...rest}
    />
  );
});

Icon.displayName = "AlertIcon";

// Title
export type TitleProps = HTMLArkProps<"h5">;

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    const slotStyles = useAlertStyleContext();

    return (
      <ark.h5
        ref={ref}
        className={mergeClasses(slotStyles.title, className)}
        {...rest}
      />
    );
  }
);

Title.displayName = "AlertTitle";
