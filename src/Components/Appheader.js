import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Navigate, useNavigate } from "react-router-dom";
import Signin from "./Signin";

const AppHeader = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout =()=>{
  
    navigate("/")
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000",
        width: "100vw",
        marginInlineStart: "0px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Box
          display={"flex"}
          gap={"30px"}
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          <img
            src="images/icons_sidebar/Care.svg"
            alt="care_icon"
            style={{ height: "50px", width: "70px" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Fortis
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "20px",
              padding: "4px 12px",
              height: "30px",
              width: "400px",
            }}
          >
            <select
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "16px",
                
              }}
            >
              <option>Mobile No</option>
            </select>
            <TextField
              variant="outlined"
              sx={{
                marginLeft: "8px",
                width: "300px",
                border: "none",
                padding: "0px",
                height: "30px",
                "& .MuiOutlinedInput-root": {
                  height: "100%",
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  height: "100%",
                  padding: "6px 14px",
                  fontSize: "16px",
                  border: "none",
                },
              }}
              value={mobileNo}
              onChange={handleInputChange}
              placeholder="Exp – 9000111110"
              InputProps={{
                startAdornment: <InputAdornment position="start">+</InputAdornment>,
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <IconButton
              sx={{
                backgroundColor: "#00aaff",
                color: "#fff",
                borderRadius: "30px",
                paddingInline: "20px",
                "&:hover": { backgroundColor: "#0088cc" },
              }}
            >
              <PersonAddAltIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#00aaff",
                color: "#fff",
                borderRadius: "30px",
                paddingInline: "20px",
                "&:hover": { backgroundColor: "#0088cc" },
              }}
            >
              <CalendarTodayIcon />
            </IconButton>
            <IconButton>
              <GridViewIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ height: "40px" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={handleProfileClick}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Karthikeya
              </Typography>
              <Typography variant="caption" sx={{ color: "gray" }}>
                Owner
              </Typography>
            </Box>
            <IconButton>
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ marginTop: "8px" }}
          >
            <MenuItem onClick={handleClose}>My Profile</MenuItem>
            <MenuItem onClick={handleClose}>Subscription</MenuItem>
            <MenuItem onClick={handleClose}>Account Settings</MenuItem>
            <MenuItem onClick={handleClose}>Add New Practice</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
