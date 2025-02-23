import { Alert } from "@true-ui/components";
import { Button } from "@true-ui/components/button";
import { ButtonExample } from "@true-ui/components/button/examples";
import { Field } from "@true-ui/components/field";
import { FieldExample } from "@true-ui/components/field/_wip";
import { NumberInputExample } from "@true-ui/components/number-input/_wip";
import { Switch } from "@true-ui/components/switch";
import { BasicSwitchExample } from "@true-ui/components/switch/examples";
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
        <Button
          styleVariant={{ size: "sm", color: "violet" }}
          // addStyles={{ bg: "base.5" }}
        >
          Click me
        </Button>
      </div>
    </>
  );
}

export default App;
