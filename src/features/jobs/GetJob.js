import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import TextField from "../../components/TextField";
import * as Yup from "yup";

const GetJobContainer = styled(Box)`
  .purple {
    color: rgba(60, 45, 255, 0.69);
  }
  input[type="file"] {
    border: none;
  }
`;

function GetJob() {
  const job = { id: 2, title: "Software engineer" };
  const { id, title } = job;
  const [file, setFile] = useState(null);
  const initialValues = {
    file: null,
    professionalExperience: "",
    reasons: "",
  };
  const Schema = Yup.object({
    file: Yup.mixed().required(),
    professionalExperience: Yup.string().min(300).max(2000).required(),
    reasons: Yup.string().min(50).max(1000).required(),
  });

  const loadFile = (file) => {
    let reader = new FileReader();

    reader.onload = () => {
      setFile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (values, actions) => {
    console.log({ ...values, file });
  };

  return (
    <GetJobContainer>
      <Box>
        <h1>
          <span className="purple">Get this Job: </span>
          {title}
        </h1>
      </Box>
      <Box>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <section>
                <TextField
                  label="Upload your cv"
                  name="file"
                  type="file"
                  onChange={(e) => loadFile(e.currentTarget.files[0])}
                />
              </section>
              <input type="submit" value="Send" />
            </Form>
          )}
        </Formik>
      </Box>
      <Box>{file && <img src={file} />}</Box>
    </GetJobContainer>
  );
}

export default GetJob;
