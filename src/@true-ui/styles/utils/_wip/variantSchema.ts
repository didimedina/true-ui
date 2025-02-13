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
  type RecipeConfig,
  type RecipeDefinition,
  type RecipeRuntimeFn,
  type RecipeSelection,
  type RecipeVariantRecord,
} from "@true-ui/styles/panda-codegen/types";

// First cva function that defines our structure
const someStyles = cva({
  variants: {
    size: {
      sm: {
        /* styles */
      },
      md: {
        /* styles */
      },
      lg: {
        /* styles */
      },
    },
    weight: {
      solid: {
        /* styles */
      },
      outline: {
        /* styles */
      },
      subtle: {
        /* styles */
      },
    },
  },
  defaultVariants: {
    size: "md",
    weight: "solid",
  },
});

type VariantStructure = InferVariantStructure<typeof someStyles>;

const someStyles2 = cva({ /* structure needs to be the same as someStyles */ } satisfies VariantStructure)

// Extract the variant structure from the base styles
//   type InferredVariants = typeof baseStyles extends RecipeRuntimeFn<infer T> ? T : never;
//   type DefaultVariants = RecipeSelection<InferredVariants>

// type StrictRecipe =
//   typeof baseStyles extends RecipeRuntimeFn<infer T>
//     ? RecipeDefinition<T>
//     : never;

// type StrictRecipe = typeof baseStyles extends RecipeRuntimeFn<infer T> ? 
//   Omit<RecipeDefinition<T>, 'variants'> & {
//     variants: T
//   }
// : never;

// type StrictRecipe = typeof baseStyles extends RecipeRuntimeFn<infer T> ? 
//   Omit<RecipeDefinition<T>, 'variants'> & 
//   (T extends RecipeVariantRecord ? { variants: T } : { variants?: T })
// : never;

// type StrictRecipe = typeof baseStyles extends RecipeRuntimeFn<infer T> ? 
//   Omit<RecipeDefinition<T>, 'variants'> & 
//   (T extends Record<string, any> ? { variants: T } : { variants?: T })
// : never;

// type StrictRecipe = typeof baseStyles extends RecipeRuntimeFn<infer T> ? 
//   RecipeDefinition<T extends RecipeVariantRecord ? T : never>
// : never;

type StrictRecipe = typeof baseStyles extends RecipeRuntimeFn<infer T> ? 
  T extends RecipeVariantRecord ?
    Omit<RecipeDefinition<T>, 'variants'> & { variants: T }
  : RecipeDefinition<never>
: never;

// Use that structure to enforce the same variants in another component
// type StrictRecipe = Omit<
//   RecipeDefinition<InferredVariants>,
//   "variants" | "defaultVariants"
// > & {
//   variants: InferredVariants;
//   defaultVariants: DefaultVariants;
// };

const anotherComponent = createStyles({
//   base: {},
//   variants: {
//     size: {
//       sm: {
//         /* different styles */
//       },
//       md: {
//         /* different styles */
//       },
//       lg: {
//         /* different styles */
//       },
//     },
//     weight: {
//       solid: {
//         /* different styles */
//       },
//       outline: {
//         /* different styles */
//       },
//       subtle: {
//         /* different styles */
//       },
//     },
//   },
//   defaultVariants: {
//     // size: "md",
//     // weight: "solid",
//   },
} satisfies StrictRecipe);

// type VariantStructure = {
//   size: {
//     sm: SystemStyleObject;
//     md: SystemStyleObject;
//     lg: SystemStyleObject;
//   };
//   weight: {
//     solid: SystemStyleObject;
//     outline: SystemStyleObject;
//     subtle: SystemStyleObject;
//   };
// };

// type VariantStructure = RecipeVariantRecord & {
//   size: {
//     sm: SystemStyleObject;
//     md: SystemStyleObject;
//     lg: SystemStyleObject;
//   };
//   weight: {
//     solid: SystemStyleObject;
//     outline: SystemStyleObject;
//     subtle: SystemStyleObject;
//   };
//   taco: {
//     opt: SystemStyleObject;
//   };
// };

// Make a stricter version where variants are required
// type StrictRecipe = Omit<RecipeDefinition<VariantStructure>, "variants"> & {
//   variants: VariantStructure;
// };

// const someStyles = createStyles({
//   base: {
//     colorPalette: "base",
//     background: "colorPalette.1",
//     borderWidth: "1px",
//     borderColor: "colorPalette.A5",
//   },
//   variants: {
//     size: {
//       sm: {},
//       md: {},
//       lg: {},
//     },
//     weight: {
//       solid: {},
//       outline: {},
//       subtle: {},
//     },
//   },
//   defaultVariants: {},
//   // This will now error because variants are required
// } satisfies StrictRecipe);

// WIP: Method two, createStyles() for independant parts then merge into a single object
// const partStyles1 = cva({})
// const partStyles2 = cva({})
// const slotStyles = composeSva(partStyles1, partStyles2, { defaultVariants:{} })
