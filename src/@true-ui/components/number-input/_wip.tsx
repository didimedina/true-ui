import { Field, NumberInput } from "@ark-ui/react";
import { Bank } from "@phosphor-icons/react";
import { Field as TrueField } from "@true-ui/components";
import { createStyles } from "@true-ui/styles";

const rootStyles = createStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
  },
});

const controlStyles = createStyles({
  base: {
    display: "flex",
    // bg: "colorPalette.A3",
    // my: "2px",
    gap: "2px",
    flexDirection: "column",
    w: "16px",
    // h: "fill",
    h: "calc(100% - 4px)",
    // h: "auto",
    overflow: "hidden",
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

const labelStyles = createStyles({
  base: {
    color: "base.11",
    // fontWeight: "medium",
    textStyle: "base",
  },
});

const triggerStyles = createStyles({
  base: {
    alignItems: "center",
    bg: "colorPalette.A3",
    color: "colorPalette.A7",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    w: "full",
    h: "full",
    rounded: "2px",
    "& :where(svg)": {
      width: "12px",
      height: "auto",
      // 🚧 icons aren't sizing to available space when using relative falues like 100%
    },
    _hover: {
      background: "colorPalette.A4",
      color: "colorPalette.A8",
    },
    _disabled: {
      color: "colorPalette.A5",
      cursor: "not-allowed",
      _hover: {
        background: "transparent",
        color: "colorPalette.A5",
      },
    },
  },
});

export type NumberInputExampleProps = NumberInput.RootProps;
export const NumberInputExample = (props: NumberInputExampleProps) => {
  return (
    <Field.Root>
      <NumberInput.Root
        className={rootStyles()}
        // allowMouseWheel
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
        step={0.1}
        {...props}
      >
        <NumberInput.Label className={labelStyles()}>Label</NumberInput.Label>
        <TrueField.Frame
          styleVariant={{ weight: "outline" }}
          addStyles={{ pr: "2px" }}
          autoFocus
        >
          <Bank size={20} weight="duotone" />
          <NumberInput.Input className={inputStyles()} />
          <NumberInput.Control className={controlStyles()}>
            <NumberInput.IncrementTrigger className={triggerStyles()}>
              <ChevronUpIcon />
            </NumberInput.IncrementTrigger>
            <NumberInput.DecrementTrigger className={triggerStyles()}>
              <ChevronDownIcon />
            </NumberInput.DecrementTrigger>
          </NumberInput.Control>
        </TrueField.Frame>
      </NumberInput.Root>
    </Field.Root>
  );
};

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Up Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Down Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
);
