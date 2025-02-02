import { ark, type HTMLArkProps } from "@ark-ui/react";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ComponentType, ForwardRefExoticComponent } from "react";

/*

Original Types, they work but cause error with forwardedRefs

// Combine Motion and Ark props
export type FormulaicElProps<T extends keyof JSX.IntrinsicElements> = MotionProps &
  HTMLArkProps<T>;

// Update JsxElements to include both Motion and Ark props
type JsxElements = {
  [E in keyof JSX.IntrinsicElements]: ComponentType<FormulaicElProps<E>>;
};

Better types with Ref handling but without using HTMLArkProps
// Similar to ark's ArkPropsWithRef, but including motion props
type FormulaicPropsWithRef<E extends React.ElementType> = 
  React.ComponentPropsWithRef<E> & MotionProps & PolymorphicProps;

// Similar to ark's ArkForwardRefComponent
type FormulaicForwardRefComponent<E extends React.ElementType> = 
  ForwardRefExoticComponent<FormulaicPropsWithRef<E>>;

// Update JsxElements to use our new types
type JsxElements = {
  [E in keyof JSX.IntrinsicElements]: FormulaicForwardRefComponent<E>;
};

*/

type MotionElementKeys = keyof HTMLElementTagNameMap;
type ArkElementKeys = keyof JSX.IntrinsicElements;

// Base props type for consumers
export type FormulaicElProps<T extends MotionElementKeys & ArkElementKeys> =
  HTMLMotionProps<T> & HTMLArkProps<T>;

// Type for the elements after motion.create is applied
type ForwardRefMotionComponent<T extends MotionElementKeys & ArkElementKeys> =
  ForwardRefExoticComponent<FormulaicElProps<T>>;

// Final type for the factory output
type JsxElements = {
  [E in MotionElementKeys & ArkElementKeys]: ForwardRefMotionComponent<E>;
};

export const elFactory = () => {
  const cache = new Map();

  return new Proxy(motion.create, {
    apply(_target, _thisArg, argArray) {
      //  as React.ElementType isn't specific enough and throws an error
      const asElement = argArray[0] as MotionElementKeys & ArkElementKeys;
      const component = ark[asElement] as unknown as ComponentType<any>;
      return motion.create(component) as ForwardRefMotionComponent<
        typeof asElement
      >;
    },
    get(_, element) {
      const asElement = element as MotionElementKeys & ArkElementKeys;
      const component = ark[asElement] as unknown as ComponentType<any>;

      if (!cache.has(element)) {
        const motionComponent = motion.create(component);
        cache.set(
          element,
          motionComponent as ForwardRefMotionComponent<typeof asElement>
        );
      }
      return cache.get(element);
    },
  }) as unknown as JsxElements;
};

export const el = elFactory();
