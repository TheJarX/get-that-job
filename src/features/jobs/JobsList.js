import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Backdrop, CircularProgress } from "@material-ui/core";
import JobCard from "../../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { jobsFetched, isFetchingSet } from "./JobsSlice";

function JobsList() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.job.isFetching);
  const jobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    dispatch(jobsFetched());
  }, []);

  const job = {
    title: "Software Engineer",
    company: {
      name: "Able",
      logoUrl:
        "https://media-exp1.licdn.com/dms/image/C560BAQH3yl67w-0w5Q/company-logo_200_200/0?e=2159024400&v=beta&t=deDlwPhllNSAjfGooe3lDx72DxC7ZvDZsnBn-ULzpLo",
    },
    location: "Lima",
    jobType: "Full Time",
    seniority: "Junior",
    date: "2020-08-18T10:30:56.273Z",
  };

  if (!isFetching && jobs === null) {
    dispatch(isFetchingSet(true));
    return (
      <Box width={1} display="flex" justifyContent="center">
        <p>No jobs to show, yet</p>
      </Box>
    );
  }

  return (
    <Box>
      <Backdrop style={{ zIndex: "99" }} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Jobs for you</h1>
      <Box>{/* <p>Filters here!</p> */}</Box>
      <Box>
        {/* <JobCard job={job} /> */}
        {jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </Box>
    </Box>
  );
}

export default JobsList;
