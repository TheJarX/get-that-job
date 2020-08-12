import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box } from "@material-ui/core";
import TextField from "./TextField";
import { AllWidthMainButton } from "./StyledComponents";

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
    >
      <Box mb="25px">
        <h1>Sign In</h1>
        <p>As {usersType.includes(userType) ? userType : usersType[1]}</p>
      </Box>
      <Box maxWidth="250px">
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextField name="email" label="Email" />
              <TextField name="password" label="Password" type="password" />
              <AllWidthMainButton
                disabled={isSubmitting}
                type="submit"
                style={{ textTransform: "capitalize" }}
              >
                {isSubmitting ? "Validating..." : "Sign In"}
              </AllWidthMainButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default SignIn;
