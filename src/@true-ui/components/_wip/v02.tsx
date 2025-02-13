import { ark, HTMLArkProps, HTMLProps } from "@ark-ui/react";
import { Field, useFieldContext } from "@ark-ui/react/field";
import { Portal } from "@ark-ui/react/portal";
import {
  createListCollection,
  Select,
  type ListCollection,
} from "@ark-ui/react/select";
import { defineRecipe } from "@panda";
import { el, type TrueElProps } from "@true-ui/components/element";
import {
  createStyles,
  mergeStyles,
  type StyleVariantProps,
} from "@true-ui/styles";
import { ariaAttr, dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { forwardRef, useMemo } from "react";
// const inputStyles = createStyles({
//   base: {
//     colorPalette: "base",
//     _selection: {
//       bg: "colorPalette.A4",
//     },
//     _disabled: {
//       opacity: "0.5",
//     },
//     _invalid: {
//       colorPalette: "red",
//     },
//     w: "full",
//     rounded: "4px",
//     _focus: {
//       ring: "none",
//     },
//   },
//   variants: {
//     affordance: {
//       primary: {
//         color: "colorPalette.12",
//         _placeholder: {
//           color: "colorPalette.A6",
//         },
//         /* ...more defined in compound variants section */
//       },
//       secondary: {
//         color: "colorPalette.11",
//         _placeholder: {
//           color: "colorPalette.A6",
//         },
//         /* ...more defined in compound variants section */
//       },
//     },
//     size: {
//       xs: { height: "16px", px: "4px", fontSize: "xs" },
//       sm: { height: "24px", px: "6px", fontSize: "sm" },
//       base: { height: "32px", px: "8px", fontSize: "base" },
//       lg: { height: "40px", px: "12px", fontSize: "lg" },
//       xl: { height: "48px", px: "16px", fontSize: "xl" },
//     },
//     framed: {
//       true: {
//         h: "full",
//         w: "full",
//       },
//     },
//   },
//   compoundVariants: [
//     {
//       affordance: "primary",
//       framed: false,
//       css: {
//         boxSizing: "border-box",
//         backgroundClip: "padding-box",
//         border: "1px solid {colors.colorPalette.A5}",
//         bg: "base.1",
//         _hover: { border: "1px solid {colors.colorPalette.A7}" },
//         _focusVisible: {
//           border: "1px solid {colors.colorPalette.A9}",
//           _hover: { border: "1px solid {colors.colorPalette.A9}" },
//         },
//       },
//     },
//     {
//       affordance: "secondary",
//       framed: false,
//       css: {
//         bg: "colorPalette.A3",
//         _hover: { bg: "colorPalette.A4" },
//         _focusVisible: {
//           bg: "colorPalette.A4",
//         },
//       },
//     },
//   ],
//   defaultVariants: {
//     framed: false,
//     size: "base",
//     affordance: "primary",
//   },
// });
const fieldFrameStyles = createStyles({
  base: {
    appearance: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    colorPalette: "base",
    w: "full",
    rounded: "4px",
    _selection: {
      bg: "colorPalette.A4",
    },
    _disabled: {
      opacity: "0.5",
    },
    _invalid: {
      colorPalette: "red",
    },
  },
  variants: {
    weight: {
      outline: {
        bg: "colorPalette.A1",
        color: "colorPalette.12",
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        border: "1px solid {colors.colorPalette.A5}",

        _placeholder: {
          color: "colorPalette.A6",
        },
        _hover: { border: "1px solid {colors.colorPalette.A7}" },
        _focusWithin: {
          border: "1px solid {colors.colorPalette.A9}",
          _hover: { border: "1px solid {colors.colorPalette.A9}" },
        },
      },
      subtle: {
        bg: "colorPalette.A3",
        color: "colorPalette.11",

        _placeholder: {
          color: "colorPalette.A6",
        },
        _hover: { bg: "colorPalette.A4" },
        _focusVisible: {
          bg: "colorPalette.A4",
          _hover: { bg: "colorPalette.A4" },
        },
      },
    },
    size: {
      xs: { gap: "4px", height: "16px", px: "4px", fontSize: "xs" },
      sm: { gap: "6px", height: "24px", px: "6px", fontSize: "sm" },
      base: { gap: "8px", height: "32px", px: "8px", fontSize: "base" },
      lg: { gap: "12px", height: "40px", px: "12px", fontSize: "lg" },
      xl: { gap: "16px", height: "48px", px: "16px", fontSize: "xl" },
    },
  },
  defaultVariants: {
    weight: "subtle",
    size: "base",
  },
});

type FrameProps = HTMLArkProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof fieldFrameStyles>;
};

