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
}) => (
  <MuiTextField
    label={label}
    error={touched && error ? error : false}
    {...input}
    {...custom}
  />
);

export const Select = ({ input, meta: { touched, error }, ...custom }) => (
  <MuiSelectField
    error={touched && error ? error : false}
    {...custom}
    {...input}
  />
);
