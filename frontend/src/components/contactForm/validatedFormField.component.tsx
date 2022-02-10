import { TextField } from "@mui/material";
import React from "react";

interface ContactFormProps {
  validationMethod?: Function;
  defaultValue: string;
  handleChangeValue: Function;
  helperText: string;
  label: string;
  required?: boolean;
}

export default function ValidatedFormField({
  validationMethod,
  defaultValue,
  handleChangeValue,
  helperText,
  label,
  required,
}: ContactFormProps) {
  const [isValid, setIsValid] = React.useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const valid = validationMethod ? validationMethod(value) : true;

    setIsValid(valid);
    handleChangeValue(value);
  };

  return (
    <TextField
      error={!isValid}
      helperText={!isValid ? helperText : null}
      defaultValue={defaultValue}
      autoFocus
      margin="dense"
      id="Name"
      label={label}
      type="text"
      fullWidth
      required={required}
      variant="standard"
      onChange={onChangeHandler}
    />
  );
}
