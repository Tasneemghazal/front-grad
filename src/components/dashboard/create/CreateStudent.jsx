import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import axios from "axios";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import UploadFile from "../../shared/UploadFile.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import studentInputFields from "./studentInputFields.js";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import { studentValidation } from "../../validation/validation.js";

export default function CreateStudent() {
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const [departments, setDepartments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { showSnackbar } = useSnackbar();


  useEffect(() => {
    async function fetchData() {
      const res = await getDepartments();
      setDepartments(res.deps);
    }
    fetchData();
  }, [getDepartments]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    img: "",
    phoneNumber: "",
    academicYear: "",
    depId: "",
    universityNum:""
  };


  const handleImageChange = (image) => {
    setSelectedImage(image); 
  };

  const onSubmit = async (values,{resetForm,setSubmitting}) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("img", selectedImage);
    formData.append("depId", values.depId);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("academicYear", values.academicYear);
    formData.append("universityNum", values.universityNum);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/registerStudent`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      if (data.message === "Student created successfully") {
        showSnackbar({ message: "Student added successfully", severity: "success" });
        resetForm()
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

  const { formik, inputs } = studentInputFields(initialValues, onSubmit,studentValidation);

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

  const handleDepartmentChange = (event) => {
    formik.setFieldValue("depId", event.target.value);
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
          Create Student
        </Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <Grid container spacing={2}>
            {renderInputs}
            <Grid item md={6} xs={12}>
            <SelectCom
                labelId="department-label"
                id="department"
                name="depId"
                value={formik.values.depId}
                onChange={handleDepartmentChange}
                label="Department"
                options={departments.map((dep) => ({
                  value: dep._id,
                  label: dep.name,
                }))}
                onBlur={formik.handleBlur}
                touched={formik.touched}
                errors={formik.errors}
              />
            </Grid>
            
              <UploadFile  onFileChange={handleImageChange} buttonText="Add an image"/>
            
          </Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#135D66",
              "&:hover": {
                backgroundColor: "#77B0AA",
              },
              mt: 3,
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
