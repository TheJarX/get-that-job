import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Formik, Form } from "formik";
import TextField from "../../components/TextField";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { jobApplied } from "../user/UserSlice";
import { jobFetched } from "./JobsSlice";
import { useSelector, useDispatch } from "react-redux";

const GetJobContainer = styled(Box)`
  .purple {
    color: rgba(60, 45, 255, 0.69);
  }
  input[type="file"] {
    border: none;
  }
`;

function GetJob() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.profileData);
  const [job, setJob] = useState(null);

  useEffect(() => {
    dispatch(jobFetched(id)).then(({ payload: job }) => {
      setJob(job);
    });
  }, []);

  const initialValues = {
    userCv: "",
    professionalExperience: "",
    reasons: "",
  };

  const Schema = Yup.object({
    userCv: Yup.string().required(),
    professionalExperience: Yup.string().min(300).max(2000).required(),
    reasons: Yup.string().min(50).max(1000).required(),
  });

  const isPDF = (document) => {
    if (!document) return;
    return document.name.split(".").slice(-1)[0].toLowerCase() === "pdf";
  };

  const onSubmit = (values, { setFieldError, setStatus }) => {
    const data = new FormData();
    if (!isPDF(values.userCv)) {
      return setFieldError("userCv", "Your CV must be a PDF document");
    }

    for (const [key, value] of Object.entries(values)) {
      data.append(key, value);
    }

    dispatch(jobApplied({ jobId: id, user, data })).then(({ payload }) => {
      console.log(payload);
      if (payload.error) {
        setStatus(payload.error);
      } else {
        history.push("/applications");
      }
    });
  };

  if (!job) return <p>Loading... {JSON.stringify(job)}</p>;
  return (
    <GetJobContainer>
      <Box>
        <h1>
          <span className="purple">Get this Job: </span>
          {job.title}
        </h1>
      </Box>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={onSubmit}
        >
          {({ values, errors, setFieldError, setFieldValue, status }) => (
            <Form>
              <TextField
                label="Upload your cv"
                name="userCv"
                type="file"
                errors={errors}
                value={null}
                onChange={(e) => {
                  const document = e.currentTarget.files[0];
                  if (!isPDF(document)) {
                    setFieldError("userCv", "Your CV must be a PDF document");
                  }
                  setFieldValue("userCv", document, true);
                }}
              />
              <TextField
                label="Professional Experience"
                name="professionalExperience"
              />
              <TextField
                label="Why are you interested in working at Able.co?"
                name="reasons"
              />
              <input type="submit" value="Send" />
              {Object.values(status || {}).map((msg) => (
                <p>{msg}</p>
              ))}
            </Form>
          )}
        </Formik>
      </Box>
    </GetJobContainer>
  );
}

export default GetJob;
