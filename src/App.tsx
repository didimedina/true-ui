import { Button } from "@formulaic/components/button";
import { ElExampleWithMotion } from "@formulaic/components/element/examples/demo";
import { createStyles, mergeStyles } from "@formulaic/styles";

const divStyles = createStyles({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100vw",
    h: "100vh",
  },
}).raw();

function App() {
  return (
    <>
      <div className={mergeStyles(divStyles, { bg: "base.3" })}>
        <ElExampleWithMotion />
        <Button
          styleVariant={{
            size: "sm",
            color: "violet",
            affordance: "secondary",
            // ghost: true,
            // iconOnly: true,
          }}
          addStyles={{ gap: "8px" }}
        >
          <div
            className={mergeStyles({
              h: "12px",
              w: "12px",
              bg: "colorPalette.1",
              rounded: "full",
            })}
          />
          click me!
        </Button>
      </div>
    </>
  );
}

export default App;
