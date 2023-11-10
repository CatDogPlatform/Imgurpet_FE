import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import loginApi from "./../../utils/loginAPI";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .min(3, "Email must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await loginApi.login({
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("userInfor", JSON.stringify(response.data));
        setAuth({
          user: response.data,
          accessToken: response.access_token,
        });
        if (response.data.role === "MEMBER") {
          navigate("/");
        }
        if (response.data.role === "STAFF") {
          navigate("/");
        }
        if (response.data.role === "ADMIN") {
          navigate("/stafflist");
        }

        toast.success(response.message);
      } catch (error) {
        if (error.response) {
          toast.error("Account or password is wrong, please check again!");
        } else {
          toast.error(
            "Login failed, please check your username or password again!"
          );
        }
      }
    },
  });

  return (
    <Box
      className="login_container"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="2px solid grey"
        borderRadius="10px"
        boxShadow="5px 10px 8px #888888"
      >
        <h3>Sign in</h3>
        <form
          noValidate
          style={{ marginTop: 1 }}
          onSubmit={formik.handleSubmit}
        >
          <FormControl
            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.touched.password && Boolean(formik.errors.password)
            }
            mt={4}
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <br />

          <div className="display__button">
            <Button className="button-type2" type="submit">
              <span className="btn-txt2">SIGN IN</span>
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
