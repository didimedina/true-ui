import { Button } from "@true-ui/components/button";
import { BasicSwitchWithSlotsExample } from "@true-ui/components/switch/examples/switch-example";
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
      <div className={mergeStyles(divStyles, { bg: "base.3" })}>
        {/* <BasicSwitchExample /> */}
        <BasicSwitchWithSlotsExample />
        <Button
          styleVariant={{ size: "md", affordance: "secondary", color: "grass" }}
        >
          Submit for Review
        </Button>
      </div>
    </>
  );
}

export default App;