export const FieldFrameWIP = forwardRef<HTMLDivElement, FrameProps>(
  (props, ref) => {
    // is there a way to create a new context here and use it for input and text area so they both get data-framed attribute?
    const field = useFieldContext();
    // ark doesn't export getControlProps() so we're essentially asking for the same contexts to recreate it
    const frameProps = useMemo(
      () =>
        ({
          // "aria-describedby": field?.ariaDescribedby,
          "aria-invalid": ariaAttr(field?.invalid),
          "data-invalid": dataAttr(field?.invalid),
          "data-required": dataAttr(field?.required),
          "data-readonly": dataAttr(field?.readOnly),
          "data-disabled": dataAttr(field?.disabled),
          "data-part": "frame",
          "data-scope": "field",
        }) as HTMLProps<"div">,
      [
        // field?.ariaDescribedby,
        field?.invalid,
        field?.required,
        field?.readOnly,
        field?.disabled,
      ]
    );
    const mergedProps = mergeProps(frameProps, props);

    return (
      <ark.div
        {...mergedProps}
        ref={ref}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            // Use the control ID from field context
            const control = document.getElementById(field?.ids?.control);
            if (control instanceof HTMLElement) control.focus();
          }
        }}
        className={mergeStyles(
          fieldFrameStyles.raw({ size: "base", weight: "outline" })
        )}
      />
    );
  }
);

FieldFrameWIP.displayName = "FieldFrame";

export const SelectWithFieldExample = (props: Field.RootProps) => {
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <Field.Root {...props}>
      <Select.Root collection={collection} multiple>
        <Select.Control>
          <Select.Trigger>
            <FieldFrameWIP>
              <Select.ValueText placeholder="Select a Framework" />
              <Select.Indicator>↓</Select.Indicator>
            </FieldFrameWIP>
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content /* add style variants here for size */>
            {collection.items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
        <Select.HiddenSelect />
      </Select.Root>
    </Field.Root>
  );
};

import { NumberInput } from "@ark-ui/react/number-input";

export const NumberInputWithFieldExample = (props: Field.RootProps) => (
  <Field.Root {...props} readOnly={false}>
    <NumberInput.Root
      allowMouseWheel
      formatOptions={{
        style: "currency",
        currency: "USD",
      }}
      step={100}
    >
      {/* <NumberInput.Label>Label</NumberInput.Label> */}
      <FieldFrameWIP>
        <NumberInput.Input className={mergeStyles({ outline: "none" })} />
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
          <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </FieldFrameWIP>
    </NumberInput.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
);

// import { DatePicker } from "@ark-ui/react/date-picker";

