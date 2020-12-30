import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik-controls/FormikControl";
import { Link } from "react-router-dom";
import { addUser } from "../redux/actions/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router";

const AddUser = () => {
  const initialValues = {
    name: "",
    email: "",
    company: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    company: Yup.string().required("Company is required!"),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    dispatch(addUser(values));
    onSubmitProps.resetForm();
    history.push("/");
    // <Redirect to="/" />;
  };

  //   const GoBack = () => {
  //     debugger;
  //     <Redirect to="/" />;
  //   };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div>
            <Form>
              <h1 className="text-center text-info">Add User</h1>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="text"
                label="Company Name"
                name="company"
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginLeft: "30%", marginTop: "2%" }}
                disabled={!formik.isValid}
              >
                Submit
              </button>
              {"  "}
            </Form>
            <Link
              className="btn btn-warning"
              style={{ marginLeft: "35%", marginTop: "-3%" }}
              to="/"
            >
              Back
            </Link>
          </div>
        );
      }}
    </Formik>
  );
};

export default AddUser;
