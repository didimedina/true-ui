export {
  sva as createSlotStyles,
  cva as createStyles,
  cx as mergeClasses,
  css as mergeStyles,
  type RecipeVariantProps as StyleVariantProps,
} from "./panda-codegen/css";
/*

Active API
- css() --------> mergeStyles() 
- cva() --------> createStyles() includes style variants by default for all.
- sva() --------> restricted, use createStyles() instead.
- type RecipeVariantProps as StyleVaraintProps
- cx() ---------> mergeClasses()

I think sva is needed to achieve group styles similar to tailwind without trying to break your head.
might call it createGroupStyles({}) or something.

*/
