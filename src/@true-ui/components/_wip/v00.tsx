import { Field, useFieldContext } from "@ark-ui/react/field";
import { Button } from "@true-ui/components/button";
import { el } from "@true-ui/components/element";
import { createSlotStyles, createStyles, mergeStyles } from "@true-ui/styles";

/*

Parts
- Root
- Label
- Frame (synthetic)
- Input
- Textarea
- Select (might want to omit this in favor of select comp)
- HelperText
- ErrorText
*/

// const fieldStyles = createSlotStyles({
//   slots: [
//     "root",
//     "label",
//     "frame",
//     "input",
//     "textarea",
//     "select",
//     "helperText",
//     "errorText",
//   ],
//   base: {
//     root: {
//       bg: "red.2",
//     },
//     input: {
//       colorPalette: "base",
//     },
//     frame: {
//       colorPalette: "base",
//     },
//   },
//   variants: {
//     framed: {
//       true: {
//         frame: {
//           boxSizing: "border-box",
//           backgroundClip: "padding-box",
//           h: "32px",
//           px: "8px",
//           display: "flex",
//           alignItems: "center",
//           gap: "6px",
//           border: "1px solid {colors.base.A5}",
//           rounded: "4px",
//           w: "full",
//           maxW: "400px",
//           bg: "base.1",
//           _hover: { border: "1px solid {colors.colorPalette.A7}" },
//           _focusWithin: {
//             border: "1px solid {colors.colorPalette.A9}",
//             _hover: { border: "1px solid {colors.colorPalette.A9}" },
//           },
//         },
//         input: {
//           _focus: {
//             ring: "none",
//             ringOffset: "none",
//           },
//         },
//       },
//       false: {
//         frame: {},
//         input: {
//           boxSizing: "border-box",
//           backgroundClip: "padding-box",
//           px: "8px",
//           border: "1px solid {colors.base.A5}",
//           rounded: "4px",
//           h: "32px",
//           w: "full",
//           maxW: "400px",
//           bg: "base.1",
//           _hover: { border: "1px solid {colors.colorPalette.A7}" },
//           _focusVisible: {
//             border: "1px solid {colors.colorPalette.A9}",
//             _hover: { border: "1px solid {colors.colorPalette.A9}" },
//           },
//           _focus: {
//             ring: "none",
//             ringOffset: "none",
//           },
//         },
//       },
//     },
//   },
//   compoundVariants: [],
//   defaultVariants: {},
// });

const frameStyles = createStyles({
  base: {
    colorPalette: "base",
    boxSizing: "border-box",
    backgroundClip: "padding-box",
    h: "32px",
    px: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid {colors.base.A5}",
    rounded: "4px",
    w: "full",
    maxW: "[400px]",
    bg: "base.1",
    _hover: { border: "1px solid {colors.colorPalette.A7}" },
    _focusWithin: {
      border: "1px solid {colors.colorPalette.A9}",
      _hover: { border: "1px solid {colors.colorPalette.A9}" },
    },
  },
});

const inputStyles = createStyles({
  base: {
    colorPalette: "base",
    _focus: {
      ring: "none",
      // ringOffset: "none",
    },
  },
  variants: {
    framed: {
      true: {
        h: "full",
        w: "full",
      },
      false: {
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        px: "8px",
        border: "1px solid {colors.base.A5}",
        rounded: "4px",
        h: "32px",
        w: "full",
        maxW: "400px",
        bg: "base.1",
        _hover: { border: "1px solid {colors.colorPalette.A7}" },
        _focusVisible: {
          border: "1px solid {colors.colorPalette.A9}",
          _hover: { border: "1px solid {colors.colorPalette.A9}" },
        },
      },
    },
  },
  defaultVariants: {
    framed: true,
  },
});

// Frame Comp

