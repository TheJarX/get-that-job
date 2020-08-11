import React from "react";
import "./App.css";
import { Box, Grid, Button, TextareaAutosize } from "@material-ui/core";
import styled from "styled-components";
import JobCard from "./components/JobCard";
import heroVector from "./img/landing-1.png";
import testimonialPic from "./img/Img Girl Flowers.png";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import { Formik, Form } from "formik";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";

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

const TestimonialsContainer = styled(Box)`
  font-weight: 300;
  .testimonial-paragraph {
    margin: 8px 20px 14px 20px;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    max-width: 900px;
  }

  .testimonial-author {
    font-size: 20px;
  }
  .testimonial-author-title {
    font-size: 16px;
  }
`;

const GetInTouchContainer = styled(Grid)`
  padding-top: 100px;
  padding-bottom: 100px;
  font-weight: bold;
  .annotation {
    font-size: 13px;
    color: #999;
    text-transform: uppercase;
  }
  .contact-title {
    font-size: 46px;
  }

  .contact-subtitle {
    font-size: 15px;
  }

  .contact-details {
    font-weight: 300;
    font-size: 16px;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box bgcolor="#F7FAFC">
      {/* NAVBAR BEGIN */}
      <Navbar />
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
            <img
              src={heroVector}
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
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

      {/* TESTIMONIALS BEGIN */}
      <TestimonialsContainer
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="80px"
        bgcolor="#fff"
      >
        <img src={testimonialPic} />
        <p className="testimonial-paragraph">
          “Amazing experience, I love it a lot. Thanks to the team I got that
          Job, great!”
        </p>
        <p className="testimonial-author">Lassy Chester</p>
        <p className="testimonial-author-title">Art Director</p>
      </TestimonialsContainer>
      {/* TESTIMONIALS END */}

      {/* GET IN TOUCH BEGIN */}
      <GetInTouchContainer container justify="center">
        <Box
          display="flex"
          width={1}
          justifyContent="space-around"
          flexWrap="inherit"
          alignItems="center"
        >
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <Box>
              <p className="annotation">contacts</p>
              <h3 className="contact-title">Get in Touch</h3>
              <p className="contact-subtitle">
                If you are not sure yet, shoot us a message!
              </p>
            </Box>
            <Box mt="170px">
              <p className="contact-details">hello@getthatjob.com</p>
              <p className="contact-details">
                Jose Galvez 692, 7th Floor. The Board
              </p>
            </Box>
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={4}>
            <Box width={1}>
              <Formik initialValues={{ email: "", name: "", message: "" }}>
                <Form>
                  <TextField
                    type="email"
                    name="email"
                    isLabeled={false}
                    placeholder="Your email"
                  />
                  <TextField
                    type="text"
                    name="name"
                    isLabeled={false}
                    placeholder="Your name"
                  />
                  <textarea
                    style={{
                      width: "100%",
                      height: "200px",
                      maxHeight: "500px",
                      padding: "5px",
                    }}
                    placeholder="Message"
                  ></textarea>
                  <Button startIcon={<EmailIcon />} className={classes.root}>
                    Submit message
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Grid>
        </Box>
      </GetInTouchContainer>
      {/* GET IN TOUCH END */}
    </Box>
  );
}

export default App;
