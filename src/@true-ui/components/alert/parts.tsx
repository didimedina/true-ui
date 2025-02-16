"use client";

import { el, type HTMLTrueElProps } from "@true-ui/components/factory";
import { createStyles } from "@true-ui/styles";
import { forwardRef } from "react";

// ================================================
//  Root
// ================================================
export type RootProps = HTMLTrueElProps<"div">;

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

export const Root = forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { addStyles, ...rest } = props;

  return (
    <el.div ref={ref} addStyles={[rootStyles.raw(), addStyles]} {...rest} />
  );
});

Root.displayName = "AlertRoot";

// ================================================
//  Content
// ================================================
export type ContentProps = HTMLTrueElProps<"div">;

const contentStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    return (
      <el.div
        ref={ref}
        addStyles={[contentStyles.raw(), addStyles]}
        {...rest}
      />
    );
  }
);

Content.displayName = "AlertContent";

// ================================================
//  Description
// ================================================
export type DescriptionProps = HTMLTrueElProps<"div">;

const descriptionStyles = createStyles({
  base: {
    color: "colorPalette.12",
    textStyle: "sm",
  },
});

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    return (
      <el.div
        ref={ref}
        addStyles={[descriptionStyles.raw(), addStyles]}
        {...rest}
      />
    );
  }
);

Description.displayName = "AlertDescription";

// ================================================
//  Icon
// ================================================
export type IconProps = HTMLTrueElProps<"svg">;

const iconStyles = createStyles({
  base: {
    color: "colorPalette.12",
    flexShrink: "0",
    width: "32px",
    height: "32px",
  },
});

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { addStyles, ...rest } = props;

  return (
    <el.svg ref={ref} addStyles={[iconStyles.raw(), addStyles]} {...rest} />
  );
});

Icon.displayName = "AlertIcon";

// ================================================
//  Title
// ================================================
export type TitleProps = HTMLTrueElProps<"h5">;

const titleStyles = createStyles({
  base: {
    color: "colorPalette.12",
    fontWeight: "semibold",
    textStyle: "lg",
  },
});

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => {
    const { addStyles, ...rest } = props;

    return (
      <el.h5 ref={ref} addStyles={[titleStyles.raw(), addStyles]} {...rest} />
    );
  }
);

Title.displayName = "AlertTitle";
