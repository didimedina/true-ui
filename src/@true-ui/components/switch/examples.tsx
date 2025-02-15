import { Switch } from "@ark-ui/react/switch";
import { createStyles } from "@true-ui/styles";
import { useState } from "react";

// Without createSlotStyles()
const switchControlStyles = createStyles({
  base: {
    display: "flex",
    alignItems: "center",
    w: "42px",
    h: "24px",
    rounded: "full",
    p: "1px",
    cursor: "pointer",
  },
  variants: {
    state: {
      on: {
        justifyContent: "end",
        bg: "colorPalette.9",
        colorPalette: "grass",
      },
      off: {
        justifyContent: "start",
        bg: "colorPalette.5",
        colorPalette: "base",
      },
    },
  },
});

const switchThumbStyles = createStyles({
  base: {
    bg: "colorPalette.2",
    h: "full",
    aspectRatio: "1/1",
    rounded: "full",
    boxSizing: "border-box",
    bgClip: "padding-box",
    borderColor: "base.A3",
    borderWidth: "1px",
    borderStyle: "solid",
    shadow: "0 1px 2px 0 {colors.base.A3}",
    _active: {
      scale: "0.9",
    },
  },
});

export function BasicSwitchExample() {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.Control
        className={switchControlStyles({ state: checked ? "on" : "off" })}
      >
        <Switch.Thumb className={switchThumbStyles()} />
      </Switch.Control>
      {/* <Switch.Label>Label</Switch.Label> */}
      <Switch.HiddenInput />
    </Switch.Root>
  );
}

// With createSlotStyles()
const switchStyles = createSlotStyles({
  slots: ["control", "thumb"],
  base: {
    control: {
      display: "flex",
      alignItems: "center",
      p: "1px",
      cursor: "pointer",
    },
    thumb: {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      bg: "base.1",
      h: "full",
      borderColor: "base.A3",
      border: "1px solid",
      shadow: "0 1px 2px 0 {colors.base.A3}",
      _hover: {
        bg: "base.2",
        borderColor: "base.A5",
        boxSizing: "border-box",
        backgroundClip: "padding-box",
      },
      _active: {
        scale: "0.9",
      },
    },
  },
  variants: {
    size: {
      md: {
        control: {
          h: "24px",
          w: "calc(24px * 1.5)",
        },
      }, // 24px
      sm: {
        control: {
          h: "20px",
          w: "calc(20px * 1.5)",
        },
      }, // 20px
      xs: {
        control: {
          h: "16px",
          w: "calc(16px * 1.5)",
        },
      }, // 16px
    },
    state: {
      on: {
        control: {
          bg: "colorPalette.9",
          justifyContent: "end",
        },
      },
      off: {
        control: {
          bg: "base.7",
          justifyContent: "start",
        },
      },
    },
    color: {
      grass: {
        control: {
          colorPalette: "grass",
        },
      },
      violet: {
        control: {
          colorPalette: "violet",
        },
      },
    },
    shape: {
      pill: {
        control: {
          rounded: "full",
        },
        thumb: {
          rounded: "full",
          aspectRatio: "1/1",
        },
      },
      box: {
        control: {
          rounded: "4px",
        },
        thumb: {
          rounded: "3px",
          aspectRatio: "4/5",
        },
      },
    },
  },
});

export function BasicSwitchWithSlotsExample() {
  const [checked, setChecked] = useState(false);
  //   console.log(checked);

  const slotStyles = switchStyles({
    state: checked ? "on" : "off",
    size: "xs",
    color: "grass",
    shape: "box",
  });

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.Control className={slotStyles.control}>
        <Switch.Thumb className={slotStyles.thumb} />
      </Switch.Control>
      {/* <Switch.Label>Label</Switch.Label> */}
      <Switch.HiddenInput />
    </Switch.Root>
  );
}
