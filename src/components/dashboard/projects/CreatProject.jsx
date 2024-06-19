import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import projectInputFields from "./projectInputFields.js";
import SelectCom from "../../shared/SelectCom.jsx";
import axios from "axios";
import UploadFile from "../../shared/UploadFile.jsx";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import { createProjectValidation } from "../../validation/validation.js";

export default function CreateProject() {
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const [tableData, setTableData] = useState([]);
  const [group, setGroup] = useState([""]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedThesis, setSelectedThesis] = useState(null);
  const { showSnackbar } = useSnackbar();

  async function fetchData() {
    try {
      const res = await getDepartments();
      if (res.deps.length > 0) {
        setTableData(res.deps);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [getDepartments]);

  const initialValues = {
    name: "",
    supervisorName: "",
    depId: "",
  };

  const onSubmit = async (values,{resetForm}) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("supervisorName", values.supervisorName);
    formData.append("img", selectedImage);
    formData.append("thesis", selectedThesis);
    formData.append("depId", values.depId);

    group.forEach((studentName, index) => {
      formData.append(`group[${index}]`, studentName);
    });

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/admin/addProject`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      if (data.message === "success") {
        showSnackbar({ message: "Project added successfully", severity: "success" });
        resetForm();
      }
    } catch (error) {
      console.error("Submission error:", error);
      const errorMessage = error.response?.data?.message || "Submission error. Please try again.";
      showSnackbar({
        message: errorMessage,
        severity: "error",
      });
    }
  };

  const { formik, inputs } = projectInputFields(initialValues, onSubmit,createProjectValidation);

  const renderInputs = inputs.map((input, index) => (
    <Grid item md={6} xs={12} key={index}>
      <InputCom
        type={input.type}
        name={input.name}
        id={input.id}
        title={input.title}
        value={input.value}
        placeholder={input.title}
        onChange={input.onChange || formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
      />
    </Grid>
  ));

  const handleAddStudent = () => {
    setGroup([...group, ""]);
  };

  const handleDepartmentChange = (event) => {
    formik.setFieldValue("depId", event.target.value);
  };

  const handleRemoveStudent = () => {
    if (group.length > 1) {
      setGroup(group.slice(0, -1));
    }
  };

  const handleStudentNameChange = (index, newName) => {
    const newGroup = [...group];
    newGroup[index] = newName;
    setGroup(newGroup);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: { xs: 0, lg: 20 },
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontSize: "30px", my: 5, fontWeight: "bold" }}
        >
          Add project
        </Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <Grid container spacing={2}>
            {renderInputs}
          </Grid>
         <SelectCom
  labelId="department-label"
  id="department"
  name="depId" // Added name prop
  value={formik.values.depId}
  onChange={handleDepartmentChange}
  label="Department"
  options={tableData.map(dep => ({ value: dep._id, label: dep.name }))}
  onBlur={formik.handleBlur}
  touched={formik.touched}
  errors={formik.errors}
/>
          <Grid container spacing={2}>
            {group.map((studentName, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <InputCom
                  placeholder={`Student ${index + 1} Name`}
                  type={"text"}
                  value={studentName}
                  onChange={(e) => handleStudentNameChange(index, e.target.value)}
                  errors={formik.errors}
                  touched={formik.touched}
                  onBlur={formik.handleBlur}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <IconButton onClick={handleAddStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                    <AddCircleIcon sx={{ fontSize: 30 }}/>
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <IconButton onClick={handleRemoveStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": {color:"rgba(43, 1, 62, 0.8)" } }}>
                    <RemoveCircleIcon sx={{ fontSize: 30 }}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <UploadFile onFileChange={setSelectedImage} buttonText="Add an image" />
          <UploadFile onFileChange={setSelectedThesis} buttonText="Upload Thesis File" />
    
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#135D66",
              "&:hover": {
                backgroundColor: "#77B0AA",
              },
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
