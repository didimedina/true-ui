// import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  Pretty,
  RecipeCompoundVariant,
  RecipeSelection,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

export type VariantDefinitionRecord = Record<any, string[]>;

export interface VariantDefinition<
  T extends RecipeVariantRecord = RecipeVariantRecord,
> {
  // Both Variants and DefaultVariants are required when using VariantDefinition
  variants: VariantDefinitionRecord;
  defaultVariants: RecipeSelection<T>;
}

export type ExtractStyleSchema<T extends VariantDefinition> = {
  // base is optional and can be defined uniquily in evey createStyles() function
  base?: SystemStyleObject;

  // deprecated is optional and can be defined uniquily in evey createStyles() function
  deprecated?: boolean | string;

  // compoundVariants is optional and can be defined uniquily in evey createStyles() function
  compoundVariants?: Pretty<
    RecipeCompoundVariant<{
      [K in keyof T["variants"]]?: T["variants"][K][number];
    }>
  >[];

  // variants are are required and must match variant defintion structure.
  // the styles however, are optional and can be defined uniquily in evey createStyles() function
  // at minimum you must define the variants structure even if you don't define any styles for them.
  variants: {
    [K in keyof T["variants"]]: {
      [P in T["variants"][K][number]]: SystemStyleObject;
    };
  };

  // defaultVariants have to be a hard copy of the variant definition defaultVariants.
  // both keys and values must match exactly. the best way tot do this is to spread the defintion into your createSchema()
  defaultVariants: T["defaultVariants"];
};

// Define your schema with const assertion to preserve literal types
// const variantSchema = {
//   variants: {
//     size: ["sm", "md", "lg", "xl"],
//   },
//   defaultVariants: {
//     size: "md",
//   },
// } as const satisfies VariantDefinition;

// type StyleSchema = ExtractStyleSchema<typeof variantSchema>;

// const styles = cva({
//   base: {
//     px: "4",
//   },
//   variants: {
//     size: {
//       sm: { bg: "red", px: "2" },
//       md: { bg: "blue", px: "4" },
//       lg: { bg: "green", px: "6" },
//       xl: {},
//     },
//   },
//   defaultVariants: {
//     ...variantSchema.defaultVariants,
//   },
//   compoundVariants: [
//     {
//       size: "md",
//       css: { fontWeight: "bold" },
//     },
//   ],
//   deprecated: false,
// } satisfies StyleSchema);
