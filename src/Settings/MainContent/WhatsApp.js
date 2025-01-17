import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardHeader,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const DisplayCard = ({ templateData, onEditClick ,isSidebarOpen}) => {
  const [templateType, setTemplateType] = React.useState("all");
  const [showActive, setShowActive] = React.useState(true);
  const [showDeleted, setShowDeleted] = React.useState(false);
  const [showLibrary, setShowLibrary] = React.useState(false);

  const handleTemplateTypeChange = (event) => {
    setTemplateType(event.target.value);
  };

  const templates = Array.isArray(templateData)
    ? templateData
    : templateData?.data || [];
  console.log("Received templates:", templates);

  const filteredTemplates = templates.filter((template) => {
    if (showLibrary) return true; 

    if (templateType === "Others" && template.plan_type === "Others") {
      return true;
    }

    if (templateType !== "Others" && template.plan_type !== templateType) {
      return false;
    }

    if (templateType === "Communication" && template.plan_type === "Communication") {
      return true;
    }
    if (templateType === "Diet Plan" && template.plan_type === "Diet Plan") {
      return true;
    }

    if (showActive && template.template_status !== "APPROVED") {
      return false;
    }

    if (!showDeleted && template.template_status === "DELETED") {
      return false;
    }

    return true;
  });

  console.log("Filtered Templates:", filteredTemplates);

  return (
    <Box   sx={{
      paddingInlineStart: isSidebarOpen ? "0px" : "0", 
      transition: "padding-inline-start 0.3s ease",
      paddingBlockStart: "50px",
      width: "100%",
    
    
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ccc",
          marginBottom: "16px",
          paddingBlockStart:{md:'20px' , xs:'10px'},
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: {md:"50px" , xs:'20px'} }}>
          <FormControl size="small" sx={{ minWidth: {md:250 ,xs:150} }}>
            <InputLabel>Template Type</InputLabel>
            <Select value={templateType} onChange={handleTemplateTypeChange}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Communication">Communication</MenuItem>
              <MenuItem value="Diet Plan">Diet Plan</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant={showLibrary ? "contained" : "outlined"}
            color="success"
            sx={{borderRadius:"20px", paddingInline:'30px'}}
            onClick={() => setShowLibrary(!showLibrary)}
          >
            Template Library
          </Button>

          <Button
            variant={showActive ? "contained" :""}
            color="success"
            sx={{borderRadius:"20px"}}
            onClick={() => setShowActive(!showActive)}
          >
            Active
          </Button>

          <Button
            variant={showDeleted ? "contained" :"" }
            color="error"
            sx={{borderRadius:"20px"}}
            onClick={() => setShowDeleted(!showDeleted)}
          >
            Deleted
          </Button>
        </Box>

        <Box
          sx={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "8px",
            marginRight:'30px'
          }}
        >
          <Typography>
            Total Templates: <strong>{filteredTemplates.length}</strong>
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2} >
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "400px" }}>
                <CardHeader
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#2dbd96",
                    alignItems: "center",
                    color: "white",
                  }}
                  title={template.template_name}
                  titleTypographyProps={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  action={
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "#ffffff33",
                        },
                        margin: "0",
                        position: "relative",
                        padding: "4px",
                      }}
                      onClick={() => onEditClick(template)}
                    >
                      <EditIcon />
                    </Button>
                  }
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <Box sx={{ paddingBlock: "20px" }}>
                    <Typography>{template.main_body}</Typography>
                  </Box>
                  <Typography variant="caption">{template.footer}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{marginInlineStart:"20px" , position :'relative' , top:'200px' , left:'300px'}}>
            No templates available for the selected filters.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default DisplayCard;
