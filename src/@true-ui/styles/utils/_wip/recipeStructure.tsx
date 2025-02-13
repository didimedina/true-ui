import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  RecipeConfig,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

/**
 * A stricter alternative to RecipeSelection that preserves the literal union
 * of allowed variant keys.
 */
// export type StrictRecipeSelection<T extends RecipeVariantRecord> = {
//   [K in keyof T]?: keyof T[K];
// };

export type StrictRecipeSelection<T extends RecipeVariantRecord> =
  keyof any extends keyof T
    ? {}
    : {
        [K in keyof T]?: keyof T[K];
      };

/**
 * Helper to allow a single value or an array of values.
 */
type OneOrMore<T> = T | T[];

/**
 * Extract the controlling variant record.
 * We try first from a `config` property (as produced by cva) and then from `variants`.
 */
type ExtractVariants<T> = T extends { config: RecipeConfig<infer V> }
  ? V extends RecipeVariantRecord
    ? V
    : never
  : T extends { variants: infer V }
    ? V extends RecipeVariantRecord
      ? V
      : never
    : never;

/**
 * “Widen” each variant’s inner values to SystemStyleObject.
 * This lets derived recipes supply any valid style without needing to match exact literals.
 */
type WidenVariantRecord<V extends RecipeVariantRecord> = {
  [K in keyof V]: {
    [P in keyof V[K]]: SystemStyleObject;
  };
};

/**
 * VariantStructure<T> is the constrained type that derived recipes must follow.
 *
 * It requires:
 * • a `variants` property whose keys match the controlling recipe’s (with inner values widened),
 * • a `defaultVariants` property that, if the controlling recipe provided one,
 *   must exactly match the literal values (using our stricter type), and
 * • an optional `compoundVariants` array whose objects are constrained to use only keys
 *   from the controlling recipe’s variants.
 *
 * (Extra keys such as `base` are allowed.)
 */
export type VariantStructure<T> = {
  base?: SystemStyleObject;
  variants: WidenVariantRecord<ExtractVariants<T>>;
  defaultVariants: T extends { config: { defaultVariants: infer D } }
    ? D
    : StrictRecipeSelection<ExtractVariants<T>>;
  compoundVariants?: Array<
    {
      [K in keyof ExtractVariants<T>]?:
        | OneOrMore<keyof ExtractVariants<T>[K]>
        | undefined;
    } & { css: SystemStyleObject }
  >;
};

/**
 * InferVariantStructure<T> is the type you use with `satisfies` on a derived recipe.
 * (If no variants exist in the controlling recipe, no constraints are imposed.)
 */
export type InferVariantStructure<T> = [keyof ExtractVariants<T>] extends [
  never,
]
  ? {}
  : VariantStructure<T>;

/* =============================================================================
   EXAMPLE USAGE
============================================================================= */

// The controlling recipe. (Note: defaultVariants is written normally—no as const.)
const source = cva({
  base: { color: "red" },
  variants: {
    size: {
      sm: { fontSize: "12px" },
      lg: { fontSize: "16px" },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

// Extract the controlling “variant structure.”
type SourceVariantStructure = InferVariantStructure<typeof source>;

/* -----------------------------------------------------------------------------
   (A) A derived recipe that supplies matching variants.
-----------------------------------------------------------------------------*/

const derived = cva({
  base: { color: "blue" },
  variants: {
    size: {
      // Must provide both keys.
      sm: {}, // Accepts any SystemStyleObject.
      lg: { fontSize: "11px" }, // this use to throw an error but doesnt anymore even though the source had "16px".
    },
  },
  defaultVariants: {
    size: "lg", // 🐞 this should error and isn't.
  },
} satisfies SourceVariantStructure);

/* -----------------------------------------------------------------------------
   (B) A derived recipe that omits the required `variants` property.
-----------------------------------------------------------------------------*/

const derived2 = cva({
  base: { color: "blue" },
  defaultVariants: {
    size: "sm",
  },
  // Error: Missing property 'variants'
} satisfies SourceVariantStructure);

/* -----------------------------------------------------------------------------
   (C) A derived recipe that provides compoundVariants.
-----------------------------------------------------------------------------*/

const derived3 = cva({
  base: { color: "blue" },
  compoundVariants: [
    {
      size: "sm", // Allowed because "sm" is exactly one of the permitted keys ("sm" | "lg")
      css: { color: "red" },
    },
  ],
  variants: {
    size: {
      sm: { fontSize: "12px" },
      lg: { fontSize: "16px" },
    },
  },
  // These defaultVariants values will now error:
  defaultVariants: {}, //🐞 this should error and isn't.
} satisfies SourceVariantStructure);


const source = someFunction({
    a: {
        a1: {},
        a2: {}
    },
    b: {
        b1: {},
        b2: {}
    }
})

type SourceStructure = InferFunctionStructure<typeof source>

const derived = someFunction({
 // should make this require the same structure as source
} satisfies SourceStructure)  