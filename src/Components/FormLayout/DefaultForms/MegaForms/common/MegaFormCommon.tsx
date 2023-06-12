import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

interface propType {
  label: string;
  type: "text" | "email" | "number" | "select" | "textarea";
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  options?: Array<{ value: string; label: string }>; // Add options prop for select type
}

const MegaFormCommon = ({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  options, // Include options prop for select type
}: propType) => {
  return (
    <FormGroup>
      <Label className="col-form-label">{label}</Label>
      {type === "select" ? (
        <Input
          type="select"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        >
          <option value="">{placeholder}</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </Input>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      )}
    </FormGroup>
  );
};

export default MegaFormCommon;
