import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { getFlag, dateAgo } from "../utils";

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
    .chip {
      border-radius: 100px;
      color: #fff;
      background: rgba(60, 45, 255, 0.69);
      padding: 2px 10px;
      margin-right: 10px;
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
  const { company, title, location, jobType, seniority, date } = job;
  const { name: companyName, logoUrl } = company;

  // useEffect(() => {
  //   getFlag(location);
  // }, [location]);

  return (
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
            <>
              <div className="money-icon">
                <AttachMoneyIcon />
              </div>
              <div className="chip">
                <p>{jobType}</p>
              </div>
              <div className="chip">
                <p>{seniority}</p>
              </div>
            </>
          )}
          <p className="date">{dateAgo(date)}</p>
        </Box>
      </Box>
    </JobCardContainer>
  );
}

export default JobCard;
