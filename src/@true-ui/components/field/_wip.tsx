import { Field } from "@ark-ui/react";
import { Airplay } from "@phosphor-icons/react";
import { Field as TrueField } from "@true-ui/components";
import { createStyles } from "@true-ui/styles";

const rootStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

const labelStyles = createStyles({
  base: {
    color: "base.11",
    textStyle: "base",
    _disabled: {
      color: "base.11/50",
    },
  },
});

const inputStyles = createStyles({
  base: {
    ring: "0",
    flex: "1",
    appearance: "none",
    w: "full",
    _selection: {
      bg: "colorPalette.A4",
    },
  },
});

const helperTextStyles = createStyles({
  base: {
    color: "base.7",
    textStyle: "sm",
    _disabled: {
      color: "base.7/50",
    },
  },
});

const errorTextStyles = createStyles({
  base: {
    alignItems: "center",
    fontSize: "sm",
    lineHeight: "none",
    color: "red.9",
    display: "inline-flex",
    gap: "2",
    _disabled: {
      color: "red.9/50",
    },
  },
});

export type FieldExampleProps = Field.RootProps;
export const FieldExample = (props: FieldExampleProps) => {
  return (
    <Field.Root className={rootStyles()} {...props}>
      {/* <Field.Label className={labelStyles()}>Email</Field.Label> */}
      <TrueField.Frame styleVariant={{ weight: "outline" }} autoFocus>
        <Airplay size={20} />
        <Field.Input className={inputStyles()} autoComplete="off" />
      </TrueField.Frame>
      {/* <Field.ErrorText className={errorTextStyles()}>
        Please enter a valid email address
      </Field.ErrorText> */}
      {/* <Field.HelperText className={helperTextStyles()}>
        Fill this in if you want to live longer
      </Field.HelperText> */}
    </Field.Root>
  );
};
