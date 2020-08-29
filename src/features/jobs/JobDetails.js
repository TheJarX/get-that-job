import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jobFetched, isFetchingSet } from "./JobsSlice";
import CompanyCard from "../../components/CompanyCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { Chip, MainButton } from "../../components/StyledComponents";

const JobDetailsContainer = styled(Box)`
  .go-back-link {
    display: inline-block;
    p {
      display: flex;
      color: #3c2dff;
      svg {
        margin-right: 12px;
        margin-bottom: 27px;
      }
    }
  }
  padding-bottom: 100px;
  section h2 {
    margin-bottom: 12px;
  }
`;

const Section = styled.section`
  &.introduction {
    margin: 25px 0;
  }
  margin-bottom: 20px;
`;

function JobDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.job.isFetching);
  const [job, setJob] = useState(useSelector((state) => state.job.selectedJob));

  useEffect(() => {
    dispatch(jobFetched(id)).then(({ payload: job }) => {
      setJob(job);
    });
  }, []);

  if (isFetching && !job) return <p>Loading...</p>;
  if (!isFetching && !job) return <p>No data</p>;

  const { company } = job;
  const date = new Date(job.date).toString().slice(4, 10);

  dispatch(isFetchingSet(true));
  return (
    <JobDetailsContainer display="flex" width={1}>
      <Box width={0.6}>
        <Link to="/jobs" className="go-back-link">
          <p>
            <ArrowBackIcon />
            See more jobs
          </p>
        </Link>
        <p>Posted {date}</p>
        <h1 className="job-title">{job.title}</h1>
        <Box mt="10px">
          <Chip text={job.jobType} />
          <Chip text={job.seniority} />
        </Box>
        <Section className="introduction">
          <p>{job.introduction}</p>
        </Section>
        <Section>
          <h2>What will be expected of you:</h2>
          <p>{job.fromCandidate}</p>
        </Section>
        <Section>
          <h2>What we are looking for:</h2>
          <p>{job.candidateProfile}</p>
        </Section>
        <Section>
          <h2>Job requirements:</h2>
          <p>{job.jobRequirements}</p>
        </Section>
        <Section>
          <h2>About {company.name}:</h2>
          <p>{company.description}</p>
        </Section>
        <Link to={`/jobs/${id}/apply`}>
          <MainButton>Get this job</MainButton>
        </Link>
      </Box>
      <Box width={0.1}></Box>
      <Box width={0.3}>
        <CompanyCard company={company} job={job} />
      </Box>
    </JobDetailsContainer>
  );
}

export default JobDetails;
