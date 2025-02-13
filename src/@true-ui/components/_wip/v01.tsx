import { Field, useFieldContext } from "@ark-ui/react/field";
import { Portal } from "@ark-ui/react/portal";
import {
  Select,
  createListCollection,
  type ListCollection,
} from "@ark-ui/react/select";
import { el, type TrueElProps } from "@true-ui/components/element";
import {
  createStyles,
  mergeStyles,
  type StyleVariantProps,
} from "@true-ui/styles";
import { dataAttr } from "@zag-js/dom-query";
import { mergeProps } from "@zag-js/react";
import { forwardRef, useRef, useState } from "react";

const inputStyles = createStyles({
  base: {
    colorPalette: "base",
    _selection: {
      bg: "colorPalette.A4",
    },
    _disabled: {
      opacity: "0.5",
    },
    _invalid: {
      colorPalette: "red",
    },
    w: "full",
    rounded: "4px",
    _focus: {
      ring: "none",
    },
  },
  variants: {
    affordance: {
      primary: {
        color: "colorPalette.12",
        _placeholder: {
          color: "colorPalette.A6",
        },
        /* ...more defined in compound variants section */
      },
      secondary: {
        color: "colorPalette.11",
        _placeholder: {
          color: "colorPalette.A6",
        },
        /* ...more defined in compound variants section */
      },
    },
    size: {
      xs: { height: "16px", px: "4px", fontSize: "xs" },
      sm: { height: "24px", px: "6px", fontSize: "sm" },
      base: { height: "32px", px: "8px", fontSize: "base" },
      lg: { height: "40px", px: "12px", fontSize: "lg" },
      xl: { height: "48px", px: "16px", fontSize: "xl" },
    },
    framed: {
      true: {
        h: "full",
        w: "full",
      },
    },
  },
  compoundVariants: [
    {
      affordance: "primary",
      framed: false,
      css: {
        boxSizing: "border-box",
        backgroundClip: "padding-box",
        border: "1px solid {colors.colorPalette.A5}",
        bg: "base.1",
        _hover: { border: "1px solid {colors.colorPalette.A7}" },
        _focusVisible: {
          border: "1px solid {colors.colorPalette.A9}",
          _hover: { border: "1px solid {colors.colorPalette.A9}" },
        },
      },
    },
    {
      affordance: "secondary",
      framed: false,
      css: {
        bg: "colorPalette.A3",
        _hover: { bg: "colorPalette.A4" },
        _focusVisible: {
          bg: "colorPalette.A4",
        },
      },
    },
  ],
  defaultVariants: {
    framed: false,
    size: "base",
    affordance: "primary",
  },
});

