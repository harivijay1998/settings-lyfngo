import React, { useRef, useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Stack,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import SearchIcon from "@mui/icons-material/Search";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTemplateContext } from "../TemplateContext";
import axios from "axios";
import { Buffer } from "buffer";

const AddTemplateForm = (props) => {
  const { addTemplate, updateTemplate, apiTemplateData, setApiTemplateData } =
    useTemplateContext();
   
  const [variables, setVariables] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 
  const editableRef1 = useRef(null); 





const token ="NUD9xhbwF6rIcPnPKDvJkM3DBsQCTpx3gf0BoO3IELDuv+F1mfPqQ91GIiEfVIKjl76aiWx8EV6oakzMAA8XbQLmXdgqJ/OSzylhbCCyj2yPxlcx9/Hn38Hfoz2IbTdOyFamPoa+bcXdkNi6WUA5hF0dN68nvpDL8TLvFUPdMNdYRvAgMmZKkFPdrakFmHuiBfz58A0rDrhvCdKIFT1S2hE1BYceph7cD3rezcYsn7+iUmXPWJCNYo9tK0F92sPbe0Of0LVAzdZ5k0sMNnWo6w==:aHZnVVBtZ0RaeGRoU2hnZw=="



const handleAddVariable = () => {
  const variableIndex = variables.length + 1;
  const newVariable = { id: variableIndex, value: "" };
  setVariables((prev) => [...prev, newVariable]);

  const editor = editableRef.current;
  if (editor) {
    editor.innerHTML += ` {{${variableIndex}}}`;
    formik.setFieldValue("body", editor.innerHTML);

    formik.setFieldValue("main_variables", [
      ...formik.values.main_variables,
      newVariable.value,
    ]);
  }
};
  // useEffect(() => {
  //   const editor = editableRef1.current;
  //   if (!editor) return;

  //   const observer = new MutationObserver(() => {
  //     const spans = editor.getElementsByTagName("span");
  //     const currentVariables = [];
  //     Array.from(spans).forEach((span) => {
  //       const index = span.textContent.replace(/[{}]/g, "");
  //       if (index) currentVariables.push(index);
  //     });

  //     setVariables((prevVariables) =>
  //       prevVariables.filter((_, i) => currentVariables.includes(String(i)))
  //     );
  //   });

  //   observer.observe(editor, { childList: true, subtree: true });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  


  const handleVariableInput = (id, value) => {
    setVariables((prev) =>
      prev.map((variable) =>
        variable.id === id ? { ...variable, value } : variable
      )
    );
    formik.setFieldValue("variables", variables);
  };



  const handleBodyInput = () => {
    const editor = editableRef.current;
    const content = editor.innerHTML;
    const matches = content.match(/{{\d+}}/g) || [];
    const variableIds = matches.map((match) => parseInt(match.replace(/[{}]/g, "")));

    variableIds.forEach((id) => {
      if (!variables.some((variable) => variable.id === id)) {
        setVariables((prev) => [...prev, { id, value: "" }]);
      }
    });

    setVariables((prev) =>
      prev.filter((variable) => variableIds.includes(variable.id))
    );

    formik.setFieldValue("body", content);
  };

  const { onSubmit, onCancel, data } = props;
  const editableRef = useRef(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [headerType, setHeaderType] = useState("None");

  const csrf = () => {
    var timeStamp = Date.now() + 1 * 60 * 60 * 1000;
    var productName = "LYFnGO-REACT-NATIVE";
    var encode = Buffer.from(`${timeStamp + "###" + productName}`).toString("base64");
    return encode;
  };


  useEffect(() => {
    if (data && editableRef.current) {
      editableRef.current.innerHTML = data.body;
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      templateName: data ? data.template_name : "",
      templateType: data ? data.plan_type : "",
      category: data ? data.category : "",
      language: data ? data.language : "",
      header: data ? data.header : "None",
      body: data ? data.body : "",
      main_variables:data ? data.main_variables : [],
      footer: data ? data.footer : "",
    },
    validationSchema: Yup.object({
      templateName: Yup.string().required("Template name is required"),
      templateType: Yup.string().required("Template type is required"),
      category: Yup.string().required("Category is required"),
      language: Yup.string().required("Language is required"),
      body: Yup.string()
        .max(1024, "Body cannot exceed 1024 characters")
        .required("Body is required"),
    }),
    onSubmit: async (values) => {
      const payload = data
      ? {
          template_id: data.template_id, 
          plan_type:"",
          header_format: "",
          header_media: {},
          header_body: "",
          header_variables: [],
          main_body: `<html>${values.body}</html>`,
          main_variables: variables.map((variable) => variable.value), 
          footer: values.footer || "",
          tentuuid: "fb5cjv70",
          tent_user_uuid: "m7pwft41",
          buttons: [],
        }
      : {
          template_name: values.templateName,
          category: values.category,
          plan_type: values.templateType,
          language: "en",
          header_format: "",
          header_media: {},
          header_body: "",
          header_variables: [],
          main_body: `<html>${values.body}</html>`,
          main_variables:  variables.map((variable) => variable.value), 
          footer: values.footer || "",
          tentuuid: "fb5cjv70",
          created_by: "m7pwft41",
          buttons: [],
        };
  
      try {
        let response;
        if (data) {
          response = await axios.put(
            `https://flash.lyf.yoga/files/communication/metatemplate/edit`,
            payload,
            {
              headers: {
                "Content-Type": "application/json",
                Internal: "LYFnGO",
                "X-SECURITY": csrf(),
              },
            }
          );
          updateTemplate(values);
        } else {
          response = await axios.post(
            "https://flash.lyf.yoga/files/communication/metatemplate/add",
            payload,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                Internal: "LYFnGO",
                "X-SECURITY": csrf(),
              },
            }
          );

          addTemplate(values);
             const res = await axios.get(
          "https://flash.lyf.yoga/files/communication/metatemplate/library?tentuuid=fb5cjv70&template_option=Others",
          {
            headers: {
              Internal: "LYFnGO",
            },
          }
        );

        setApiTemplateData(res.data);
        }

     
      } catch (error) {
        console.error(
          "Error saving template:",
          error.response || error.message
        );
        alert("Failed to save template. Please try again.");
      }
    },
  });

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    setMediaFiles((prev) => [...prev, { url: fileURL, type, name: file.name }]);

    if (editableRef.current) {
      const editor = editableRef.current;
      const content =
        type === "image"
          ? document.createElement("img")
          : type === "video"
          ? document.createElement("video")
          : document.createElement("a");

      content.src = fileURL;
      content.alt = file.name;
      content.controls = type === "video";
      content.href = type === "doc" ? fileURL : undefined;
      content.textContent = type === "doc" ? file.name : undefined;
      content.style.maxWidth = "50%";
      content.style.display = "block";
      content.style.margin = "10px 0";

      editor.appendChild(content);
    }
  };

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <Box
    sx={{
      padding: 3,
      width: 1100,
      margin: "0 auto",
      borderRadius: 2,
      backgroundColor: "#f5f5f5",
    }}
  >
    <form onSubmit={formik.handleSubmit}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={2}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" }, 
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Template name*"
              name="templateName"
              value={formik.values.templateName}
              disabled={!!data}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.templateName && Boolean(formik.errors.templateName)
              }
              helperText={formik.touched.templateName && formik.errors.templateName}
              sx={{
                marginBottom: 4,
                width: {xs:"60%" , md:400},
                "& .MuiOutlinedInput-root": {
                  height: "30px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "0 14px",
                },
                "& .MuiInputLabel-root": {
                  top: "-9px",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-shrink": {
                  top: "0px",
                },
              }}
            />
            <FormControl
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "30px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "0px 14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  top: "-9px",
                },
                "& .MuiInputLabel-shrink": {
                  top: "-5px",
                },
              }}
            >
              <InputLabel>Template Type*</InputLabel>
              <Select
                name="templateType"
                value={formik.values.templateType}
                disabled={!!data}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.templateType &&
                  Boolean(formik.errors.templateType)
                }
                sx={{
                  marginBottom: 2,
                  width: {xs:"60%" , md:400},
                }}
              >
                <MenuItem value="Communication">Communication</MenuItem>
                <MenuItem value="Diet Plan">Diet Plan</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
          </Box>
  
          <Box sx={{ width: "100%" }}>
            <FormControl
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "30px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "0px 14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  top: "-9px",
                },
                "& .MuiInputLabel-shrink": {
                  top: "-5px",
                },
              }}
            >
              <InputLabel>Select Category*</InputLabel>
              <Select
                name="category"
                value={formik.values.category}
                disabled={!!data}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                sx={{
                  marginBottom: 2,
                  width: {xs:"60%" , md:400},
                }}
              >
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="utility">Utility</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "30px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "0px 14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  top: "-9px",
                },
                "& .MuiInputLabel-shrink": {
                  top: "-5px",
                },
              }}
            >
              <InputLabel>Select Language*</InputLabel>
              <Select
                name="language"
                value={formik.values.language}
                disabled={!!data}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.language && Boolean(formik.errors.language)
                }
                sx={{
                  marginBottom: 2,
                  width: {xs:"60%" , md:400},
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Stack>
  
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Body*
      </Typography>
      <Box
        ref={editableRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleBodyInput}
        sx={{
          minHeight: "150px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          backgroundColor: "#fff",
          fontSize: "16px",
          outline: "none",
          marginBottom: 2,
          width:{md:'100%' , xs:'58%'}
        }}
      ></Box>
      {formik.touched.body && formik.errors.body && (
        <Typography color="error" variant="caption">
          {formik.errors.body}
        </Typography>
      )}
  
      <Box sx={{textAlign:{md:'right', xs:'left'}}} mt={2}>
        <IconButton onClick={() => applyFormatting("bold")}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton onClick={() => applyFormatting("italic")}>
          <FormatItalicIcon />
        </IconButton>
      </Box>
      <Box mt={2} display="flex" alignItems="center">
        <Button variant="contained" color="primary" onClick={handleAddVariable}>
          Add Variable
        </Button>
      </Box>
  
      <Typography variant="body2" mt={3}>
        Variables:
      </Typography>
      <Stack spacing={2} mt={2}>
        {variables.map((variable) => (
          <TextField
            key={variable.id}
            label={`{{${variable.id}}}`}
            value={variable.value}
            onChange={(e) => handleVariableInput(variable.id, e.target.value)}
          />
        ))}
      </Stack>
  
   
  
      <TextField
        fullWidth
        label="Footer (optional)"
        name="footer"
        value={formik.values.footer}
        onChange={formik.handleChange}
        sx={{ marginTop: 2  ,width:{md:'100%' , xs:'59%'}}}
      />
  
      <Box sx={{display:"flex" ,justifyContent:{md:"flex-end", xs:'flex-start'} ,gap:2, mt:2}} >
        <Button variant="contained" type="submit">
          {data ? "Update" : "Save"}
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </form>
  </Box>
  
  );
};

export default AddTemplateForm;