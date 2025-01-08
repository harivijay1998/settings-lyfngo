import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, TextField, InputAdornment, Divider } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"; 
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const AppHeader = () => {
  const [mobileNo, setMobileNo] = useState("");

  const handleInputChange = (event) => {
    setMobileNo(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#000", width: "92vw", marginInlineStart: "120px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Fortis
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "20px", padding: "4px 12px", height: "30px", width: "400px" }}>
            <select style={{ border: "none", outline: "none", background: "transparent", fontSize: "16px", fontWeight: "bold" }}>
              <option>Mobile No</option>
            </select>
            <TextField
              variant="outlined"
              color="gray"
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
            <IconButton sx={{ backgroundColor: "#00aaff", color: "#fff", borderRadius: "30px", paddingInline: "20px", "&:focus": {
      backgroundColor: "#00aaff", 
    }, }}>
              <PersonAddAltIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#00aaff", color: "#fff",borderRadius: "30px", paddingInline: "20px" , "&:focus": {
      backgroundColor: "#00aaff", 
    },}}>
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
          <Divider orientation="vertical" flexItem sx={{height:'40px'}}/>
          <Box sx={{display:'flex', flexDirection:'column'}}>
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
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
