import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import axios from "axios";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import UploadFile from "../../shared/UploadFile.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import userInputFields from "./userInputFields.js";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import { signupValidation } from "../../validation/validation.js";

export default function Create() {
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const { showSnackbar } = useSnackbar();
  const [departments, setDepartments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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
    officeHours: "",
    role: [],
    depId: "",
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  const onSubmit = async (values, { setSubmitting ,resetForm}) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("img", selectedImage);
    formData.append("depId", values.depId);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("officeHours", values.officeHours);
    values.role.forEach((role, index) => {
      formData.append(`role[${index}]`, role);
    });

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/registerUser`,
        formData,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      if (data.message === "success") {
        showSnackbar({
          message: "User added successfully",
          severity: "success",
        });
        resetForm();
        setSelectedImage(null);
      }
    } catch (error) {
      console.error("Submission error:", error);
      showSnackbar({
        message: "Submission error. Please try again.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const { formik, inputs } = userInputFields(
    initialValues,
    onSubmit,
    signupValidation
  );

  const renderInputs = inputs.map((input, index) => (
    <Grid item md={6} xs={12} key={index}>
      <InputCom
        type={input.type}
        name={input.name}
        id={input.id}
        title={input.title}
        value={input.value}
        errors={formik.errors}
        touched={formik.touched}
        placeholder={input.title}
        onChange={input.onChange || formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </Grid>
  ));

  const handleDepartmentChange = (event) => {
    formik.setFieldValue("depId", event.target.value);
  };

  const handleRoleChange = (event) => {
    formik.setFieldValue("role", event.target.value);
  };

  const Role = ["headOfDepartment", "supervisor"];

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
          sx={{
            textAlign: "center",
            fontSize: "30px",
            my: 5,
            fontWeight: "bold",
          }}
        >
          Create User
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
            <Grid item md={6} xs={12}>
              <SelectCom
                labelId="role-label"
                id="role"
                name="role"
                value={formik.values.role || []} // Ensure value is always an array
                onChange={handleRoleChange}
                label="Role"
                options={Role.map((role) => ({ value: role, label: role }))}
                multiple // Add this attribute for multiple selection
                onBlur={formik.handleBlur}
                touched={formik.touched}
                errors={formik.errors}
              />
            </Grid>
          </Grid>
          <UploadFile
            onFileChange={handleImageChange}
            buttonText="Add an image"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#135D66",
              "&:hover": {
                backgroundColor: "#77B0AA",
              },
            }}
            type="submit"
            disabled={formik.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
