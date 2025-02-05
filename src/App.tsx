import { Button } from "@true-ui/components/button";
import {
  EditableButtonField,
  FieldExample,
} from "@true-ui/components/field/examples";
import { BasicSwitchWithSlotsExample } from "@true-ui/components/switch/examples";
import { createStyles, mergeStyles } from "@true-ui/styles";
// import { transformAddStylesProp } from "@true-ui/styles/utils";
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
  //   const testContent = `
  //   <Button
  //     addStyles={{ bg: "pink", _hover: { bg: "blue" }}, css.raw({ bg: "blue"})}
  //     other="props"
  //   />
  // `;

  //   console.log(transformAddStylesProp(testContent));
  return (
    <>
      <div className={mergeStyles(divStyles, { bg: "base.3" })}>
        {/* <BasicSwitchExample /> */}
        <BasicSwitchWithSlotsExample />
        <EditableButtonField />
        <FieldExample />
        <Button
          styleVariant={{ size: "md", affordance: "secondary", color: "base" }}
        >
          Submit for Review
        </Button>
      </div>
    </>
  );
}

export default App;
