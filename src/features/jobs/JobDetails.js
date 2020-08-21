import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jobFetched } from "./JobsSlice";
import CompanyCard from "../../components/CompanyCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { Chip, MainButton } from "../../components/StyledComponents";

const JobDetailsContainer = styled(Box)`
  .go-back-link {
    color: #3c2dff;
    display: flex;
    svg {
      margin-right: 12px;
      margin-bottom: 27px;
    }
  }
  padding-bottom: 100px;
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
  const job = useSelector((state) => state.job.selectedJob);

  useEffect(() => {
    dispatch(jobFetched(id));
  }, []);

  if (!isFetching && job === null) return <p>No data</p>;
  if (!job) return <p>Loading...</p>;

  const { company } = job;
  const date = new Date(job.date).toString().slice(4, 10);

  return (
    <JobDetailsContainer display="flex" width={1}>
      <Box width={0.7}>
        <Link to="/jobs">
          <p className="go-back-link">
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
        <MainButton>Get this job</MainButton>
      </Box>

      <Box width={0.3}>
        <CompanyCard company={company} job={job} />
      </Box>
    </JobDetailsContainer>
  );
}

export default JobDetails;
