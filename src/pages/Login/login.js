import { validationSchemaLogin } from "../../Validations/Index";
import { loginUser } from "../../services/AuthSlice/AuthSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { InputComponent } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { ModalError } from "../../components/index";
import { ErrorForm } from "../../components/index";
import React, { useEffect, useState } from "react";
import { LabelForm } from "../../components/index";
import { Formik, Form } from "formik";
import { Input } from "formik-antd";
import "../../assets/output.css";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, isLoading } = useSelector((state) => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(0);

  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async (values) => {
    setLoginAttempt((prev) => prev + 1);
    const result = await dispatch(
      loginUser({ email: values.email, password: values.password })
    );
    if (result.type === "auth/login/fulfilled") {
      navigate(from, { replace: true });
    }
  };

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
  }, [error, loginAttempt]);

  return (
    <>
      <ModalError
        title="Login Error"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={false}
        setIsModalVisible={setIsModalVisible}
      >
        {error}
      </ModalError>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ background: "#F8F8FB" }}
      >
        <div className="w-[631px] h-[423px] rounded-lg bg-white shadow-lg px-12 py-7">
          <h1 className="text-3xl font-bold font-spartan">Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchemaLogin}
            onSubmit={handleLogin}
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
                    {isLoading ? "Loading" : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
