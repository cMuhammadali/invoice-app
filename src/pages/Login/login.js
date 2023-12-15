import { FormItem, Input, Loader } from "../../components/index";
import { validationSchemaLogin } from "../../validations/Index";
import { loginUser } from "../../services/AuthSlice/AuthSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalError } from "../../components/index";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import "../../assets/output.css";
import "./Login.css";

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
          <h1 className="text-4xl font-bold font-spartan">Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchemaLogin}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form layout="vertical" className="relative">
                <div className="mt-5">
                  <FormItem label="Email" name="email">
                    <Input
                      className={`font-spartan text-lg ${
                        touched.email &&
                        errors.email &&
                        `border-1 border-textRed600`
                      }`}
                      placeholder="user@gmail.com"
                      name="email"
                    />
                  </FormItem>
                </div>
                <div className="mt-10">
                  <FormItem label="Password" name="password">
                    <Input
                      type="password"
                      className={`font-bold font-spartan text-lg ${
                        touched.password &&
                        errors.password &&
                        `border-1 border-textRed600`
                      }`}
                      placeholder="****"
                      name="password"
                    />
                  </FormItem>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-full text-white font-spartan text-lg login-button"
                  >
                    {isLoading ? <Loader /> : "Login"}
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
