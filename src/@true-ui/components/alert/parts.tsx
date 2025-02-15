import { ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyles, mergeClasses } from "@true-ui/styles";
import { forwardRef } from "react";

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
    width: "fit",
  },
});

export type RootProps = HTMLArkProps<"div">;

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      ref={ref}
      className={mergeClasses(rootStyles(), className)}
      {...rest}
    />
  );
});

Root.displayName = "AlertRoot";

// Content
const contentStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

export type ContentProps = HTMLArkProps<"div">;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(contentStyles(), className)}
        {...rest}
      />
    );
  }
);

Content.displayName = "AlertContent";

// Description
const descriptionStyles = createStyles({
  base: {
    color: "colorPalette.12",
    textStyle: "sm",
  },
});

export type DescriptionProps = HTMLArkProps<"div">;

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <ark.div
        ref={ref}
        className={mergeClasses(descriptionStyles(), className)}
        {...rest}
      />
    );
  }
);

Description.displayName = "AlertDescription";

// Icon
const iconStyles = createStyles({
  base: {
    color: "colorPalette.12",
    flexShrink: "0",
    width: "32px",
    height: "32px",
  },
});

export type IconProps = HTMLArkProps<"svg">;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ark.svg
      ref={ref}
      className={mergeClasses(iconStyles(), className)}
      {...rest}
    />
  );
});

Icon.displayName = "AlertIcon";

// Title
const titleStyles = createStyles({
  base: {
    color: "colorPalette.12",
    fontWeight: "semibold",
    textStyle: "lg",
  },
});

export type TitleProps = HTMLArkProps<"h5">;

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <ark.h5
        ref={ref}
        className={mergeClasses(titleStyles(), className)}
        {...rest}
      />
    );
  }
);

Title.displayName = "AlertTitle";
