import { Field } from "@ark-ui/react/field";
import { createSlotStyles } from "@true-ui/styles";

// const fieldStyles = createSlotStyles({
//   slots: ["control", "thumb"],
//   base: {
//     control: {
//       display: "flex",
//       alignItems: "center",
//       p: "1px",
//       cursor: "pointer",
//     },
//     thumb: {
//       boxSizing: "border-box",
//       backgroundClip: "padding-box",
//       bg: "base.1",
//       h: "full",
//       borderColor: "base.A3",
//       border: "1px solid",
//       shadow: "0 1px 2px 0 {colors.base.A3}",
//       _hover: {
//         bg: "base.2",
//         borderColor: "base.A5",
//         boxSizing: "border-box",
//         backgroundClip: "padding-box",
//       },
//       _active: {
//         scale: "0.9",
//       },
//     },
//   },
//   variants: {
//     size: {
//       md: {
//         control: {
//           h: "24px",
//           w: "calc(24px * 1.5)",
//         },
//       }, // 24px
//       sm: {
//         control: {
//           h: "20px",
//           w: "calc(20px * 1.5)",
//         },
//       }, // 20px
//       xs: {
//         control: {
//           h: "16px",
//           w: "calc(16px * 1.5)",
//         },
//       }, // 16px
//     },
//     state: {
//       on: {
//         control: {
//           bg: "colorPalette.9",
//           justifyContent: "end",
//         },
//       },
//       off: {
//         control: {
//           bg: "base.7",
//           justifyContent: "start",
//         },
//       },
//     },
//     color: {
//       grass: {
//         control: {
//           colorPalette: "grass",
//         },
//       },
//       violet: {
//         control: {
//           colorPalette: "violet",
//         },
//       },
//     },
//     shape: {
//       pill: {
//         control: {
//           rounded: "full",
//         },
//         thumb: {
//           rounded: "full",
//           aspectRatio: "1/1",
//         },
//       },
//       box: {
//         control: {
//           rounded: "4px",
//         },
//         thumb: {
//           rounded: "3px",
//           aspectRatio: "4/5",
//         },
//       },
//     },
//   },
// });

export function FieldExample() {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
