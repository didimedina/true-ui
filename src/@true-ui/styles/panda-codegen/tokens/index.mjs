const tokens = {
  "aspectRatios.square": {
    "value": "1 / 1",
    "variable": "var(--aspect-ratios-square)"
  },
  "aspectRatios.landscape": {
    "value": "4 / 3",
    "variable": "var(--aspect-ratios-landscape)"
  },
  "aspectRatios.portrait": {
    "value": "3 / 4",
    "variable": "var(--aspect-ratios-portrait)"
  },
  "aspectRatios.wide": {
    "value": "16 / 9",
    "variable": "var(--aspect-ratios-wide)"
  },
  "aspectRatios.ultrawide": {
    "value": "18 / 5",
    "variable": "var(--aspect-ratios-ultrawide)"
  },
  "aspectRatios.golden": {
    "value": "1.618 / 1",
    "variable": "var(--aspect-ratios-golden)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.linear": {
    "value": "linear",
    "variable": "var(--easings-linear)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.in-out": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.4xl": {
    "value": "2rem",
    "variable": "var(--radii-4xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.loose": {
    "value": "1.75",
    "variable": "var(--line-heights-loose)"
  },
  "fonts.sans": {
    "value": "Inter var, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.loose": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-loose)"
  },
  "letterSpacings.looser": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-looser)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.base": {
    "value": "1rem",
    "variable": "var(--font-sizes-base)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "shadows.xs": {
    "value": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "variable": "var(--shadows-2xl)"
  },
  "shadows.inner": {
    "value": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inner)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black": {
    "value": "#000",
    "variable": "var(--colors-black)"
  },
  "colors.white": {
    "value": "#fff",
    "variable": "var(--colors-white)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.base.1": {
    "value": "#fcfcfd",
    "variable": "var(--colors-base-1)"
  },
  "colors.base.2": {
    "value": "#f9f9fb",
    "variable": "var(--colors-base-2)"
  },
  "colors.base.3": {
    "value": "#f0f0f3",
    "variable": "var(--colors-base-3)"
  },
  "colors.base.4": {
    "value": "#e8e8ec",
    "variable": "var(--colors-base-4)"
  },
  "colors.base.5": {
    "value": "#e0e1e6",
    "variable": "var(--colors-base-5)"
  },
  "colors.base.6": {
    "value": "#d9d9e0",
    "variable": "var(--colors-base-6)"
  },
  "colors.base.7": {
    "value": "#cdced6",
    "variable": "var(--colors-base-7)"
  },
  "colors.base.8": {
    "value": "#b9bbc6",
    "variable": "var(--colors-base-8)"
  },
  "colors.base.9": {
    "value": "#8b8d98",
    "variable": "var(--colors-base-9)"
  },
  "colors.base.10": {
    "value": "#80838d",
    "variable": "var(--colors-base-10)"
  },
  "colors.base.11": {
    "value": "#60646c",
    "variable": "var(--colors-base-11)"
  },
  "colors.base.12": {
    "value": "#1c2024",
    "variable": "var(--colors-base-12)"
  },
  "colors.base.A1": {
    "value": "#00005503",
    "variable": "var(--colors-base--a1)"
  },
  "colors.base.A2": {
    "value": "#00005506",
    "variable": "var(--colors-base--a2)"
  },
  "colors.base.A3": {
    "value": "#0000330f",
    "variable": "var(--colors-base--a3)"
  },
  "colors.base.A4": {
    "value": "#00002d17",
    "variable": "var(--colors-base--a4)"
  },
  "colors.base.A5": {
    "value": "#0009321f",
    "variable": "var(--colors-base--a5)"
  },
  "colors.base.A6": {
    "value": "#00002f26",
    "variable": "var(--colors-base--a6)"
  },
  "colors.base.A7": {
    "value": "#00062e32",
    "variable": "var(--colors-base--a7)"
  },
  "colors.base.A8": {
    "value": "#00083046",
    "variable": "var(--colors-base--a8)"
  },
  "colors.base.A9": {
    "value": "#00051d74",
    "variable": "var(--colors-base--a9)"
  },
  "colors.base.A10": {
    "value": "#00071b7f",
    "variable": "var(--colors-base--a10)"
  },
  "colors.base.A11": {
    "value": "#0007149f",
    "variable": "var(--colors-base--a11)"
  },
  "colors.base.A12": {
    "value": "#000509e3",
    "variable": "var(--colors-base--a12)"
  },
  "colors.amber.1": {
    "value": "#fefdfb",
    "variable": "var(--colors-amber-1)"
  },
  "colors.amber.2": {
    "value": "#fefbe9",
    "variable": "var(--colors-amber-2)"
  },
  "colors.amber.3": {
    "value": "#fff7c2",
    "variable": "var(--colors-amber-3)"
  },
  "colors.amber.4": {
    "value": "#ffee9c",
    "variable": "var(--colors-amber-4)"
  },
  "colors.amber.5": {
    "value": "#fbe577",
    "variable": "var(--colors-amber-5)"
  },
  "colors.amber.6": {
    "value": "#f3d673",
    "variable": "var(--colors-amber-6)"
  },
  "colors.amber.7": {
    "value": "#e9c162",
    "variable": "var(--colors-amber-7)"
  },
  "colors.amber.8": {
    "value": "#e2a336",
    "variable": "var(--colors-amber-8)"
  },
  "colors.amber.9": {
    "value": "#ffc53d",
    "variable": "var(--colors-amber-9)"
  },
  "colors.amber.10": {
    "value": "#ffba18",
    "variable": "var(--colors-amber-10)"
  },
  "colors.amber.11": {
    "value": "#ab6400",
    "variable": "var(--colors-amber-11)"
  },
  "colors.amber.12": {
    "value": "#4f3422",
    "variable": "var(--colors-amber-12)"
  },
  "colors.amber.A1": {
    "value": "#c0800004",
    "variable": "var(--colors-amber--a1)"
  },
  "colors.amber.A2": {
    "value": "#f4d10016",
    "variable": "var(--colors-amber--a2)"
  },
  "colors.amber.A3": {
    "value": "#ffde003d",
    "variable": "var(--colors-amber--a3)"
  },
  "colors.amber.A4": {
    "value": "#ffd40063",
    "variable": "var(--colors-amber--a4)"
  },
  "colors.amber.A5": {
    "value": "#f8cf0088",
    "variable": "var(--colors-amber--a5)"
  },
  "colors.amber.A6": {
    "value": "#eab5008c",
    "variable": "var(--colors-amber--a6)"
  },
  "colors.amber.A7": {
    "value": "#dc9b009d",
    "variable": "var(--colors-amber--a7)"
  },
  "colors.amber.A8": {
    "value": "#da8a00c9",
    "variable": "var(--colors-amber--a8)"
  },
  "colors.amber.A9": {
    "value": "#ffb300c2",
    "variable": "var(--colors-amber--a9)"
  },
  "colors.amber.A10": {
    "value": "#ffb300e7",
    "variable": "var(--colors-amber--a10)"
  },
  "colors.amber.A11": {
    "value": "#ab6400",
    "variable": "var(--colors-amber--a11)"
  },
  "colors.amber.A12": {
    "value": "#341500dd",
    "variable": "var(--colors-amber--a12)"
  },
  "colors.orange.1": {
    "value": "#fefcfb",
    "variable": "var(--colors-orange-1)"
  },
  "colors.orange.2": {
    "value": "#fff7ed",
    "variable": "var(--colors-orange-2)"
  },
  "colors.orange.3": {
    "value": "#ffefd6",
    "variable": "var(--colors-orange-3)"
  },
  "colors.orange.4": {
    "value": "#ffdfb5",
    "variable": "var(--colors-orange-4)"
  },
  "colors.orange.5": {
    "value": "#ffd19a",
    "variable": "var(--colors-orange-5)"
  },
  "colors.orange.6": {
    "value": "#ffc182",
    "variable": "var(--colors-orange-6)"
  },
  "colors.orange.7": {
    "value": "#f5ae73",
    "variable": "var(--colors-orange-7)"
  },
  "colors.orange.8": {
    "value": "#ec9455",
    "variable": "var(--colors-orange-8)"
  },
  "colors.orange.9": {
    "value": "#f76b15",
    "variable": "var(--colors-orange-9)"
  },
  "colors.orange.10": {
    "value": "#ef5f00",
    "variable": "var(--colors-orange-10)"
  },
  "colors.orange.11": {
    "value": "#cc4e00",
    "variable": "var(--colors-orange-11)"
  },
  "colors.orange.12": {
    "value": "#582d1d",
    "variable": "var(--colors-orange-12)"
  },
  "colors.orange.A1": {
    "value": "#c0400004",
    "variable": "var(--colors-orange--a1)"
  },
  "colors.orange.A2": {
    "value": "#ff8e0012",
    "variable": "var(--colors-orange--a2)"
  },
  "colors.orange.A3": {
    "value": "#ff9c0029",
    "variable": "var(--colors-orange--a3)"
  },
  "colors.orange.A4": {
    "value": "#ff91014a",
    "variable": "var(--colors-orange--a4)"
  },
  "colors.orange.A5": {
    "value": "#ff8b0065",
    "variable": "var(--colors-orange--a5)"
  },
  "colors.orange.A6": {
    "value": "#ff81007d",
    "variable": "var(--colors-orange--a6)"
  },
  "colors.orange.A7": {
    "value": "#ed6c008c",
    "variable": "var(--colors-orange--a7)"
  },
  "colors.orange.A8": {
    "value": "#e35f00aa",
    "variable": "var(--colors-orange--a8)"
  },
  "colors.orange.A9": {
    "value": "#f65e00ea",
    "variable": "var(--colors-orange--a9)"
  },
  "colors.orange.A10": {
    "value": "#ef5f00",
    "variable": "var(--colors-orange--a10)"
  },
  "colors.orange.A11": {
    "value": "#cc4e00",
    "variable": "var(--colors-orange--a11)"
  },
  "colors.orange.A12": {
    "value": "#431200e2",
    "variable": "var(--colors-orange--a12)"
  },
  "colors.red.1": {
    "value": "#fffcfc",
    "variable": "var(--colors-red-1)"
  },
  "colors.red.2": {
    "value": "#fff7f7",
    "variable": "var(--colors-red-2)"
  },
  "colors.red.3": {
    "value": "#feebec",
    "variable": "var(--colors-red-3)"
  },
  "colors.red.4": {
    "value": "#ffdbdc",
    "variable": "var(--colors-red-4)"
  },
  "colors.red.5": {
    "value": "#ffcdce",
    "variable": "var(--colors-red-5)"
  },
  "colors.red.6": {
    "value": "#fdbdbe",
    "variable": "var(--colors-red-6)"
  },
  "colors.red.7": {
    "value": "#f4a9aa",
    "variable": "var(--colors-red-7)"
  },
  "colors.red.8": {
    "value": "#eb8e90",
    "variable": "var(--colors-red-8)"
  },
  "colors.red.9": {
    "value": "#e5484d",
    "variable": "var(--colors-red-9)"
  },
  "colors.red.10": {
    "value": "#dc3e42",
    "variable": "var(--colors-red-10)"
  },
  "colors.red.11": {
    "value": "#ce2c31",
    "variable": "var(--colors-red-11)"
  },
  "colors.red.12": {
    "value": "#641723",
    "variable": "var(--colors-red-12)"
  },
  "colors.red.A1": {
    "value": "#ff000003",
    "variable": "var(--colors-red--a1)"
  },
  "colors.red.A2": {
    "value": "#ff000008",
    "variable": "var(--colors-red--a2)"
  },
  "colors.red.A3": {
    "value": "#f3000d14",
    "variable": "var(--colors-red--a3)"
  },
  "colors.red.A4": {
    "value": "#ff000824",
    "variable": "var(--colors-red--a4)"
  },
  "colors.red.A5": {
    "value": "#ff000632",
    "variable": "var(--colors-red--a5)"
  },
  "colors.red.A6": {
    "value": "#f8000442",
    "variable": "var(--colors-red--a6)"
  },
  "colors.red.A7": {
    "value": "#df000356",
    "variable": "var(--colors-red--a7)"
  },
  "colors.red.A8": {
    "value": "#d2000571",
    "variable": "var(--colors-red--a8)"
  },
  "colors.red.A9": {
    "value": "#db0007b7",
    "variable": "var(--colors-red--a9)"
  },
  "colors.red.A10": {
    "value": "#d10005c1",
    "variable": "var(--colors-red--a10)"
  },
  "colors.red.A11": {
    "value": "#c40006d3",
    "variable": "var(--colors-red--a11)"
  },
  "colors.red.A12": {
    "value": "#55000de8",
    "variable": "var(--colors-red--a12)"
  },
  "colors.pink.1": {
    "value": "#fffcfe",
    "variable": "var(--colors-pink-1)"
  },
  "colors.pink.2": {
    "value": "#fef7fb",
    "variable": "var(--colors-pink-2)"
  },
  "colors.pink.3": {
    "value": "#fee9f5",
    "variable": "var(--colors-pink-3)"
  },
  "colors.pink.4": {
    "value": "#fbdcef",
    "variable": "var(--colors-pink-4)"
  },
  "colors.pink.5": {
    "value": "#f6cee7",
    "variable": "var(--colors-pink-5)"
  },
  "colors.pink.6": {
    "value": "#efbfdd",
    "variable": "var(--colors-pink-6)"
  },
  "colors.pink.7": {
    "value": "#e7acd0",
    "variable": "var(--colors-pink-7)"
  },
  "colors.pink.8": {
    "value": "#dd93c2",
    "variable": "var(--colors-pink-8)"
  },
  "colors.pink.9": {
    "value": "#d6409f",
    "variable": "var(--colors-pink-9)"
  },
  "colors.pink.10": {
    "value": "#cf3897",
    "variable": "var(--colors-pink-10)"
  },
  "colors.pink.11": {
    "value": "#c2298a",
    "variable": "var(--colors-pink-11)"
  },
  "colors.pink.12": {
    "value": "#651249",
    "variable": "var(--colors-pink-12)"
  },
  "colors.pink.A1": {
    "value": "#ff00aa03",
    "variable": "var(--colors-pink--a1)"
  },
  "colors.pink.A2": {
    "value": "#e0008008",
    "variable": "var(--colors-pink--a2)"
  },
  "colors.pink.A3": {
    "value": "#f4008c16",
    "variable": "var(--colors-pink--a3)"
  },
  "colors.pink.A4": {
    "value": "#e2008b23",
    "variable": "var(--colors-pink--a4)"
  },
  "colors.pink.A5": {
    "value": "#d1008331",
    "variable": "var(--colors-pink--a5)"
  },
  "colors.pink.A6": {
    "value": "#c0007840",
    "variable": "var(--colors-pink--a6)"
  },
  "colors.pink.A7": {
    "value": "#b6006f53",
    "variable": "var(--colors-pink--a7)"
  },
  "colors.pink.A8": {
    "value": "#af006f6c",
    "variable": "var(--colors-pink--a8)"
  },
  "colors.pink.A9": {
    "value": "#c8007fbf",
    "variable": "var(--colors-pink--a9)"
  },
  "colors.pink.A10": {
    "value": "#c2007ac7",
    "variable": "var(--colors-pink--a10)"
  },
  "colors.pink.A11": {
    "value": "#b60074d6",
    "variable": "var(--colors-pink--a11)"
  },
  "colors.pink.A12": {
    "value": "#59003bed",
    "variable": "var(--colors-pink--a12)"
  },
  "colors.violet.1": {
    "value": "#fdfcfe",
    "variable": "var(--colors-violet-1)"
  },
  "colors.violet.2": {
    "value": "#faf8ff",
    "variable": "var(--colors-violet-2)"
  },
  "colors.violet.3": {
    "value": "#f4f0fe",
    "variable": "var(--colors-violet-3)"
  },
  "colors.violet.4": {
    "value": "#ebe4ff",
    "variable": "var(--colors-violet-4)"
  },
  "colors.violet.5": {
    "value": "#e1d9ff",
    "variable": "var(--colors-violet-5)"
  },
  "colors.violet.6": {
    "value": "#d4cafe",
    "variable": "var(--colors-violet-6)"
  },
  "colors.violet.7": {
    "value": "#c2b5f5",
    "variable": "var(--colors-violet-7)"
  },
  "colors.violet.8": {
    "value": "#aa99ec",
    "variable": "var(--colors-violet-8)"
  },
  "colors.violet.9": {
    "value": "#6e56cf",
    "variable": "var(--colors-violet-9)"
  },
  "colors.violet.10": {
    "value": "#654dc4",
    "variable": "var(--colors-violet-10)"
  },
  "colors.violet.11": {
    "value": "#6550b9",
    "variable": "var(--colors-violet-11)"
  },
  "colors.violet.12": {
    "value": "#2f265f",
    "variable": "var(--colors-violet-12)"
  },
  "colors.violet.A1": {
    "value": "#5500aa03",
    "variable": "var(--colors-violet--a1)"
  },
  "colors.violet.A2": {
    "value": "#4900ff07",
    "variable": "var(--colors-violet--a2)"
  },
  "colors.violet.A3": {
    "value": "#4400ee0f",
    "variable": "var(--colors-violet--a3)"
  },
  "colors.violet.A4": {
    "value": "#4300ff1b",
    "variable": "var(--colors-violet--a4)"
  },
  "colors.violet.A5": {
    "value": "#3600ff26",
    "variable": "var(--colors-violet--a5)"
  },
  "colors.violet.A6": {
    "value": "#3100fb35",
    "variable": "var(--colors-violet--a6)"
  },
  "colors.violet.A7": {
    "value": "#2d01dd4a",
    "variable": "var(--colors-violet--a7)"
  },
  "colors.violet.A8": {
    "value": "#2b00d066",
    "variable": "var(--colors-violet--a8)"
  },
  "colors.violet.A9": {
    "value": "#2400b7a9",
    "variable": "var(--colors-violet--a9)"
  },
  "colors.violet.A10": {
    "value": "#2300abb2",
    "variable": "var(--colors-violet--a10)"
  },
  "colors.violet.A11": {
    "value": "#1f0099af",
    "variable": "var(--colors-violet--a11)"
  },
  "colors.violet.A12": {
    "value": "#0b0043d9",
    "variable": "var(--colors-violet--a12)"
  },
  "colors.indigo.1": {
    "value": "#fdfdfe",
    "variable": "var(--colors-indigo-1)"
  },
  "colors.indigo.2": {
    "value": "#f7f9ff",
    "variable": "var(--colors-indigo-2)"
  },
  "colors.indigo.3": {
    "value": "#edf2fe",
    "variable": "var(--colors-indigo-3)"
  },
  "colors.indigo.4": {
    "value": "#e1e9ff",
    "variable": "var(--colors-indigo-4)"
  },
  "colors.indigo.5": {
    "value": "#d2deff",
    "variable": "var(--colors-indigo-5)"
  },
  "colors.indigo.6": {
    "value": "#c1d0ff",
    "variable": "var(--colors-indigo-6)"
  },
  "colors.indigo.7": {
    "value": "#abbdf9",
    "variable": "var(--colors-indigo-7)"
  },
  "colors.indigo.8": {
    "value": "#8da4ef",
    "variable": "var(--colors-indigo-8)"
  },
  "colors.indigo.9": {
    "value": "#3e63dd",
    "variable": "var(--colors-indigo-9)"
  },
  "colors.indigo.10": {
    "value": "#3358d4",
    "variable": "var(--colors-indigo-10)"
  },
  "colors.indigo.11": {
    "value": "#3a5bc7",
    "variable": "var(--colors-indigo-11)"
  },
  "colors.indigo.12": {
    "value": "#1f2d5c",
    "variable": "var(--colors-indigo-12)"
  },
  "colors.indigo.A1": {
    "value": "#00008002",
    "variable": "var(--colors-indigo--a1)"
  },
  "colors.indigo.A2": {
    "value": "#0040ff08",
    "variable": "var(--colors-indigo--a2)"
  },
  "colors.indigo.A3": {
    "value": "#0047f112",
    "variable": "var(--colors-indigo--a3)"
  },
  "colors.indigo.A4": {
    "value": "#0044ff1e",
    "variable": "var(--colors-indigo--a4)"
  },
  "colors.indigo.A5": {
    "value": "#0044ff2d",
    "variable": "var(--colors-indigo--a5)"
  },
  "colors.indigo.A6": {
    "value": "#003eff3e",
    "variable": "var(--colors-indigo--a6)"
  },
  "colors.indigo.A7": {
    "value": "#0037ed54",
    "variable": "var(--colors-indigo--a7)"
  },
  "colors.indigo.A8": {
    "value": "#0034dc72",
    "variable": "var(--colors-indigo--a8)"
  },
  "colors.indigo.A9": {
    "value": "#0031d2c1",
    "variable": "var(--colors-indigo--a9)"
  },
  "colors.indigo.A10": {
    "value": "#002ec9cc",
    "variable": "var(--colors-indigo--a10)"
  },
  "colors.indigo.A11": {
    "value": "#002bb7c5",
    "variable": "var(--colors-indigo--a11)"
  },
  "colors.indigo.A12": {
    "value": "#001046e0",
    "variable": "var(--colors-indigo--a12)"
  },
  "colors.cyan.1": {
    "value": "#fafdfe",
    "variable": "var(--colors-cyan-1)"
  },
  "colors.cyan.2": {
    "value": "#f2fafb",
    "variable": "var(--colors-cyan-2)"
  },
  "colors.cyan.3": {
    "value": "#def7f9",
    "variable": "var(--colors-cyan-3)"
  },
  "colors.cyan.4": {
    "value": "#caf1f6",
    "variable": "var(--colors-cyan-4)"
  },
  "colors.cyan.5": {
    "value": "#b5e9f0",
    "variable": "var(--colors-cyan-5)"
  },
  "colors.cyan.6": {
    "value": "#9ddde7",
    "variable": "var(--colors-cyan-6)"
  },
  "colors.cyan.7": {
    "value": "#7dcedc",
    "variable": "var(--colors-cyan-7)"
  },
  "colors.cyan.8": {
    "value": "#3db9cf",
    "variable": "var(--colors-cyan-8)"
  },
  "colors.cyan.9": {
    "value": "#00a2c7",
    "variable": "var(--colors-cyan-9)"
  },
  "colors.cyan.10": {
    "value": "#0797b9",
    "variable": "var(--colors-cyan-10)"
  },
  "colors.cyan.11": {
    "value": "#107d98",
    "variable": "var(--colors-cyan-11)"
  },
  "colors.cyan.12": {
    "value": "#0d3c48",
    "variable": "var(--colors-cyan-12)"
  },
  "colors.cyan.A1": {
    "value": "#0099cc05",
    "variable": "var(--colors-cyan--a1)"
  },
  "colors.cyan.A2": {
    "value": "#009db10d",
    "variable": "var(--colors-cyan--a2)"
  },
  "colors.cyan.A3": {
    "value": "#00c2d121",
    "variable": "var(--colors-cyan--a3)"
  },
  "colors.cyan.A4": {
    "value": "#00bcd435",
    "variable": "var(--colors-cyan--a4)"
  },
  "colors.cyan.A5": {
    "value": "#01b4cc4a",
    "variable": "var(--colors-cyan--a5)"
  },
  "colors.cyan.A6": {
    "value": "#00a7c162",
    "variable": "var(--colors-cyan--a6)"
  },
  "colors.cyan.A7": {
    "value": "#009fbb82",
    "variable": "var(--colors-cyan--a7)"
  },
  "colors.cyan.A8": {
    "value": "#00a3c0c2",
    "variable": "var(--colors-cyan--a8)"
  },
  "colors.cyan.A9": {
    "value": "#00a2c7",
    "variable": "var(--colors-cyan--a9)"
  },
  "colors.cyan.A10": {
    "value": "#0094b7f8",
    "variable": "var(--colors-cyan--a10)"
  },
  "colors.cyan.A11": {
    "value": "#007491ef",
    "variable": "var(--colors-cyan--a11)"
  },
  "colors.cyan.A12": {
    "value": "#00323ef2",
    "variable": "var(--colors-cyan--a12)"
  },
  "colors.jade.1": {
    "value": "#fbfefd",
    "variable": "var(--colors-jade-1)"
  },
  "colors.jade.2": {
    "value": "#f4fbf7",
    "variable": "var(--colors-jade-2)"
  },
  "colors.jade.3": {
    "value": "#e6f7ed",
    "variable": "var(--colors-jade-3)"
  },
  "colors.jade.4": {
    "value": "#d6f1e3",
    "variable": "var(--colors-jade-4)"
  },
  "colors.jade.5": {
    "value": "#c3e9d7",
    "variable": "var(--colors-jade-5)"
  },
  "colors.jade.6": {
    "value": "#acdec8",
    "variable": "var(--colors-jade-6)"
  },
  "colors.jade.7": {
    "value": "#8bceb6",
    "variable": "var(--colors-jade-7)"
  },
  "colors.jade.8": {
    "value": "#56ba9f",
    "variable": "var(--colors-jade-8)"
  },
  "colors.jade.9": {
    "value": "#29a383",
    "variable": "var(--colors-jade-9)"
  },
  "colors.jade.10": {
    "value": "#26997b",
    "variable": "var(--colors-jade-10)"
  },
  "colors.jade.11": {
    "value": "#208368",
    "variable": "var(--colors-jade-11)"
  },
  "colors.jade.12": {
    "value": "#1d3b31",
    "variable": "var(--colors-jade-12)"
  },
  "colors.jade.A1": {
    "value": "#00c08004",
    "variable": "var(--colors-jade--a1)"
  },
  "colors.jade.A2": {
    "value": "#00a3460b",
    "variable": "var(--colors-jade--a2)"
  },
  "colors.jade.A3": {
    "value": "#00ae4819",
    "variable": "var(--colors-jade--a3)"
  },
  "colors.jade.A4": {
    "value": "#00a85129",
    "variable": "var(--colors-jade--a4)"
  },
  "colors.jade.A5": {
    "value": "#00a2553c",
    "variable": "var(--colors-jade--a5)"
  },
  "colors.jade.A6": {
    "value": "#009a5753",
    "variable": "var(--colors-jade--a6)"
  },
  "colors.jade.A7": {
    "value": "#00945f74",
    "variable": "var(--colors-jade--a7)"
  },
  "colors.jade.A8": {
    "value": "#00976ea9",
    "variable": "var(--colors-jade--a8)"
  },
  "colors.jade.A9": {
    "value": "#00916bd6",
    "variable": "var(--colors-jade--a9)"
  },
  "colors.jade.A10": {
    "value": "#008764d9",
    "variable": "var(--colors-jade--a10)"
  },
  "colors.jade.A11": {
    "value": "#007152df",
    "variable": "var(--colors-jade--a11)"
  },
  "colors.jade.A12": {
    "value": "#002217e2",
    "variable": "var(--colors-jade--a12)"
  },
  "colors.grass.1": {
    "value": "#fbfefb",
    "variable": "var(--colors-grass-1)"
  },
  "colors.grass.2": {
    "value": "#f5fbf5",
    "variable": "var(--colors-grass-2)"
  },
  "colors.grass.3": {
    "value": "#e9f6e9",
    "variable": "var(--colors-grass-3)"
  },
  "colors.grass.4": {
    "value": "#daf1db",
    "variable": "var(--colors-grass-4)"
  },
  "colors.grass.5": {
    "value": "#c9e8ca",
    "variable": "var(--colors-grass-5)"
  },
  "colors.grass.6": {
    "value": "#b2ddb5",
    "variable": "var(--colors-grass-6)"
  },
  "colors.grass.7": {
    "value": "#94ce9a",
    "variable": "var(--colors-grass-7)"
  },
  "colors.grass.8": {
    "value": "#65ba74",
    "variable": "var(--colors-grass-8)"
  },
  "colors.grass.9": {
    "value": "#46a758",
    "variable": "var(--colors-grass-9)"
  },
  "colors.grass.10": {
    "value": "#3e9b4f",
    "variable": "var(--colors-grass-10)"
  },
  "colors.grass.11": {
    "value": "#2a7e3b",
    "variable": "var(--colors-grass-11)"
  },
  "colors.grass.12": {
    "value": "#203c25",
    "variable": "var(--colors-grass-12)"
  },
  "colors.grass.A1": {
    "value": "#00c00004",
    "variable": "var(--colors-grass--a1)"
  },
  "colors.grass.A2": {
    "value": "#0099000a",
    "variable": "var(--colors-grass--a2)"
  },
  "colors.grass.A3": {
    "value": "#00970016",
    "variable": "var(--colors-grass--a3)"
  },
  "colors.grass.A4": {
    "value": "#009f0725",
    "variable": "var(--colors-grass--a4)"
  },
  "colors.grass.A5": {
    "value": "#00930536",
    "variable": "var(--colors-grass--a5)"
  },
  "colors.grass.A6": {
    "value": "#008f0a4d",
    "variable": "var(--colors-grass--a6)"
  },
  "colors.grass.A7": {
    "value": "#018b0f6b",
    "variable": "var(--colors-grass--a7)"
  },
  "colors.grass.A8": {
    "value": "#008d199a",
    "variable": "var(--colors-grass--a8)"
  },
  "colors.grass.A9": {
    "value": "#008619b9",
    "variable": "var(--colors-grass--a9)"
  },
  "colors.grass.A10": {
    "value": "#007b17c1",
    "variable": "var(--colors-grass--a10)"
  },
  "colors.grass.A11": {
    "value": "#006514d5",
    "variable": "var(--colors-grass--a11)"
  },
  "colors.grass.A12": {
    "value": "#002006df",
    "variable": "var(--colors-grass--a12)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.prose": {
    "value": "65ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.6": {
    "value": "var(--colors-color-palette-6)",
    "variable": "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.7": {
    "value": "var(--colors-color-palette-7)",
    "variable": "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.8": {
    "value": "var(--colors-color-palette-8)",
    "variable": "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.9": {
    "value": "var(--colors-color-palette-9)",
    "variable": "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.11": {
    "value": "var(--colors-color-palette-11)",
    "variable": "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.12": {
    "value": "var(--colors-color-palette-12)",
    "variable": "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.A1": {
    "value": "var(--colors-color-palette--a1)",
    "variable": "var(--colors-color-palette--a1)"
  },
  "colors.colorPalette.A2": {
    "value": "var(--colors-color-palette--a2)",
    "variable": "var(--colors-color-palette--a2)"
  },
  "colors.colorPalette.A3": {
    "value": "var(--colors-color-palette--a3)",
    "variable": "var(--colors-color-palette--a3)"
  },
  "colors.colorPalette.A4": {
    "value": "var(--colors-color-palette--a4)",
    "variable": "var(--colors-color-palette--a4)"
  },
  "colors.colorPalette.A5": {
    "value": "var(--colors-color-palette--a5)",
    "variable": "var(--colors-color-palette--a5)"
  },
  "colors.colorPalette.A6": {
    "value": "var(--colors-color-palette--a6)",
    "variable": "var(--colors-color-palette--a6)"
  },
  "colors.colorPalette.A7": {
    "value": "var(--colors-color-palette--a7)",
    "variable": "var(--colors-color-palette--a7)"
  },
  "colors.colorPalette.A8": {
    "value": "var(--colors-color-palette--a8)",
    "variable": "var(--colors-color-palette--a8)"
  },
  "colors.colorPalette.A9": {
    "value": "var(--colors-color-palette--a9)",
    "variable": "var(--colors-color-palette--a9)"
  },
  "colors.colorPalette.A10": {
    "value": "var(--colors-color-palette--a10)",
    "variable": "var(--colors-color-palette--a10)"
  },
  "colors.colorPalette.A11": {
    "value": "var(--colors-color-palette--a11)",
    "variable": "var(--colors-color-palette--a11)"
  },
  "colors.colorPalette.A12": {
    "value": "var(--colors-color-palette--a12)",
    "variable": "var(--colors-color-palette--a12)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar