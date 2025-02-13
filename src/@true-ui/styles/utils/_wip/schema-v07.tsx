import { cva } from "@true-ui/styles/panda-codegen/css";
import type {
  Pretty,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeSelection,
  RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

export interface VariantDefinition<
  T extends RecipeVariantRecord = RecipeVariantRecord,
> {
  // Both Variants and DefaultVariants are required when using VariantDefinition
  variants: T;
  defaultVariants: RecipeSelection<T>;
}

export type ExtractStyleSchema<T extends VariantDefinition> = {
  // base is optional and can be defined uniquily in evey createStyles() function
  base?: SystemStyleObject;

  // deprecated is optional and can be defined uniquily in evey createStyles() function
  deprecated?: boolean | string;

  // compoundVariants is optional and can be defined uniquily in evey createStyles() function
  compoundVariants?: Pretty<
    RecipeCompoundVariant<RecipeCompoundSelection<T["variants"]>>
  >[];

  // variants are are required and must match variant defintion structure.
  // the styles however, are optional and can be defined uniquily in evey createStyles() function
  // at minimum you must define the variants structure even if you don't define any styles for them.
  variants: {
    [K in keyof T["variants"]]: {
      [P in keyof T["variants"][K]]: SystemStyleObject;
    };
  };

  // defaultVariants have to be a hard copy of the variant definition defaultVariants.
  // both keys and values must match exactly. the best way tot do this is to spread the defintion into your createSchema()
  defaultVariants: T["defaultVariants"];
};

// Define your schema with const assertion to preserve literal types
const variantSchema = {
  // this has been updated to allow an array of string values instead of empty objects
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    size: "md",
  },
} as const satisfies VariantDefinition;

type StyleSchema = ExtractStyleSchema<typeof variantSchema>;

const styles = cva({
  base: {
    px: "4",
  },
  variants: {
    size: {
      sm: { bg: "red", px: "2" },
      md: { bg: "blue", px: "4" },
      lg: { bg: "green", px: "6" },
    },
  },
  defaultVariants: {
    ...variantSchema.defaultVariants,
    size: "md",
  },
  compoundVariants: [
    {
      size: "md",
      css: { fontWeight: "bold" },
    },
  ],
  deprecated: false,
} satisfies StyleSchema);
