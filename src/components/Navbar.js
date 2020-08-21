import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import logo from "../img/Logo.png";
import Dropdown from "./Dropdown";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { userFetc }

const NavBarContainer = styled(Grid)`
  border-bottom: 1px solid #bfbfbf;
  height: 100px;
  background: #fff;
`;

function Navbar() {
  const history = useHistory();
  const user = useSelector((state) => state.auth.profileData);

  const clickHandlerSignUp = (type) => {
    history.push({ pathname: "/signup", search: `?as=${type}` });
  };

  const clickHandlerSignIn = (type) => {
    history.push({ pathname: "/signin", search: `?as=${type}` });
  };

  const linksSignIn = [
    { text: "Recruiter", onClick: () => clickHandlerSignIn("recruiter") },
    { text: "Professional", onClick: () => clickHandlerSignIn("professional") },
  ];

  const linksSignUp = [
    { text: "Recruiter", onClick: () => clickHandlerSignUp("recruiter") },
    { text: "Professional", onClick: () => clickHandlerSignUp("professional") },
  ];

  const userLinks = [
    { text: "Edit profile", onClick: () => history.push("/profile") },
    {
      text: "Log out",
      onClick: () => console.log("Closing session..."),
      style: { color: "#F5222D" },
    },
  ];

  return (
    <NavBarContainer container alignContent="center" justify="center">
      <Grid item sm={10} md={10} lg={10}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          {user ? (
            <Dropdown label={user.name} items={userLinks} />
          ) : (
            <Box display="flex">
              <Dropdown label="Sign In" items={linksSignIn} />
              <Dropdown label="Sign Up" items={linksSignUp} color="#3C2DFF" />
            </Box>
          )}
        </Box>
      </Grid>
    </NavBarContainer>
  );
}

export default Navbar;
