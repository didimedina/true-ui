import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeConfig,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

export type Pretty<T> = { [K in keyof T]: T[K] } & {};

/* -----------------------------------------------------------------------------
   1) Extract the shape of a recipe's "variants"
-----------------------------------------------------------------------------*/
type ExtractVariants<T> = T extends { config: RecipeConfig<infer V> }
  ? V extends RecipeVariantRecord
    ? V
    : never
  : T extends { variants: infer V }
    ? V extends RecipeVariantRecord
      ? V
      : never
    : never;

/* -----------------------------------------------------------------------------
   2) Widen the variant record shape to SystemStyleObject
      (so that each variant key -> each variant value -> SystemStyleObject)
-----------------------------------------------------------------------------*/
type WidenVariantRecord<V extends RecipeVariantRecord> = {
  [K in keyof V]: {
    [P in keyof V[K]]: SystemStyleObject;
  };
};

/* -----------------------------------------------------------------------------
   3) Extract the EXACT defaultVariants object,
      capturing its literal values rather than the union of possible values.
-----------------------------------------------------------------------------*/
type ExtractExactDefaults<T> = T extends { defaultVariants: infer D }
  ? D
  : never;

/* -----------------------------------------------------------------------------
   4) Enforce that:
      - If the parent has defaultVariants, the child MUST define them exactly
      - If the parent has none, the child is not allowed to define them
-----------------------------------------------------------------------------*/
type EnforceDefaultVariants<Parent> = Parent extends {
  defaultVariants: unknown;
}
  ? { defaultVariants: ExtractExactDefaults<Parent> }
  : { defaultVariants?: never };

/* -----------------------------------------------------------------------------
   5) The “Strict” structure that enforces 1) same variants, 2) same defaults
-----------------------------------------------------------------------------*/
export type StrictVariantStructure<T> = {
  base?: SystemStyleObject;
  variants: WidenVariantRecord<ExtractVariants<T>>;
  compoundVariants?: Pretty<
    RecipeCompoundVariant<RecipeCompoundSelection<T>>
  >[];
} & EnforceDefaultVariants<T>;

/* -----------------------------------------------------------------------------
   6) If you only want this structure if variants exist,
      otherwise return empty object type
-----------------------------------------------------------------------------*/
export type InferStrictVariantStructure<T> = [
  keyof ExtractVariants<T>,
] extends [never]
  ? {}
  : StrictVariantStructure<T>;

/* =============================================================================
   EXAMPLE USAGE
============================================================================= */

// The controlling recipe.
const source = cva({
  base: { color: "red" },
  variants: {
    size: {
      sm: { fontSize: "12px" },
      lg: { fontSize: "16px" },
      
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      size: "sm",
      css: { bg: "grass.12" },
    },
  ],
});

// Extract the controlling “variant structure.”
type SourceVariantStructure = InferStrictVariantStructure<typeof source>;

/* -----------------------------------------------------------------------------
   (A) A derived recipe that supplies matching variants.
-----------------------------------------------------------------------------*/

const derived = cva({
  base: { color: "blue" },
  variants: {
    size: {
      // Must provide both keys.
      sm: {}, // An empty object is acceptable (any SystemStyleObject)
      lg: { fontSize: "11px" }, // Allowed—even though the source had "16px"
    },
  },
  // ⬇️ defaultVariants needs to look exactly like the source anything different should throw an error
  // defaultVariants: { // <- is not working as expected
  //   size: "sm",
  // },
  // 🐞 Type '{ size: string; }' is not assignable to type 'undefined'.ts(2322)
  // schema-v05.tsx(52, 7): The expected type comes from property 'defaultVariants' which is declared here on type 'StrictVariantStructure<RecipeRuntimeFn<{ size: { sm: { fontSize: "12px"; }; lg: { fontSize: "16px"; }; }; }>>'
  // 🐞 Type 'string' is not assignable to type '"sm" | "lg" | undefined'.ts(2322)

  // defaultVariants: {}, // <- is not working as expected
  // // 🐞 Type '{ size: string; }' is not assignable to type '{ size?: "sm" | "lg" | undefined; }'.
  // // Types of property 'size' are incompatible.
  // // Type 'string' is not assignable to type '"sm" | "lg" | undefined'.ts(2322)
  // // recipe.d.ts(78, 3): The expected type comes from property 'defaultVariants' which is declared here on type 'RecipeDefinition<{ size: { sm: {}; lg: { fontSize: "11px"; }; }; }>'

  // // 🐞 Type '{}' is not assignable to type 'undefined'.ts(2322)
  // // schema-v05.tsx(52, 7): The expected type comes from property 'defaultVariants' which is declared here on type 'StrictVariantStructure<RecipeRuntimeFn<{ size: { sm: { fontSize: "12px"; }; lg: { fontSize: "16px"; }; }; }>>'

  // defaultVariants: {
  //   // <- is not working as expected
  //   size: "lg",
  // },
  // 🐞 An object literal cannot have multiple properties with the same name.ts(1117)
  // 🐞 Type 'string' is not assignable to type '"sm" | "lg" | undefined'.ts(2322)

  // 3. if default varaints doesn't exist on source it shouldn't be allowed on derived <- not throwing an error
} satisfies SourceVariantStructure);
