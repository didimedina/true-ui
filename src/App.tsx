import { Alert } from "@true-ui/components/alert";
import { Button } from "@true-ui/components/button";
import { Field } from "@true-ui/components/field";
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
        <Alert.Root>
          {/* <Alert.Icon/> */}
          <Alert.Content>
            <Alert.Title>Browser Update available</Alert.Title>
            <Alert.Description>
              For the best experience, please update your browser.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <Button
          styleVariant={{
            size: "base",
            weight: "outline",
            color: "jade",
          }}
        >
          Submit for Review
        </Button>
        <Field.Root>
          <Field.Frame>
            <input type="text" />
          </Field.Frame>
        </Field.Root>
      </div>
    </>
  );
}

export default App;
