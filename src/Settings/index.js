import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import SettingsHeader from "./Header";
import DisplayCard from "./MainContent/WhatsApp"; 
import { useTemplateContext } from "./TemplateContext"; 
import AddTemplateForm from "./Header/AddTemplate"; 
import axios from "axios";

const Settings = () => {
  const {
    templateData,
    addTemplate,
    updateTemplate,
    setShowCreateTemplate,
    showCreateTemplate,
    setEditingTemplate,
    editingTemplate,
    apiTemplateData,
    setApiTemplateData,
  } = useTemplateContext();
  
  const [loading, setLoading] = useState(true);

  const handleCancelClick = () => {
    setShowCreateTemplate(false);
  };

  const handleEditClick = (template) => {   
    console.log("edit comes in " , template)
    setEditingTemplate(template);
    setShowCreateTemplate(true);
  };

  const handleSubmit = (newTemplate) => {
    addTemplate(newTemplate);
    setShowCreateTemplate(false);
    updateTemplate(newTemplate)
  };

  useEffect(() => {
    const fetchTemplateData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://flash.lyf.yoga/files/communication/metatemplate//library?tentuuid=fb5cjv70&template_option=Others",
          {
            headers: {
              Internal: "LYFnGO",
            },
          }
        );
        const data = response?.data?.data || [];
        console.log("API Response Data:", data);

        const formattedData = data.map((template) => ({
          ...template,
          isActive: template.isActive ?? true,
          isDeleted: template.isDeleted ?? false,
        }));

        setApiTemplateData(formattedData);
      } catch (error) {
        console.error("Error fetching template data:", error);
        setApiTemplateData([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchTemplateData();
  }, [setApiTemplateData]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 3 }}>
        <SettingsHeader />
        {showCreateTemplate ? (
          <AddTemplateForm
            onCancel={handleCancelClick}
            onSubmit={handleSubmit}
            data={editingTemplate}
          />
        ) : (
          <Box>
            {!loading && (
              <DisplayCard
                templateData={apiTemplateData}
                onEditClick={(data) => {
                  handleEditClick(data);
                }}
              />
            )}
            {loading && <p>Loading templates...</p>}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Settings;
