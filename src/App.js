import React from "react";
import "./App.css";
import { Box, Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import JobCard from "./components/JobCard";

const MainButton = styled(Button)`
  & {
    color: #fff !important;
    background: rgb(60, 45, 255);
    background: linear-gradient(
      45deg,
      rgba(60, 45, 255, 1) 0%,
      rgba(76, 45, 255, 1) 87%
    );
  }
`;
const PurpleContainer = styled(Grid)`
  font-size: 18px;
  background: rgb(60, 45, 255);
  background: linear-gradient(
    45deg,
    rgba(60, 45, 255, 1) 0%,
    rgba(76, 45, 255, 1) 87%
  );
  padding: 30px 0;
  color: #fff;
  // padding-left: 200px;
  // padding-right: 200px;
  p {
    text-align: justify;
  }
  .paragraph-title {
    font-weight: bold;
    font-size: 36px;
    margin: 20px 0;
  }
`;

function App() {
  return (
    <>
      <PurpleContainer container alignContent="center" justify="space-evenly">
        <Grid item xs={10} md={10} lg={4}>
          <p className="paragraph-title">Find your next tech job</p>
          <p>
            Our Machine learning algorithm is so good that it’s even illegal in
            some countries. Join us to use our barelly legal algorithm that is
            actually a group of interns that work on our basement.
          </p>
          <p>
            We have a job for you, no matter your background or previous
            experience. Is sending random memes through chat your only skill?
            That’s ok, we got you, our Rock Star Meme Curator role is here for
            you.
          </p>
        </Grid>
        <Grid item xs={10} md={10} lg={4}>
          <JobCard />
          <JobCard />
          <JobCard />
        </Grid>
      </PurpleContainer>
      <PurpleContainer>
        <JobCard />
      </PurpleContainer>
      <MainButton>Create your account now</MainButton>
    </>
  );
}

export default App;