// export const BasicDatePickerExample = () => {
//   return (
//     <Field.Root disabled>
//       <DatePicker.Root>
//         <DatePicker.Label>Label</DatePicker.Label>
//         <DatePicker.Control>
//           <DatePicker.Trigger>
//             <FieldFrameWIP>
//               <div>🔍</div>
//               <DatePicker.Input
//                 style={{
//                   border: "none",
//                   outline: "none",
//                   flex: 1,
//                 }}
//               />
//               {/* <div>📅</div> */}
//             </FieldFrameWIP>
//           </DatePicker.Trigger>
//           <DatePicker.ClearTrigger>❌</DatePicker.ClearTrigger>
//         </DatePicker.Control>
//         <Portal>
//           <DatePicker.Positioner>
//             <DatePicker.Content>
//               <DatePicker.YearSelect />
//               <DatePicker.MonthSelect />
//               <DatePicker.View view="day">
//                 <DatePicker.Context>
//                   {(datePicker) => (
//                     <>
//                       <DatePicker.ViewControl>
//                         <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
//                         <DatePicker.ViewTrigger>
//                           <DatePicker.RangeText />
//                         </DatePicker.ViewTrigger>
//                         <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
//                       </DatePicker.ViewControl>
//                       <DatePicker.Table>
//                         <DatePicker.TableHead>
//                           <DatePicker.TableRow>
//                             {datePicker.weekDays.map((weekDay, id) => (
//                               <DatePicker.TableHeader key={id}>
//                                 {weekDay.short}
//                               </DatePicker.TableHeader>
//                             ))}
//                           </DatePicker.TableRow>
//                         </DatePicker.TableHead>
//                         <DatePicker.TableBody>
//                           {datePicker.weeks.map((week, id) => (
//                             <DatePicker.TableRow key={id}>
//                               {week.map((day, id) => (
//                                 <DatePicker.TableCell key={id} value={day}>
//                                   <DatePicker.TableCellTrigger>
//                                     {day.day}
//                                   </DatePicker.TableCellTrigger>
//                                 </DatePicker.TableCell>
//                               ))}
//                             </DatePicker.TableRow>
//                           ))}
//                         </DatePicker.TableBody>
//                       </DatePicker.Table>
//                     </>
//                   )}
//                 </DatePicker.Context>
//               </DatePicker.View>
//               <DatePicker.View view="month">
//                 <DatePicker.Context>
//                   {(datePicker) => (
//                     <>
//                       <DatePicker.ViewControl>
//                         <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
//                         <DatePicker.ViewTrigger>
//                           <DatePicker.RangeText />
//                         </DatePicker.ViewTrigger>
//                         <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
//                       </DatePicker.ViewControl>
//                       <DatePicker.Table>
//                         <DatePicker.TableBody>
//                           {datePicker
//                             .getMonthsGrid({ columns: 4, format: "short" })
//                             .map((months, id) => (
//                               <DatePicker.TableRow key={id}>
//                                 {months.map((month, id) => (
//                                   <DatePicker.TableCell
//                                     key={id}
//                                     value={month.value}
//                                   >
//                                     <DatePicker.TableCellTrigger>
//                                       {month.label}
//                                     </DatePicker.TableCellTrigger>
//                                   </DatePicker.TableCell>
//                                 ))}
//                               </DatePicker.TableRow>
//                             ))}
//                         </DatePicker.TableBody>
//                       </DatePicker.Table>
//                     </>
//                   )}
//                 </DatePicker.Context>
//               </DatePicker.View>
//               <DatePicker.View view="year">
//                 <DatePicker.Context>
//                   {(datePicker) => (
//                     <>
//                       <DatePicker.ViewControl>
//                         <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
//                         <DatePicker.ViewTrigger>
//                           <DatePicker.RangeText />
//                         </DatePicker.ViewTrigger>
//                         <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
//                       </DatePicker.ViewControl>
//                       <DatePicker.Table>
//                         <DatePicker.TableBody>
//                           {datePicker
//                             .getYearsGrid({ columns: 4 })
//                             .map((years, id) => (
//                               <DatePicker.TableRow key={id}>
//                                 {years.map((year, id) => (
//                                   <DatePicker.TableCell
//                                     key={id}
//                                     value={year.value}
//                                   >
//                                     <DatePicker.TableCellTrigger>
//                                       {year.label}
//                                     </DatePicker.TableCellTrigger>
//                                   </DatePicker.TableCell>
//                                 ))}
//                               </DatePicker.TableRow>
//                             ))}
//                         </DatePicker.TableBody>
//                       </DatePicker.Table>
//                     </>
//                   )}
//                 </DatePicker.Context>
//               </DatePicker.View>
//             </DatePicker.Content>
//           </DatePicker.Positioner>
//         </Portal>
//       </DatePicker.Root>
//     </Field.Root>
//   );
// };
