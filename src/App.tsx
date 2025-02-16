import { Alert } from "@true-ui/components/alert";
import { Button } from "@true-ui/components/button";
import { ButtonExample } from "@true-ui/components/button/examples";
import { Field } from "@true-ui/components/field";
import { Switch } from "@true-ui/components/switch";
import { BasicSwitchExample } from "@true-ui/components/switch/examples";
import { createStyles, mergeStyles } from "@true-ui/styles";


const divStyles = createStyles({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100vw",
    h: "100vh",
    gap: "8px",
  },
}).raw();

function App() {
  return (
    <>
      <div className={mergeStyles(divStyles, { bg: "base.1" })}>
        <BasicSwitchExample styleVariant={{ size: "xs", color: "base" }} />
        <BasicSwitchExample styleVariant={{ size: "sm", color: "grass" }} />
        <BasicSwitchExample styleVariant={{ size: "base", color: "violet" }} />
        <ButtonExample
          styleVariant={{ size: "xs", color: "base", weight: "solid" }}
        >
          Button
        </ButtonExample>
        <ButtonExample
          styleVariant={{ size: "base", color: "base", weight: "subtle" }}
        >
          Button
        </ButtonExample>
        <ButtonExample
          styleVariant={{ size: "xl", color: "pink", weight: "outline" }}
        >
          Button
        </ButtonExample>
        <ButtonExample
          styleVariant={{ size: "sm", color: "violet", weight: "inline" }}
        >
          Button
        </ButtonExample>
      </div>
    </>
  );
}

export default App;
