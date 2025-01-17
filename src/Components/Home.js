import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import AppHeader from "./Appheader"; // Make sure the header file name is correct.

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <AppHeader />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <SideBar />

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#f5f5f5",
            height: "100%",
            
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
