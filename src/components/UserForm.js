import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik-controls/FormikControl";
import { Link, useParams } from "react-router-dom";
import { addUser, updateUser } from "../redux/actions/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../redux/sagas/userSaga";
import axios from "axios";

// import { Redirect } from "react-router";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    company: "",
  };

  const { id } = useParams();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    company: Yup.string().required("Company is required!"),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    if (user) {
      console.log(values);
      values["id"] = id;
      dispatch(updateUser(values));
    } else {
      dispatch(addUser(values));
    }
    onSubmitProps.resetForm();
    history.push("/");
    if (user) {
      alert("data updated successfully!");
    } else {
      alert("data added successfully!");
    }
    // <Redirect to="/" />;
  };

  //   const GoBack = () => {
  //     debugger;
  //     <Redirect to="/" />;
  //   };

  useEffect(() => {
    axios
      .get(apiUrl + `users/${id}.json`)
      .then((res) => {
        setUser(res.data);
      })
      .then((err) => console.log(err));
  }, []);

  console.log(user, "asf");

  return (
    <Formik
      initialValues={user || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <div>
            {/* <h4>{id ? id : null}</h4> */}
            <Form>
              <h1 className="text-center text-info">
                {user ? "Update" : "Add"} User
              </h1>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
                // value={user ? user.name : ""}
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                // value={user ? user.email : ""}
              />
              <FormikControl
                control="input"
                type="text"
                label="Company Name"
                name="company"
                // value={user ? user.company : ""}
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginLeft: "30%", marginTop: "2%" }}
                disabled={!formik.isValid}
              >
                {user ? "Update" : "Add"}
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
