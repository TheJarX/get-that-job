import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styled from "styled-components";
import { MainButton } from "./StyledComponents";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const CompanyCardContainer = styled(Box)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .company-website {
    text-decoration: underline;
  }
  .company-name {
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    color: #000000;
    margin-bottom: 12px;
  }
  .all-jobs-link {
    a {
      display: inline-block;
    }
  }
  p {
    display: flex;
    justify-content: center;
  }
`;

function CompanyCard({ company, job }) {
  const { location } = job;
  const { id, name, website, logoUrl, jobsPosted } = company;
  return (
    <CompanyCardContainer
      bgcolor="#fff"
      display="flex"
      flexDirection="column"
      maxWidth="250px"
      padding="32px"
      textAlign="center"
    >
      <Box>
        <img src={logoUrl} alt="" width="50px" height="50px" />
        <p className="company-name">{name}</p>
      </Box>
      <Box marginBottom="16px">
        <p className="company-website">
          <OpenInNewIcon fontSize="small" />
          <a href={website} target="_blank">
            Open Website
          </a>
        </p>
        <p>
          <LocationOnIcon fontSize="small" />
          {location}
        </p>
        <p>Posted {jobsPosted} job(s)</p>
        <Box mt="40px">
          <Link to={`/jobs/${job.id}/apply`}>
            <MainButton>Get this job</MainButton>
          </Link>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box mt="16px" className="all-jobs-link">
        <Link to={`/companies/${id}/jobs`}>
          <p>
            View all jobs <ChevronRightIcon />
          </p>
        </Link>
      </Box>
    </CompanyCardContainer>
  );
}

export default CompanyCard;
