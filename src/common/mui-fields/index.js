import React from "react";
import {
  TextField as MuiTextField,
  Select as MuiSelectField
} from "material-ui";

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <MuiTextField label={label} error={!!error} {...input} {...custom} />;

export const Select = ({ input, meta: { touched, error }, ...custom }) => {
  return <MuiSelectField error={!!error} {...custom} {...input} />;
};
