import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jobFetched } from "./JobsSlice";
import CompanyCard from "../../components/CompanyCard";

function JobDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.job.isFetching);
  const job = useSelector((state) => state.job.selectedJob);

  useEffect(() => {
    dispatch(jobFetched(id));
  }, []);

  if (!isFetching && job === null) return <p>No data</p>;
  if (!job) return <p>Loading...</p>;

  const { company } = job;
  return (
    <Box display="flex" width={1}>
      <Box width={0.7}>
        <p>{id}</p>
        <h1>Hey there!</h1>
      </Box>

      <Box width={0.3}>
        <CompanyCard company={company} job={job} />
      </Box>
    </Box>
  );
}

export default JobDetails;
