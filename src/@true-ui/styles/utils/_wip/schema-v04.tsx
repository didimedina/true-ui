import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeConfig,
  RecipeSelection,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";
import { type Pretty } from "@true-ui/styles/panda-codegen/types";

// type ExtractVariants<T> = T extends { config: RecipeConfig<infer V> }
//   ? V extends RecipeVariantRecord
//     ? V
//     : never
//   : T extends { variants: infer V }
//     ? V extends RecipeVariantRecord
//       ? V
//       : never
//     : never;

type ExtractVariants<T> = T extends { config: RecipeConfig<infer V> }
  ? // If "V" has zero keys, treat it as never
    keyof V extends never
    ? never
    : V
  : T extends { variants: infer V }
    ? V extends RecipeVariantRecord
      ? keyof V extends never
        ? never
        : V
      : never
    : never;

type WidenVariantRecord<V extends RecipeVariantRecord> = {
  [K in keyof V]: {
    [P in keyof V[K]]: SystemStyleObject;
  };
};

export type VariantStructure<T> = {
  base?: SystemStyleObject;
  variants: WidenVariantRecord<ExtractVariants<T>>;
  defaultVariants?: RecipeSelection<ExtractVariants<T>>;
  compoundVariants?: Pretty<
    RecipeCompoundVariant<RecipeCompoundSelection<T>>
  >[];
};

export type ExtractVariantStructure<T> = [keyof ExtractVariants<T>] extends [
  never,
]
  ? {
      base?: SystemStyleObject; // this isn't returning as expected. 
    }
  : VariantStructure<T>;

/* =============================================================================
   EXAMPLE USAGE
============================================================================= */

// The controlling recipe.
const source = cva({
  base: { color: "red" },
});

// Extract the controlling “variant structure.”
type SourceVariantStructure = ExtractVariantStructure<typeof source>;

/* -----------------------------------------------------------------------------
   (A) A derived recipe that supplies matching variants.
-----------------------------------------------------------------------------*/

const derived = cva({
  base: { color: "blue" },
} satisfies SourceVariantStructure);

// 🐞 Type '{ base: { color: "blue"; }; }' does not satisfy the expected type 'VariantStructure<RecipeRuntimeFn<RecipeVariantRecord>>'.
//  Property 'variants' is missing in type '{ base: { color: "blue"; }; }' but required in type 'VariantStructure<RecipeRuntimeFn<RecipeVariantRecord>>'.ts(1360)
//  schema-v04.tsx(43, 3): 'variants' is declared here.
