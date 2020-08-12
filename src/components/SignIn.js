import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box } from "@material-ui/core";
import TextField from "./TextField";
import { MainButton } from "./StyledComponents";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SignIn() {
  const usersType = ["recruiter", "professional"];
  const query = useQuery();
  const userType = query.get("as");

  const initialValues = {
    email: "",
    password: "",
  };
  const Schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(40).required(),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Box>
        <h1>Sign In</h1>
        <p>As {usersType.includes(userType) ? userType : usersType[1]}</p>
      </Box>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={onSubmit}
        >
          <Form>
            <TextField name="email" label="Email" />
            <TextField name="password" label="Password" type="password" />
            <MainButton type="submit" style={{ textTransform: "capitalize" }}>
              Sign In
            </MainButton>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}

export default SignIn;
