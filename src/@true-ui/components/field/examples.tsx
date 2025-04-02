import { Airplay } from "@phosphor-icons/react";
import { el, Field } from "@true-ui/components";

export type FieldExampleProps = Field.RootProps;
export const FieldExample = (props: FieldExampleProps) => {
  return (
    <Field.Root styleVariant={{ weight: "outline" }} {...props}>
      <Field.Label>Email</Field.Label>
      <Field.Frame autoFocus>
        <Airplay size={20} />
        {/* <Field.Select autoComplete="off" addStyles={{ width: "200px" }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Field.Select> */}
        {/* <Field.Input addStyles={{ width: "200px" }} /> */}
        <Field.Input />
      </Field.Frame>
      <Field.ErrorText>Please enter a valid email address</Field.ErrorText>
      <Field.HelperText>
        Fill this in if you want to live longer
      </Field.HelperText>
    </Field.Root>
  );
};

export const FieldExample2 = () => {
  return (
    <el.div
      data-part="frame"
      addStyles={{
        display: "grid",
        gap: "4px",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "32px auto",
        border: "1px solid",
        borderColor: "base.5",
        alignItems: "center",
        "& > *:not([data-part='textarea'])": {
          gridRowStart: "1",
          gridRowEnd: "2",
        },
      }}
    >
      <el.div addStyles={{ display: "flex", gap: "4px" }}>
        <el.div
          data-part="icon"
          addStyles={{ h: "20px", w: "20px", bg: "base.7" }}
        />
        <el.div
          data-part="icon"
          addStyles={{ h: "20px", w: "20px", bg: "base.7" }}
        />
      </el.div>
      <el.div
        data-part="textarea"
        addStyles={{
          h: "32px",
          w: "200px",
          bg: "base.7",
          gridRowStart: "2",
          gridRowEnd: "3",
          //   gridColumn: "1 / -1",
        }}
      />
    </el.div>
  );
};
