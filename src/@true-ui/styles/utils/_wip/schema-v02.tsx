import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeConfig,
  RecipeSelection,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

export type Pretty<T> = { [K in keyof T]: T[K] } & {};
/**
 * Extract the controlling variant record. We try first to pull it from a `config`
 * property (as produced by cva) and then, if not available, from the top‑level `variants`.
 * In either case we require that the result extends RecipeVariantRecord.
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
 * “Widen” the inner values for each variant so that we lose the controlling recipe’s
 * exact literal types. (That is, instead of, say, { fontSize: "16px" } we just require
 * any SystemStyleObject.) This lets derived recipes supply any valid style.
 */
type WidenVariantRecord<V extends RecipeVariantRecord> = {
  [K in keyof V]: {
    [P in keyof V[K]]: SystemStyleObject;
  };
};

export type VariantStructure<T> = {
  base?: SystemStyleObject;
  variants: WidenVariantRecord<ExtractVariants<T>>;
  defaultVariants: T extends { config: { defaultVariants: infer D } }
    ? D
    : RecipeSelection<ExtractVariants<T>>;
  //   defaultVariants: ExtractDefaultVariants<T>;
  compoundVariants?: Pretty<
    RecipeCompoundVariant<RecipeCompoundSelection<T>>
  >[];
};

/**
 * InferVariantStructure<T> is the type you “satisfies” on a derived recipe.
 * If the controlling recipe has no variants then no constraints are imposed.
 */
export type InferVariantStructure<T> = [keyof ExtractVariants<T>] extends [
  never,
]
  ? { base?: SystemStyleObject }
  : VariantStructure<T>;

/* =============================================================================
   EXAMPLE USAGE
============================================================================= */

// The controlling recipe.
// Note: Use a const assertion on defaultVariants to capture the literal.
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
  compoundVariants: [
    {
        size: "sm",
        css: { bg: "grass.12" }
    }
  ]
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
      sm: {}, // An empty object is acceptable (any SystemStyleObject)
      lg: { fontSize: "11px" }, // Allowed—even though the source had "16px"
    },
  },
  defaultVariants: {
    size: "sm",
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
  variants: {
    size: {
      sm: {},
      lg: {},
    },
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
      size: "sm", // Allowed because "sm" is one of the permitted keys ("sm" | "lg")
      css: { color: "red" },
    },
  ],
  variants: {
    size: {
      sm: { fontSize: "12px" },
      lg: { fontSize: "16px" },
    },
  },
  // ERROR (as desired): defaultVariants must be present and exactly { size: "sm" }
  // Uncommenting either of the lines below should produce an error:
  //   defaultVariants: {},
  //   defaultVariants: { size: "lg" },
} satisfies SourceVariantStructure);