export function FieldExample() {
  return (
    <Field.Root>
      <Field.Input
        className={mergeStyles(
          inputStyles.raw({
            framed: false,
            size: "base",
            affordance: "secondary",
          })
        )}
        placeholder="Enter your name"
      />
      {/* <Field.HelperText>Some additional Info</Field.HelperText> */}
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}

// With Select ------

const frameStyles = createStyles({
  base: {
    colorPalette: "base",
    boxSizing: "border-box",
    backgroundClip: "padding-box",
    h: "32px",
    px: "8px",
    display: "flex",
    alignItems: "center",
    // gap: "6px", // need to bring this back and remove px on input
    border: "1px solid {colors.base.A5}",
    rounded: "4px",
    w: "full",
    maxW: "[400px]",
    bg: "base.1",
    _hover: { border: "1px solid {colors.colorPalette.A7}" },
    _focusWithin: {
      border: "1px solid {colors.colorPalette.A9}",
      _hover: { border: "1px solid {colors.colorPalette.A9}" },
    },
  },
});

type FrameProps = TrueElProps<"div"> & {
  styleVariant?: StyleVariantProps<typeof frameStyles>;
};

export const FieldFrame = forwardRef<HTMLDivElement, FrameProps>(
  (props, ref) => {
    // is there a way to create a new context here and use it for input and text area so they both get data-framed attribute?
    const field = useFieldContext();
    const stateProps = {
      "data-disabled": dataAttr(field.disabled),
      "data-invalid": dataAttr(field.invalid),
      "data-readonly": dataAttr(field.readOnly),
      "data-required": dataAttr(field.required),
    };
    // @ts-expect-error
    // need to figure out why it's throwing an error here, everyhting seems to be working regardless
    const mergedProps = mergeProps(stateProps, props);

    return (
      <el.div
        {...mergedProps}
        ref={ref}
        data-part="frame"
        data-scope="field"
        onClick={(e) => {
          // Prevent focusing if clicking on the input itself
          if (e.target === e.currentTarget) {
            e.currentTarget.querySelector("input")?.focus();
          }
        }}
        className={mergeStyles(frameStyles.raw())}
      />
    );
  }
);

FieldFrame.displayName = "FieldFrame";

// select needs to wrap field.
// you do see to need to wire up the states
// haven't figured out typeahead yet...
export function FieldWithSelectExample() {
  const [value, setValue] = useState<string>("");
  const collection = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Solid", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte", disabled: true },
    ],
  });
  return (
    <div
      className={mergeStyles({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      })}
    >
      <Select.Root
        collection={collection}
        onValueChange={(e) => {
          console.log(e.value?.toString());
          setValue(e.value?.toString());
        }}
        multiple
      >
        <Select.Control>
          <Select.Trigger>
            <Field.Root>
              <FieldFrame>
                <el.span
                  data-part="icon"
                  className={mergeStyles({ pointerEvents: "none" })}
                >
                  Frameworks
                </el.span>

                <Field.Input
                  placeholder="Enter your name"
                  value={value}
                  className={mergeStyles(inputStyles.raw({ framed: true }))}
                  onChange={(e) => setValue(e.target.value)}
                />

                <el.div
                  data-part="icon-group"
                  className={mergeStyles({
                    w: "fir",
                    h: "fit",
                    gap: "4px",
                    display: "flex",
                  })}
                >
                  <el.span
                    data-part="icon"
                    className={mergeStyles({
                      w: "12px",
                      h: "12px",
                      bg: "violet.6",
                      rounded: "4px",
                    })}
                  />
                  <el.span
                    data-part="icon"
                    className={mergeStyles({
                      w: "12px",
                      h: "12px",
                      bg: "orange.6",
                      rounded: "4px",
                    })}
                  />
                </el.div>

                <el.span
                  data-part="icon"
                  className={mergeStyles({ pointerEvents: "none" })}
                >
                  ↓
                </el.span>
              </FieldFrame>
            </Field.Root>
            {/* <Select.ValueText placeholder="Select a framework" /> */}
            {/* <Select.Indicator>↓</Select.Indicator> */}
          </Select.Trigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Select.Item key={item.value} item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </div>
  );
}

export const FieldWithSelectExample2 = (props: Field.RootProps) => {
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <Field.Root {...props}>
      <Select.Root collection={collection}>
        {/* <Select.Label>Label</Select.Label> */}
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText
              placeholder="Select a Framework"
              className={mergeStyles(
                inputStyles.raw({ affordance: "secondary", size: "xs" }),
                { display: "flex", alignItems: "center" }
              )}
            ></Select.ValueText>
            <Select.Indicator>↓</Select.Indicator>
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
        <Select.HiddenSelect />
      </Select.Root>
      {/* <Field.HelperText>Additional Info</Field.HelperText> */}
      {/* <Field.ErrorText>Error Info</Field.ErrorText> */}
    </Field.Root>
  );
};

function filterListCollection<T>(
  collection: ListCollection<T>,
  searchQuery: string
): T[] {
  if (!searchQuery) return collection.items;
  return collection.items.filter((item) => {
    const itemString = collection.stringifyItem(item);
    return itemString?.toLowerCase().includes(searchQuery.toLowerCase());
  });
}

export const SearchableSelect = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte", "Angular", "Preact"],
  });

  const filteredItems = filterListCollection(collection, searchQuery);

  return (
    <Select.Root
      collection={collection}
      // onOpenChange={({ open }) => setIsOpen(open)}
      onOpenChange={({ open }) => {
        setIsOpen(open);
        if (open) {
          requestAnimationFrame(() => {
            inputRef.current?.focus();
          });
        }
      }}
      onValueChange={() => setSearchQuery("")}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          {isOpen ? (
            <input
              ref={inputRef}
              placeholder="Search frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              // onKeyDown={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                // Only stop propagation for non-navigation keys
                if (e.key !== "ArrowDown" && e.key !== "ArrowUp") {
                  e.stopPropagation();
                }
              }}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                background: "transparent",
              }}
            />
          ) : (
            <Select.ValueText placeholder="Select a Framework" />
          )}
          <Select.Indicator>↓</Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {filteredItems.length === 0 ? (
                <div style={{ padding: "8px", color: "#666" }}>
                  No results found
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))
              )}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
