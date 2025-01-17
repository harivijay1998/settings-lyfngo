import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Settings from "../Settings";
import Dashboard from "./Dashboard";
import Appointments from "./Appointments";
import Patients from "./Patients";
import Leads from "./Leads";
import Pharmarcy from "./Pharmarcy";
import Channels from "./Channels";
import Inventory from "./Inventory";
import Products from "./Products";
import Expenses from "./Expenses";
import Events from "./Events";
import DashboardAI from "./DashboardAI";
import Profile from "./Profile";
import Consults from "./Consults";
import { Link } from "react-router-dom";

const SideBar = ({ setActiveView }) => {
  const compoList = [
    {
      id: 1,
      src: "images/icons_sidebar/Dashboard_icon.svg",
      alt: "dashboardicon",
      route: "/home/dashboard",
      name: "Dashboard",
      color: "#0062dd",
    },
    {
      id: 2,
      src: "images/icons_sidebar/Appointment_icon.svg",
      alt: "appointmenticon",
      route: "/home/appointments",
      name: "Calendar",
      color: "#76cf00",
    },
    {
      id: 3,
      src: "images/icons_sidebar/Patients_icon.svg",
      alt: "patientsicon",
      route: "/home/patients",
      name: "Patients",
      color: "#2eb2ff",
    },
    {
      id: 4,
      src: "images/icons_sidebar/Leads_icon.svg",
      alt: "leadsicon",
      route: "/home/leads",
      name: "Leads",
      color: "#ff0000",
    },
    {
      id: 5,
      src: "images/icons_sidebar/Pharmacy_icon.svg",
      alt: "pharmacyicon",
      route: "/home/pharmacy",
      name: "Pharmacy",
      color: "#008d00",
    },
    {
      id: 6,
      src: "images/icons_sidebar/Channel_icon.svg",
      alt: "channelicon",
      route: "/home/channels",
      name: "Channels",
      color: "#3498db",
    },
    {
      id: 7,
      src: "images/icons_sidebar/inventory_icon.svg",
      alt: "inventoryicon",
      route: "/home/inventory",
      name: "Inventory",
      color: "#008080",
    },
    {
      id: 8,
      src: "images/icons_sidebar/Product_icon.svg",
      alt: "producticon",
      route: "/home/products",
      name: "Product",
      color: "#f39c12",
    },
    {
      id: 9,
      src: "images/icons_sidebar/Expenses_icon.svg",
      alt: "expensesicon",
      route: "/home/expenses",
      name: "Expenses",
      color: "#e74c3c",
    },
    {
      id: 10,
      src: "images/icons_sidebar/Events_icon.svg",
      alt: "eventsicon",
      route: "/home/events",
      name: "Events",
      color: "#0054ab",
    },
    {
      id: 11,
      src: "images/icons_sidebar/Consult_icon.svg",
      alt: "consultsicon",
      route: "/home/consults",
      name: "Consults",
      color: "#e6c100",
    },
    {
      id: 12,
      src: "images/icons_sidebar/Events_icon.svg",
      alt: "dashboardaiicon",
      route: "/home/dashboard-ai",
      name: "Dashboard AI",
      color: "#14d867",
    },
    {
      id: 13,
      src: "images/icons_sidebar/Settings_icon.svg",
      alt: "settingsicon",
      route: "/home/settings",
      name: "Settings",
      color: "#5d5d5d",
    },
    {
      id: 14,
      src: "images/icons_sidebar/Microsite_icon.svg",
      alt: "profileicon",
      route: "/home/profile",
      name: "Profile",
      color: "#02b7a5",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginBlockStart: "-130px",
        }}
      >
    <Box
  sx={{
    width: "100px",
    bgcolor: "#f5f5f5", 
    height: "90vh",
    overflowY: "auto",
    paddingInline: "0px",
    marginBlock: "120px",
    position: "relative",
    boxShadow: "5px 0 5px -1px rgba(0, 0, 0, 0.2), 8px 0 8px 0px rgba(0, 0, 0, 0.14), 14px 0 14px 0px rgba(0, 0, 0, 0.12)", 
    "&::-webkit-scrollbar": {
      display: "none", 
    },
  }}
>
          <List sx={{ minHeight: "100vh", paddingTop: "20px" }}>
            {compoList.map((icon) => (
              <ListItem
                key={icon.id}
                disablePadding
                sx={{ marginBlock: "20px" }}
              >
                <ListItemButton component={Link} to={icon.route}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      style={{ height: "30px", width: "30px" }}
                    />
                    <Typography
                      sx={{
                        color: icon.color,
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {icon.name}
                    </Typography>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
