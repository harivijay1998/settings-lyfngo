import React, { useContext, useState } from "react";
import { Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AddTemplateForm from "./AddTemplate";
import DisplayCard from "../MainContent/WhatsApp";
import { useTemplateContext } from "../TemplateContext";

const SettingsHeader = () => {
  const {templateData,showCreateTemplate,setShowCreateTemplate,editingTemplate} = useTemplateContext()
  const handleOpen = () => setShowCreateTemplate(true);
  const handleClose = () => setShowCreateTemplate(false);  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#007bff",
          color: "white",
          padding: "5px 20px",
          width: "100%",
          marginBlockStart: "-20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <HomeIcon />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              WhatsApp Template
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#007bff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#e6e6e6",
            },
            borderRadius: "20px",
            paddingLeft: "10px",
          }}
          onClick={handleOpen}
          aria-label="Create new template"
        >
          <Box
            sx={{
              backgroundColor: "#007bff",
              borderRadius: "50%",
              paddingBlock: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
              marginRight: "8px",
            }}
          >
            <AddIcon sx={{ color: "white", height: "15px" }} />
          </Box>
          Create new
        </Button>
      </Box>

      <Dialog open={showCreateTemplate} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Create WhatsApp Template</DialogTitle>
        <DialogContent>
          <AddTemplateForm onCancel={handleClose} data={editingTemplate} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      
    </>
  );
};

export default SettingsHeader;