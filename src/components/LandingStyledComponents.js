import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export const PurpleContainer = styled(Grid)`
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

export const HeroContainer = styled(Grid)`
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

export const TestimonialsContainer = styled(Box)`
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

export const GetInTouchContainer = styled(Grid)`
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
