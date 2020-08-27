import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { getFlag, dateAgo } from "../utils";
import { Link } from "react-router-dom";
import { Chip } from "./StyledComponents";

const JobCardContainer = styled(Box)`
  border-radius: 5px;
  padding: 16px 20px;
  margin: 20px 0;
  background: #fff;
  display: flex;
  color: #000;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
  .job-title {
    color: #4a5568;
    font-weight: 600;
    font-size: 20px;
    font-size: 20px;
  }
  .location {
    font-weight: bold;
  }
  .flag {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  .right {
    justify-content: flex-end;
    width: 60%;
    .money-icon {
      margin-right: 12px;
      height: 25px;
      width: 25px;
      padding: 1px;
      background: #45c8a1;
      border-radius: 50%;
      svg {
        fill: #fff;
      }
    }
    .date {
      min-width: 100px;
      margin-left: 10px;
      color: #718096;
      text-align: end;
    }
  }
`;

function JobCard({ job, small }) {
  const { id, company, title, location, jobType, seniority, date } = job;
  const { name: companyName, logoUrl } = company;

  return (
    <Link to={`/jobs/${id}`}>
      <JobCardContainer>
        <Box
          width="auto"
          maxWidth="15%"
          mr="15px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={logoUrl} style={{ width: "40px", height: "40px" }} alt="" />
        </Box>
        <Box
          display="flex"
          width={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="70%">
            <p className="job-title">{title}</p>
            <Box display="flex" alignItems="center">
              <p className="location">{`${companyName} - ${location}`}</p>
              <img
                className="flag"
                src="https://restcountries.eu/data/gbr.svg"
                alt=""
              />
            </Box>
          </Box>
          <Box className="right" display="flex" justifyContent="space-evenly">
            {!small && (
              <Box display="flex">
                <div className="money-icon">
                  <AttachMoneyIcon />
                </div>
                <Chip text={jobType} />
                <Chip text={seniority} />
              </Box>
            )}
            <p className="date">{dateAgo(date)}</p>
          </Box>
        </Box>
      </JobCardContainer>
    </Link>
  );
}

export default JobCard;
