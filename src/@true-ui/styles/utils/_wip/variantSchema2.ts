/*

The goal for this project is to create a type that can be used to validate the variants createStyles()
This is meant to allow for breaking up the styles into smaller chunks and co-locating them with the parts 
they correspond to.

this in conjunction with useContext() should allow straint forward way of creating styles than createSlotStyles()
which can get overwhelming when you have a lot of variants.


*/

// WIP: Method one, create a variant structure and then use that to create the styles with satisfies.
import { createStyles } from "@true-ui/styles";
import {
  SystemStyleObject,
  // type RecipeConfig,
  type RecipeDefinition,
  type RecipeRuntimeFn,
  // type RecipeSelection,
  type RecipeVariantRecord,
} from "@true-ui/styles/panda-codegen/types";

// import type { RecipeDefinition, RecipeVariantRecord, RecipeRuntimeFn, RecipeSelection } from './static-css';

// // Helper type to extract variants from a runtime function
// type ExtractVariants<T> = T extends RecipeRuntimeFn<infer V> ? V : never;

// // Helper type to make properties required if they exist in the source
// type RequireIfExists<T, K extends keyof T> = T extends { [P in K]: any }
//   ? Required<Pick<T, K>> & Omit<T, K>
//   : T;

// // Main type to infer and enforce variant structure
// export type InferVariantStructure<T extends RecipeRuntimeFn<RecipeVariantRecord>> = 
//   RequireIfExists<{
//     base?: SystemStyleObject;
//     variants?: T['config']['variants'];
//     defaultVariants?: T['config']['defaultVariants'];
//     compoundVariants?: RecipeDefinition<ExtractVariants<T>>['compoundVariants'];
//   }, T['config'] extends { variants: any } ? 'variants' : never>;



export type InferVariantStructure<T extends RecipeRuntimeFn<RecipeVariantRecord>> = 
  RecipeDefinition & {
    variants: T['config'] extends { variants: RecipeVariantRecord } 
      ? T['config']['variants'] 
      : never;
      defaultVariants: T['config'] extends { defaultVariants: infer DV }
      ? DV extends Record<string, any>
        ? T['config']['defaultVariants']
        : never
      : never;
  };

  // Source style
const source = createStyles({
  base: { color: 'red' },
  variants: {
    size: {
      sm: { fontSize: '12px' },
      lg: { fontSize: '16px' }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

// This should error due to missing defaultVariants but isn't
const derived = createStyles({
  base: { color: 'blue' },
  variants: {
    size: {
      sm: { fontSize: '14px' }, // this is erroring saying that fontSize needs to be "12px"
      lg: { fontSize: '18px' } // same error here. 
    }
  },
  defaultVariants: {
    size: 'sm' 
  }
} satisfies InferVariantStructure<typeof source>);

// This should error but doesn't - missing required variants
const error = createStyles({
  base: { color: 'blue' },
  variants: {
    size: {
      sm: { fontSize: '12px' },
      lg: { fontSize: '16px' }
    }
  },
} satisfies InferVariantStructure<typeof source>);