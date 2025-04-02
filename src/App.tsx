import { AirplaneTakeoff } from "@phosphor-icons/react";
import { Button } from "@true-ui/components/button";
import { Field } from "@true-ui/components/field";
import { createStyles, mergeStyles } from "@true-ui/styles";

const divStyles = createStyles({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // w: "100vw",
    width: "100%",
    w: "full",
    h: "100vh",
    gap: "8px",
    _hover: {
      bg: "base.1",
    },

    _disabled: {
      _hover: {},
    },
  },
  variants: {
    iconOnly: {
      true: {},
    },
    size: {
      sm: {},
      md: {},
    },
  },
  defaultVariants: {
    size: "sm",
  },
  compoundVariants: [
    {
      size: "sm",
      iconOnly: true,
      css: {},
    },
  ],
});

function App() {
  return (
    <>
      <div className={divStyles({ size: "sm" })}>
        <div
          className={mergeStyles({
            display: "flex",
            alignItems: "start",
            gap: "2",
          })}
        >
          <Field.Root invalid styleVariant={{ weight: "outline" }}>
            {/* <Field.Label>Email</Field.Label> */}
            <Field.Frame autoFocus>
              <AirplaneTakeoff size={20} weight="duotone" />
              <Field.Input />
            </Field.Frame>
            {/* <Field.ErrorText>
              Please enter a valid email address
            </Field.ErrorText> */}
            {/* <Field.HelperText>
              Fill this in if you want to live longer
            </Field.HelperText> */}
          </Field.Root>
          <Button styleVariant={{ weight: "subtle" }}>Submit</Button>
        </div>
      </div>
    </>
  );
}

export default App;
