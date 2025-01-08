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

const DisplayCard = ({ templateData, onEditClick }) => {
  const [templateType, setTemplateType] = React.useState("all");
  const [showActive, setShowActive] = React.useState(true);
  const [showDeleted, setShowDeleted] = React.useState(false);

  const handleTemplateTypeChange = (event) => {
    setTemplateType(event.target.value);
  };

  const templates = Array.isArray(templateData) ? templateData : templateData?.data || [];
  console.log("Received templates:", templates);

  const filteredTemplates = templates.filter((template) => {
    if (templateType !== "all" && template.plan_type !== templateType) {
      return false;
    }

    if (showActive && template.template_status !== "APPROVED") {
      return false;
    }

    if (showDeleted && template.template_status === "DELETED") {
      return false;
    }

    return true;
  });

  console.log("Filtered Templates:", filteredTemplates);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ccc",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Template Type</InputLabel>
            <Select value={templateType} onChange={handleTemplateTypeChange}>
            <MenuItem value="all">All</MenuItem>
              <MenuItem value="Communication">Communication</MenuItem>
              <MenuItem value="Diet plan">Diet plan</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant={showActive ? "contained" : "outlined"}
            color="success"
            onClick={() => setShowActive(!showActive)}
          >
            Active
          </Button>

          <Button
            variant={showDeleted ? "contained" : "outlined"}
            color="error"
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
          }}
        >
          <Typography>
            Total Templates: <strong>{filteredTemplates.length}</strong>
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "400px" }}>
                <CardHeader
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#2dbd96",
                    color: "white",
                  }}
                  title={template.template_name}
                  action={
                    <Button
                      onClick={() => onEditClick(template)}
                      variant="outlined"
                      color="white"
                      backgroundColor="white"
                    >
                      <EditIcon />
                    </Button>
                  }
                />
                <CardContent>
                  <Box sx={{ paddingBlock: "20px" }}>
                    <Typography>{template.main_body}</Typography>
                  </Box>
                  <Typography variant="caption">{template.footer}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No templates available for the selected filters.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default DisplayCard;
