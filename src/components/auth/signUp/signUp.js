import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Sign_Up } from "../../../services/authServices";
import { Validation } from "../../../constants";
import "./signUp.css";

const SignUp = (pops) => {
  const handleSubmit = async (value) => {
    const data = {
      user: {
        email: value.email,
        password: value.password,
        first_name: value.firstName,
        last_name: value.lastName,
        phone: value.phoneNumber,
        role: "patient",
        gender: "male",
      },
      profile: {
        date_of_birth: "01/08/2002, 00:00:00",
      },
      device_detail: {
        device_type: "web",
        player_id: "",
      },
    };

    const response = await Sign_Up({ data });
    if (response && response.success) {
      toast.success(response.message);
      pops.history.push("/login");
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
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    phoneNumber: Yup.string()
      .required("phone number is required")
      .matches(Validation.PHONE_NUMBER_REGEX, "Phone number is not valid"),
    deviceType: Yup.string().required("device type is required"),
    playerId: Yup.number()
      .typeError("That doesn't look like a player id")
      .required("player id is required"),
  });

  return (
    <div className="sign-body">
      <div className="outer">
        <div className="inner">
          <h3>Sign up</h3>

          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              deviceType: "",
              playerId: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ values }) => (
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
                  <label>First name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter user first name"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="firstName"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label>Last name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter user last name"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="lastName"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label>Phone number</label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Enter user last name"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="phoneNumber"
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

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                  go to{" "}
                  <span
                    onClick={() => pops.history.push("/login")}
                    className="cursor-pointer"
                  >
                    login page?
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

export default SignUp;
