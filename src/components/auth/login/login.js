import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {  } from "module";
import { login } from "../../../services/authServices";
import { Validation } from "../../../constants";
import "./login.css";

const Login = (pops) => {
  const handleSubmit = async (value) => {
    const data = {
      role: 'patient',
      device_detail: {
          device_type: value.deviceType,
          player_id: value.playerId
      },
      user: {
        email: value.email,
        password: value.password,
      }
    };

    const response = await login({ data });
    if (response && response.success) {
      const token = response.data.user.auth_token;
      localStorage.setItem('jwt', token);
      toast.success(response.message);
      pops.history.push("/dashboard");
    } else {
      toast.error(response.message);
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("email is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        Validation.PASSWORD_REGEX,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
      deviceType: Yup.string().required("device type is required"),
      playerId: Yup.number()
        .typeError("That doesn't look like a player id")
        .required("player id is required"),
  });

  return (
    <div className="login-body">
      <div className="outer">
        <div className="inner">
          <h3>Log in</h3>

          <Formik
            initialValues={{
              email: "",
              password: "",
              deviceType: "",
              playerId: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="email"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="password"
                    component="div"
                  />
                </div>

                
                <div className="form-group">
                  <label>Device type</label>
                  <Field
                    component="select"
                    className="form-control"
                    name="deviceType"
                  >
                    <option value="" label="Select a device type" />
                    <option value="Web" label="Web" />
                    <option value="Ios" label="Ios" />
                    <option value="Android" label="Android" />
                  </Field>

                  <ErrorMessage
                    className="error-class"
                    name="deviceType"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label>Device id</label>
                  <Field
                    type="text"
                    name="playerId"
                    className="form-control"
                    placeholder="Enter player id"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="playerId"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                  go to{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => pops.history.push("/sign-up")}
                  >
                    sign up?
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