import { type TrueElProps } from "@true-ui/components/element";
import { dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { forwardRef } from "react";

type FrameProps = TrueElProps<"div">;

export const FieldFrame = forwardRef<HTMLDivElement, FrameProps>(
  (props, ref) => {
    const field = useFieldContext();
    const stateProps = {
      "data-disabled": dataAttr(field.disabled),
      "data-invalid": dataAttr(field.invalid),
      "data-readonly": dataAttr(field.readOnly),
      "data-required": dataAttr(field.required),
    };
    const mergedProps = mergeProps(stateProps, props);

    return <el.div {...mergedProps} ref={ref} />;
  }
);

FieldFrame.displayName = "FieldFrame";

export function FieldExample() {
  return (
    <div
      className={mergeStyles({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      })}
    >
      <Field.Root disabled>
        <FieldFrame
          data-part="frame" // add data-scope="field" and move both to comp def
          onClick={(e) => {
            // Prevent focusing if clicking on the input itself
            if (e.target === e.currentTarget) {
              e.currentTarget.querySelector("input")?.focus();
            }
          }}
          className={mergeStyles(frameStyles.raw())}
        >
          <el.span
            data-part="icon"
            className={mergeStyles({ pointerEvents: "none" })}
          >
            USD
          </el.span>

          <Field.Input
            placeholder="Enter your name"
            className={mergeStyles(inputStyles.raw({ framed: true }))}
          />

          <el.div
            data-part="icon-group"
            className={mergeStyles({
              w: "fir",
              h: "fit",
              gap: "4px",
              display: "flex",
            })}
          >
            <el.span
              data-part="icon"
              className={mergeStyles({
                w: "12px",
                h: "12px",
                bg: "violet.6",
                rounded: "4px",
              })}
            />
            <el.span
              data-part="icon"
              className={mergeStyles({
                w: "12px",
                h: "12px",
                bg: "orange.6",
                rounded: "4px",
              })}
            />
          </el.div>

          <el.span
            data-part="icon"
            className={mergeStyles({ pointerEvents: "none" })}
          >
            +
          </el.span>
        </FieldFrame>
      </Field.Root>
      <Field.Root>
        <Field.Input
          placeholder="Enter your name"
          className={mergeStyles(inputStyles.raw({ framed: false }))}
        />
      </Field.Root>
    </div>
  );
}

import { Editable } from "@ark-ui/react/editable";
import { Menu } from "@ark-ui/react/menu";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { z } from "zod";

/*

- Basic validation
- complex composition for functionality
- no need for extra styles
- no need for extra components
- no need for extra state
- no need for extra props
- no need for extra hooks
- no need for extra context
- no need for extra types

*/

export function EditableButtonField(props: Field.RootProps) {
  const [value, setValue] = useState("Pick a number");
  const [validation, setValidation] = useState<
    z.SafeParseReturnType<number, number> | undefined
  >();

  const validateNumber = z.coerce
    .number()
    .min(1, "Number must be at least 1")
    .max(3, "Number must be at most 3");

  return (
    <Field.Root {...props}>
      <Editable.Root
        activationMode="dblclick"
        invalid={!validation?.success} // do you need to set this on the root as well?
        autoResize
        value={value}
        onValueChange={(e) => {
          console.log(e);
          setValue(e.value);
          const result = validateNumber.safeParse(e.value);
          setValidation(result);
        }}
      >
        <Button
          styleVariant={{
            size: "sm",
            weight: "subtle",
            // the default value is undefined so we check for that first,
            // if it's undefined it;s in it's init state and we don't throw an error yet
            // color: validation ? (validation?.success ? "base" : "red") : "base",
            // a button doesn't have an invalid state so it wouldn't make sense to define invalid in the createStyles()
            // so we need to define it on the root. is this a side effect of trying to use buttons as inputs?
            // - you could also have the button like styling in an input as a variant? it removes the need to use an editable comp here.
            // - this also prevents a situation where the Primary as a button is used as a input style!
            // - this also prevents the need to style for conditions that don't naturally apply to buttons;
            //    like readOnly, required, invalid, etc.
          }}
        >
          <Editable.Area>
            <Editable.Input
              className={mergeStyles({
                _focus: { ring: "none", ringOffset: "none" },
              })}
            />
            <Editable.Preview />
          </Editable.Area>

          <Menu.Root
            onSelect={(e) => {
              console.log(e);
              setValue(e.value);
              const result = validateNumber.safeParse(e.value);
              setValidation(result);
            }}
          >
            <Menu.Trigger asChild>
              <div>
                <CaretDown />
              </div>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="1">1</Menu.Item>
                <Menu.Item value="2">2</Menu.Item>
                <Menu.Item value="3">3</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        </Button>
      </Editable.Root>
      <div
        className={mergeStyles({
          color: "red.9",
          mt: "4px",
          px: "4px",
          fontSize: "12px",
          bg: "grass.1",
          rounded: "4px",
        })}
      >
        {validation?.error?.errors[0].message.toString()}
      </div>
    </Field.Root>
  );
}

//@ts-nocheck
// export function FieldExample2() {
//   return (
//     <Field.Root>
//       <Field.Frame>
//         <Icon.Calendar/>
//         <Field.Input
//           styleVariant={{ ghost: true, size: "md" }}
//           placeholder="Enter your name"
//         />
//         <Icon.Caret/>
//       </Field.Frame>
//       <Field.HelperText>Some additional Info</Field.HelperText>
//       <Field.ErrorText>Error Info</Field.ErrorText>
//     </Field.Root>
//   );
// }
// export function FieldExample3() {
//   return (
//     <Field.Root>
//       <Button styleVariant={{size: "sm", affordance: "tertiary", color: "base"}}>
//         Editable!
//         <Icon.Caret/>
//       </Button>
//       <Field.HelperText>Some additional Info</Field.HelperText>
//       <Field.ErrorText>Error Info</Field.ErrorText>
//     </Field.Root>
//   );
// }

/*

- is a frame needed when using dropdowns/select/switch etc as a input?

*/
const inputStyles2 = createStyles({
  base: {
    colorPalette: "base",
    _selection: {
      bg: "colorPalette.A4",
    },
    _disabled: {
      opacity: "0.5",
    },
    _invalid: {
      colorPalette: "red",
    },
    w: "full",
    rounded: "4px",
    _focus: {
      ring: "none",
    },
  },
  variants: {
    affordance: {
      primary: {
        color: "colorPalette.12",
        _placeholder: {
          color: "colorPalette.A6",
        },
        /* ...more defined in compound variants section */
      },
      secondary: {
        color: "colorPalette.11",
        _placeholder: {
          color: "colorPalette.A6",
        },
        /* ...more defined in compound variants section */
      },
    },
    size: {
      xs: { height: "16px", px: "4px", fontSize: "xs", lineHeight: "none" },
      sm: { height: "24px", px: "6px", fontSize: "sm" },
      base: { height: "32px", px: "8px", fontSize: "base" },
      lg: { height: "40px", px: "12px", fontSize: "lg" },
      xl: { height: "48px", px: "16px", fontSize: "xl" },
    },
    framed: {
      true: {
        h: "full",
        w: "full",
      },
    },
  },
  compoundVariants: [
    {
      affordance: "primary",
      framed: false,
      css: {
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        border: "1px solid {colors.colorPalette.A5}",
        bg: "base.1",
        _hover: { border: "1px solid {colors.colorPalette.A7}" },
        _focusVisible: {
          border: "1px solid {colors.colorPalette.A9}",
          _hover: { border: "1px solid {colors.colorPalette.A9}" },
        },
      },
    },
    {
      affordance: "secondary",
      framed: false,
      css: {
        bg: "colorPalette.A3",
        _hover: { bg: "colorPalette.A5" },
        _focusVisible: {
          bg: "colorPalette.A4",
        },
      },
    },
  ],
  defaultVariants: {
    framed: false,
    size: "base",
    affordance: "primary",
  },
});

export function RestyledFieldExample() {
  return (
    <Field.Root>
      <Field.Input
        className={mergeStyles(
          inputStyles2.raw({
            framed: false,
            size: "base",
            affordance: "secondary",
          })
        )}
        placeholder="Enter your name"
      />
      {/* <Field.HelperText>Some additional Info</Field.HelperText> */}
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
