import React from "react";
import "./App.css";
import { Box, Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import JobCard from "./components/JobCard";
import logo from "./img/Logo.png";
import heroVector from "./img/landing-1.png";

const MainButton = styled(Button)`
  & {
    color: #fff !important;
    font-weight: bold;
    background: rgb(60, 45, 255);
    background: linear-gradient(
      45deg,
      rgba(60, 45, 255, 1) 0%,
      rgba(76, 45, 255, 1) 87%
    );
    padding: 10px 20px;
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
  p {
    text-align: justify;
  }
  .paragraph-title {
    font-weight: bold;
    font-size: 36px;
    margin: 20px 0;
  }
`;

const NavBarContainer = styled(Grid)`
  border-bottom: 1px solid #bfbfbf;
  height: 100px;
  background: #fff;
`;

const HeroContainer = styled(Grid)`
  text-align: center;
  .hero-title {
    font-weight: bold;
    font-size: 46px;
    margin-bottom: 20px;
  }
  .hero-paragraph {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

function App() {
  return (
    <Box bgcolor="#F7FAFC">
      {/* NAVBAR BEGIN */}
      <NavBarContainer container alignContent="center" justify="center">
        <Grid item sm={10} md={10} lg={10}>
          <img src={logo} />
        </Grid>
      </NavBarContainer>
      {/* NAVABR END */}

      {/* HERO BEGIN */}
      <HeroContainer container justify="center">
        <Box
          display="flex"
          width={1}
          justifyContent="space-around"
          flexWrap="inherit"
          alignItems="center"
        >
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <h1 className="hero-title">The place where you get that job</h1>
            <p className="hero-paragraph">
              With our Machine learning algorithm you will get that job in no
              time, We promise you! Just give us the money and we will take care
              of it.
            </p>
            <MainButton>Create your account now</MainButton>
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <img src={heroVector} />
          </Grid>
        </Box>
      </HeroContainer>
      {/* HERO END */}

      {/* PURPLE SECTION BEGIN */}
      <PurpleContainer container alignContent="center" justify="center">
        <Box
          display="flex"
          width={1}
          justifyContent="space-around"
          flexWrap="inherit"
        >
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <p className="paragraph-title">Find your next tech job</p>
            <p>
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement.
            </p>
            <p>
              We have a job for you, no matter your background or previous
              experience. Is sending random memes through chat your only skill?
              That’s ok, we got you, our Rock Star Meme Curator role is here for
              you.
            </p>
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <JobCard />
            <JobCard />
            <JobCard />
          </Grid>
        </Box>
      </PurpleContainer>
      {/* PURPLE SECTION END */}
    </Box>
  );
}

export default App;
