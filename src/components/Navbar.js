import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import logo from "../img/Logo.png";
import Dropdown from "./Dropdown";

const NavBarContainer = styled(Grid)`
  border-bottom: 1px solid #bfbfbf;
  height: 100px;
  background: #fff;
`;

function Navbar() {
  return (
    <NavBarContainer container alignContent="center" justify="center">
      <Grid item sm={10} md={10} lg={10}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <img src={logo} />
          <Box display="flex">
            <Dropdown label="Sign In" items={["Recruiter", "Professional"]} />
            <Dropdown
              label="Sign Up"
              items={["Recruiter", "Professional"]}
              color="#3C2DFF"
            />
          </Box>
        </Box>
      </Grid>
    </NavBarContainer>
  );
}

export default Navbar;
