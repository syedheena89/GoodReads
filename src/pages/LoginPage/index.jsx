import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
        (response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          setRequestResponse({
            textMessage: "login success,Thank you",
            alertClass: "alert alert-success",
          });
          navigate("/");
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      );
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should have at least 6 characters"),
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
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        className="form-control"
                        type="password"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              Don't have an account? Register <a href="/registration">Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
