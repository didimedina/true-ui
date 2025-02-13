import { el } from "@true-ui/components/element/index[dep]";
import { createStyles } from "@true-ui/styles";
import { useState } from "react";

const switchContainerStyles = createStyles({
  base: {
    width: "80px",
    height: "40px",
    backgroundColor: "colorPalette.5",
    borderRadius: 50,
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    padding: "4px",
  },
  variants: {
    state: {
      on: {
        colorPalette: "indigo",
        justifyContent: "flex-end",
      },
      off: {
        colorPalette: "base",
        justifyContent: "flex-start",
      },
    },
  },
});

const switchHandleStyles = createStyles({
  base: {
    // width: 50,
    aspectRatio: "1/1",
    height: "full",
    backgroundColor: "colorPalette.9",
    borderRadius: "50%",
  },
});

export function ElExampleWithMotion() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <el.span
      className={switchContainerStyles({ state: isOn ? "on" : "off" })}
      onClick={toggleSwitch}
    >
      <el.div
        className={switchHandleStyles()}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </el.span>
  );
}
