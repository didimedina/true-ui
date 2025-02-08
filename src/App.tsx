import { Button } from "@true-ui/components/button";
import {
  FieldWithSelectExample,
  FieldWithSelectExample2,
} from "@true-ui/components/field/_wip/v01";

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
  return (
    <>
      <div className={mergeStyles(divStyles, { bg: "base.1" })}>
        {/* <BasicSwitchWithSlotsExample /> */}
        {/* <FieldWithSelectExample /> */}
        <FieldWithSelectExample2 />
        <Button
          styleVariant={{ size: "md", affordance: "tertiary", color: "base" }}
        >
          Submit for Review
        </Button>
      </div>
    </>
  );
}

export default App;
