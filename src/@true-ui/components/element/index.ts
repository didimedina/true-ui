import { ark, type HTMLArkProps } from "@ark-ui/react";
import { mergeClasses, mergeStyles } from "@true-ui/styles";
import { type SystemStyleObject } from "@true-ui/styles/types";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ForwardRefExoticComponent } from "react";
import React, { forwardRef } from "react";

type MotionElementKeys = keyof HTMLElementTagNameMap;
type ArkElementKeys = keyof JSX.IntrinsicElements;

// Util type for recursive arrays, it's being used for addStyles prop
// type RecursiveArray<T> = T | Array<T | RecursiveArray<T>>; // This is the original type
// We changed it to handle undefined values for when the prop is not provided
type RecursiveArrayWithUndefined<T> =
  | T
  | undefined
  | Array<T | undefined | RecursiveArrayWithUndefined<T>>;

// Base props type for consumers
export type TrueElProps<T extends MotionElementKeys & ArkElementKeys> =
  HTMLMotionProps<T> &
    HTMLArkProps<T> & {
      addStyles?: RecursiveArrayWithUndefined<SystemStyleObject>;
    };

// Type for the elements after motion.create is applied
type ForwardRefMotionComponent<T extends MotionElementKeys & ArkElementKeys> =
  ForwardRefExoticComponent<TrueElProps<T>>;

// Final type for the factory output
type JsxElements = {
  [E in MotionElementKeys & ArkElementKeys]: ForwardRefMotionComponent<E>;
};

export const elFactory = () => {
  const cache = new Map();

  return new Proxy(motion.create, {
    apply(_target, _thisArg, argArray) {
      const asElement = argArray[0];

      // @ts-ignore element exists.
      const arkComp = ark[asElement];
      const enhancedComp = forwardRef((props: any, ref) => {
        const { addStyles, className, ...rest } = props;
        return React.createElement(arkComp, {
          ref,
          className: mergeClasses(
            mergeStyles(
              ...(Array.isArray(addStyles)
                ? // @ts-expect-error
                  addStyles.flat(Infinity).filter(Boolean)
                : [addStyles].filter(Boolean))
            ),
            className
          ),
          ...rest,
        });
      });

      return motion.create(enhancedComp) as ForwardRefMotionComponent<
        typeof asElement
      >;
    },
    get(_, element) {
      const asElement = element;
      if (!cache.has(asElement)) {
        // @ts-ignore element exists.
        const arkComp = ark[asElement];
        const enhancedComp = forwardRef((props: any, ref) => {
          const { addStyles, className, ...rest } = props;
          return React.createElement(arkComp, {
            ref,
            className: mergeClasses(
              /*
              
              The expected argument for mergeStyles is one or more SystemStyleObjects seperated by commas.
              The possible arg given by the user is a nested array of SystemStyleObjects or a single SystemStyleObject.
              We need to flatten the array and filter out the undefined values before passing it to mergeStyles.
              
              */
              mergeStyles(
                ...(Array.isArray(addStyles)
                  ? // @ts-expect-error
                    addStyles.flat(Infinity)
                  : [addStyles])
              ),
              className
            ),
            ...rest,
          });
        });

        const motionComponent = motion.create(enhancedComp);
        cache.set(element, motionComponent);
      }
      return cache.get(element);
    },
  }) as unknown as JsxElements;
};

export const el = elFactory();
