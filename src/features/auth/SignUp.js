import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box } from "@material-ui/core";
import TextField from "../../components/TextField";
import { AllWidthMainButton } from "../../components/StyledComponents";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SignUp() {
  const usersType = ["recruiter", "professional"];
  const query = useQuery();
  const userType = query.get("as");

  const initialValues = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };
  const Schema = Yup.object({
    email: Yup.string().email().required(),
    newPassword: Yup.string().min(6).max(40).required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
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
        <h1>Sign Up</h1>
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
              <TextField name="newPassword" label="Password" type="password" />
              <TextField
                name="confirmPassword"
                label="Confirm password"
                type="password"
              />
              <AllWidthMainButton
                type="submit"
                style={{ textTransform: "capitalize" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Validating..." : "Sign Up"}
              </AllWidthMainButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default SignUp;
