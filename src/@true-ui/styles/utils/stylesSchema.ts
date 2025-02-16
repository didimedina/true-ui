// import { createStyles } from "@true-ui/styles/";
import type {
  Pretty,
  RecipeCompoundVariant,
  // RecipeSelection,
  // RecipeVariantRecord,
  SystemStyleObject,
} from "@true-ui/styles/panda-codegen/types";

// 🚧 WIP
// [] make defaultVariants in strictVariants work with autocomplete / derive options from variants

type StrictVariantRecord = Record<any, string[]>;

type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

export type VariantSelection<T extends StrictVariantRecord> =
  keyof any extends keyof T
    ? {}
    : {
        // 🚧 Known issue: this type is not referancing the variant keys properly.
        // [K in keyof T]?: StringToBoolean<keyof T[K]> | undefined
        [K in keyof T]?: StringToBoolean<T[K][number]> | undefined;
      };

export type StrictVariants<
  T extends StrictVariantRecord = StrictVariantRecord,
> = {
  // Both Variants and DefaultVariants are required when using VariantDefinition
  variants: T;
  defaultVariants: VariantSelection<T>;
};

export type StylesSchema<T extends StrictVariants> = {
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

/* ================================
Usage
================================ */

// // 1. Define your schema with const assertion to preserve literal types
// const compVariants = {
//   variants: {
//     size: ["sm", "md", "lg"],
//   },
//   defaultVariants: {
//     size: "md",
//     // 🚧 Known issue:not getting autocomplete here, but works functionally
//     // if you give a invalid value it will throw in the createStyles()
//   },
// } as const satisfies StrictVariants;

// // 2. Extract the style schema from the variant definition
// type MyCompStylesSchema = StylesSchema<typeof compVariants>;

// // 3. Create your styles with the style schema using satisfies
// //    and use the variantSchema for default variants.
// const someStyles = createStyles({
//   base: {
//     px: "4",
//   },
//   variants: {
//     size: {
//       sm: {},
//       md: {},
//       lg: {},
//     },
//   },
//   defaultVariants: {
//     ...compVariants.defaultVariants,
//   },
//   compoundVariants: [
//     {
//       size: "md",
//       css: { fontWeight: "bold" },
//     },
//   ],
//   deprecated: false,
// } satisfies MyCompStylesSchema);
