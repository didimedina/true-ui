import { type StyleVariantProps } from "@true-ui/styles";
import {
  type RecipeVariantFn,
  type RecipeVariantRecord,
  type SlotRecipeVariantFn,
  type SlotRecipeVariantRecord,
} from "@true-ui/styles/panda-codegen/types/recipe";
import { createContext, useContext } from "react";

export function createStyleVariantContext<
  S extends
    | RecipeVariantFn<RecipeVariantRecord>
    | SlotRecipeVariantFn<string, SlotRecipeVariantRecord<string>>,
>() {
  const StyleVariantContext = createContext<StyleVariantProps<S> | null>(null);

  function useStyleVariantContext() {
    const context = useContext(StyleVariantContext);
    if (!context) {
      throw new Error(
        "useStyleVariantContext must be used inside its Provider"
      );
    }
    return context;
  }

  return { StyleVariantContext, useStyleVariantContext };
}


/* Usage

const someStyles = createStyles({})

const { StyleVariantContext, useStyleVariantContext } = createStyleVariantContext<typeof someStyles>();

*/