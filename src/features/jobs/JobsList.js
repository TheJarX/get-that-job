import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Backdrop, CircularProgress } from "@material-ui/core";
import JobCard from "../../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { jobsFetched, isFetchingSet } from "./JobsSlice";

function JobsList() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.job.isFetching);
  const [jobs, setJobs] = useState(useSelector((state) => state.job.jobs));

  useEffect(() => {
    if (!jobs) {
      dispatch(jobsFetched()).then(({ payload: jobs }) => {
        if (!("error" in jobs)) {
          setJobs(jobs);
        }
      });
    }
  }, []);

  if (!isFetching && jobs === []) {
    return (
      <Box width={1} display="flex" justifyContent="center">
        <p>No jobs to show, yet</p>
      </Box>
    );
  }
  if (isFetching && jobs === null)
    return (
      <Backdrop style={{ zIndex: "99" }} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  dispatch(isFetchingSet(true));
  return (
    <Box>
      <h1>Jobs for you</h1>
      <Box>{/* <p>Filters here!</p> */}</Box>
      <Box>{jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}</Box>
    </Box>
  );
}

export default JobsList;
