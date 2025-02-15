import { ark, type HTMLArkProps } from "@ark-ui/react";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ComponentType, ForwardRefExoticComponent } from "react";

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

      if (!cache.has(asElement)) {
        const component = ark[asElement] as unknown as ComponentType<any>;
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
