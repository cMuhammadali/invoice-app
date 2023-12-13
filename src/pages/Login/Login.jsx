import ErrorForm from "../../components/ErrorForm/ErrorForm";
import { InputComponent } from "../../components/index";
import { Formik, Form } from "formik";
import { Input } from "formik-antd";
import "../../assets/output.css";
import * as Yup from "yup";
import React from "react";
import "./Login.css";
import LabelForm from "../../components/LabelComponent/LabelForm";

function Login() {
  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Can't be empty"),
    password: Yup.string()
      .min(3, "Password must contain 3 characters")
      .max(15, "Password must be at most 15 characters")
      .required("Can't be empty"),
  });

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ background: "#F8F8FB" }}
    >
      <div className="w-[631px] h-[423px] rounded-lg bg-white shadow-lg p-12">
        <h1 className="text-3xl font-bold font-spartan">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchemaLogin}
          onSubmit={(values) => {
            console.log("values =>", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <Form layout="vertical" className="relative">
              <div className="mt-8">
                <LabelForm className="text-ink">Email</LabelForm>
                <InputComponent
                  className={`font-bold font-spartan mt-1 ${
                    touched.email &&
                    errors.email &&
                    `border-1 border-textRed600`
                  }`}
                  placeholder="user@gmail.com"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <ErrorForm
                touched={touched.email}
                errors={errors.email}
                className="absolute text-textRed600 text-sm font-medium"
              />
              <div className="mt-10">
                <LabelForm className="text-ink">Password</LabelForm>
                <Input.Password
                  className={`font-bold font-spartan mt-1 ${
                    touched.password &&
                    errors.password &&
                    `border-1 border-textRed600`
                  }`}
                  placeholder="****"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorForm
                  touched={touched.password}
                  errors={errors.password}
                  className="absolute text-textRed600 text-sm font-medium"
                />
              </div>
              <div className="flex justify-end mt-8">
                <button
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-spartan font-bold login-button"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
