import React, { useState } from "react";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
const RegistrationPage = () => {
  //const navigate = useNavigate();
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };
  //handle form submit
  const onSubmit = (values) => {
    //console.log(values);
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          console.log(response);
          setRequestResponse({
            textMessage: response.data.message,
            alertClass: "alert alert-success",
          });
          // navigate("/profile", {
          //   state: { email: values.email, firstName: values.firstName },
          // });
        },
        (error) => {
          console.log(error);
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    mobile: Yup.number("mobile number should be number").required(
      "mobile number is required"
    ),

    password: Yup.string()
      .required("password cannot be empty")
      .min(6, "password cannot be less than six characters"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validationOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <div className={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2 className="text-center">Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.firstName && formik.touched.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.mobile && formik.touched.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                onClick={formik.onsubmit}
                disabled={!formik.isValid}
                className="submit btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              Already have an account?<a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
