import React from "react";
import { Field, ErrorMessage } from "formik";
import TextErr from "./TextErr";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div style={{ width: "40%", marginLeft: "30%", fontSize: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage name={name} component={TextErr} />
    </div>
  );
};

export default Input;
