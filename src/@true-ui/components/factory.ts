// Do not replace with '@zag-js/react'
import { composeRefs } from "@true-ui/components/utils/compose-refs";
import { mergeClasses, mergeStyles } from "@true-ui/styles";
import { type SystemStyleObject } from "@true-ui/styles/types";
import { mergeProps } from "@zag-js/core";
import type React from "react";
import {
  Children,
  type ComponentPropsWithoutRef,
  type JSX,
  cloneElement,
  createElement,
  forwardRef,
  isValidElement,
  memo,
} from "react";

/**
 * Credits to Ark-UI and Radix-UI for the factory pattern.
 * Original can be found here: https://github.com/chakra-ui/ark/blob/main/packages/react/src/components/factory.ts
 * TrueEl is the same as ark.div or primitive.div from Radix, accept it also has addStyles prop.
 * The factory allows you to create any native HTML element using the el.div pattern.
 */

type RecursiveArrayWithUndefined<T> =
  | T
  | undefined
  | Array<T | undefined | RecursiveArrayWithUndefined<T>>;

export type PolymorphicProps = {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean;
};

export type AddStylesProps = {
  addStyles?: RecursiveArrayWithUndefined<SystemStyleObject>;
};

type BaseProps = PolymorphicProps & AddStylesProps;

type JsxElements = {
  [E in keyof JSX.IntrinsicElements]: TrueElForwardRefComponent<E>;
};
type TrueElForwardRefComponent<E extends React.ElementType> =
  React.ForwardRefExoticComponent<TrueElPropsWithRef<E>>;
type TrueElPropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & BaseProps;

// Credits to the Radix team
function getRef(element: React.ReactElement) {
  // React <=18 in DEV
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (element as any).ref;
  }

  // React 19 in DEV
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element.props as { ref?: React.Ref<unknown> }).ref;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (
    (element.props as { ref?: React.Ref<unknown> }).ref || (element as any).ref
  );
}

const withBase = (Component: React.ElementType) => {
  const Comp = memo(
    forwardRef<unknown, TrueElPropsWithRef<typeof Component>>((props, ref) => {
      const { asChild, children, className, addStyles, ...restProps } = props;

      if (!asChild) {
        return createElement(
          Component,
          {
            className: mergeClasses(
              mergeStyles(
                ...(Array.isArray(addStyles)
                  ? // @ts-expect-error
                    addStyles.flat(Infinity).filter(Boolean)
                  : [addStyles].filter(Boolean))
              ),
              className
            ),
            ...restProps,
            ref,
          },
          children
        );
      }

      const onlyChild: React.ReactNode = Children.only(children);

      if (!isValidElement<Record<string, unknown>>(onlyChild)) {
        return null;
      }

      const childRef = getRef(onlyChild);

      return cloneElement(onlyChild, {
        ...mergeProps(
          {
            className: mergeClasses(
              mergeStyles(
                ...(Array.isArray(addStyles)
                  ? // @ts-expect-error
                    addStyles.flat(Infinity).filter(Boolean)
                  : [addStyles].filter(Boolean))
              ),
              className
            ),
          },
          restProps,
          onlyChild.props
        ),
        ref: ref ? composeRefs(ref, childRef) : childRef,
      });
    })
  );

  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name;

  return Comp;
};

export type HTMLProps<T extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T>;
export type HTMLTrueElProps<T extends keyof JSX.IntrinsicElements> =
  HTMLProps<T> & BaseProps;

export const jsxFactory = () => {
  const cache = new Map();

  return new Proxy(withBase, {
    apply(_target, _thisArg, argArray) {
      return withBase(argArray[0]);
    },
    get(_, element) {
      const asElement = element as React.ElementType;
      if (!cache.has(asElement)) {
        cache.set(asElement, withBase(asElement));
      }
      return cache.get(asElement);
    },
  }) as unknown as JsxElements;
};

export const el = jsxFactory();
