import { Alert } from "@true-ui/components/alert";
import { Button } from "@true-ui/components/button";
import { EditableButtonField } from "@true-ui/components/_wip/v00";
import {
  BasicDatePickerExample,
  FieldWithSelectExample,
  NumberInputWithFieldExample,
  SelectWithFieldExample,
} from "@true-ui/components/_wip/v02";

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
        {/* <BasicDatePickerExample /> */}
        <SelectWithFieldExample />
        <EditableButtonField />
        <Alert.Root>
          <Alert.Icon></Alert.Icon>
          <Alert.Content>
            <Alert.Title>Browser Update available</Alert.Title>
            <Alert.Description>
              For the best experience, please update your browser.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <NumberInputWithFieldExample />
        <Button
          styleVariant={{
            size: "base",
            affordance: "tertiary",
            color: "red",
          }}
        >
          Submit for Review
        </Button>
      </div>
    </>
  );
}

export default App;
