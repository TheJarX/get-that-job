import React from "react";
import Box from "@material-ui/core/Box";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <Box display="flex">
      <SideBar width="17%" />
      <Box width="83%" pt="64px" px="104px">
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
