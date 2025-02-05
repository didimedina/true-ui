import { defineConfig } from "@pandacss/dev";
import preset from "./src/@true-ui/styles/preset";
import { transformAddStylesProp } from "./src/@true-ui/styles/utils";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [preset],
  jsxFramework: "react",
  jsxStyleProps: "none",
  // strictTokens: true,

  hooks: {
    "parser:before": ({ content }) => {
      return (
        transformAddStylesProp(content)
          // Replace all occurrences of the names (both in imports and function calls)
          .replace(/mergeStyles/g, "css")
          .replace(/mergeClasses/g, "cx")
          .replace(/createStyles/g, "cva")
          .replace(/createSlotStyles/g, "sva")

          // Replace the import paths
          // replaces */styles → */styles/panda-codegen/css
          // example: import { something } from '@formulaic/styles' → import { something } from '@formulaic/styles/panda-codegen/css'
          .replace(
            /(import[^"']*from\s*["'])(.+?\/styles)(["'])/g,
            "$1$2/panda-codegen/css$3"
          )
      );
    },
  },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "./src/@true-ui/styles/panda-codegen",
});
