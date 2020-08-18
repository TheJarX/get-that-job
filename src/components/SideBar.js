import React from "react";

import Box from "@material-ui/core/Box";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import { useLocation, useHistory } from "react-router-dom";

const SideBarContainer = styled(Box)``;
function SideBar({ width }) {
  const location = useLocation();
  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };
  return (
    <SideBarContainer
      bgcolor="#fff"
      height="100vh"
      width={width}
      display="flex"
      flexDirection="column"
      fontSize="14px"
      py="40px"
    >
      <List component="ul">
        <ListItem
          button
          selected={location.pathname === "/jobs"}
          onClick={() => handleClick("/jobs")}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs for you" />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/applications"}
          onClick={() => handleClick("/applications")}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Your applications" />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === "/profile"}
          onClick={() => handleClick("/profile")}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Your Profile" />
        </ListItem>
      </List>
    </SideBarContainer>
  );
}

export default SideBar;
