import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import logo from "../img/Logo.png";
import Dropdown from "./Dropdown";
import { useHistory, Link } from "react-router-dom";

const NavBarContainer = styled(Grid)`
  border-bottom: 1px solid #bfbfbf;
  height: 100px;
  background: #fff;
`;

function Navbar() {
  const history = useHistory();

  const clickHandlerSignUp = () => {
    history.push("/signup");
  };

  const clickHandlerSignIn = () => {
    history.push("/signin");
  };

  const linksSignIn = [
    { text: "Recruiter", onClick: clickHandlerSignIn },
    { text: "Professional", onClick: clickHandlerSignIn },
  ];

  const linksSignUp = [
    { text: "Recruiter", onClick: clickHandlerSignUp },
    { text: "Professional", onClick: clickHandlerSignUp },
  ];

  return (
    <NavBarContainer container alignContent="center" justify="center">
      <Grid item sm={10} md={10} lg={10}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to="/">
            <img src={logo} />
          </Link>
          <Box display="flex">
            <Dropdown label="Sign In" items={linksSignIn} />
            <Dropdown label="Sign Up" items={linksSignUp} color="#3C2DFF" />
          </Box>
        </Box>
      </Grid>
    </NavBarContainer>
  );
}

export default Navbar;
