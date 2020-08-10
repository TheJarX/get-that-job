import React from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const JobCardContainer = styled(Box)`
  border-radius: 5px;
  padding: 16px 20px;
  margin: 20px 0;
  background: #fff;
  display: flex;
  color: #000;
  align-items: center;
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
  .date {
    p {
      color: #718096;
      text-align: end;
    }
  }
`;
const imgUrl =
  "https://media-exp1.licdn.com/dms/image/C560BAQH3yl67w-0w5Q/company-logo_200_200/0?e=2159024400&v=beta&t=deDlwPhllNSAjfGooe3lDx72DxC7ZvDZsnBn-ULzpLo";

function JobCard() {
  return (
    <JobCardContainer>
      <Box width="10%" mr="15px">
        <img src={imgUrl} style={{ width: "40px", height: "40px" }} />
      </Box>
      <Box width="50%">
        <p className="job-title">Software Engineer</p>
        <p className="location">Able - Lima</p>
      </Box>
      <Box width="40%" className="date">
        <p>Today</p>
      </Box>
    </JobCardContainer>
  );
}

export default JobCard;
