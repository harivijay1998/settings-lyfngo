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
    addTemplate,
    setShowCreateTemplate,
    showCreateTemplate,
    setEditingTemplate,
    editingTemplate,
    apiTemplateData,
    setApiTemplateData,
  } = useTemplateContext();
  
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCancelClick = () => {
    setShowCreateTemplate(false);
  };

  const handleEditClick = (template) => {   
    setEditingTemplate(template);
    setShowCreateTemplate(true);
  };

  const handleSubmit = (newTemplate) => {
    addTemplate(newTemplate);
    setShowCreateTemplate(false);
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
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
      <Box
        sx={{
          flex: 1,
          transition: "margin-left 0.3s ease",
          marginLeft: isSidebarOpen ? "230px" : "0", 
        
        }}
      >
        <SettingsHeader toggleSidebar={toggleSidebar} />
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
                onEditClick={handleEditClick}
                isSidebarOpen={isSidebarOpen}
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
