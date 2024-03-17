import React, { useState, useEffect, useContext } from "react";
import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import axios from "axios";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import UploadFile from "../../shared/UploadFile.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import userInputFields from "./userInputFields.js";
import studentInputFields from "./studentInputFields.js";

export default function CreateStudent() {
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const [departments, setDepartments] = useState([]);

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
    role: "student",
    depId: "",
  };

  const handleFieldChange = (event) => {
    formik.setFieldValue("img", event.target.files[0]);
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("img", values.img);
    formData.append("depId", values.depId);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("academicYear", values.academicYear);

    try {
      const{data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/registerStudent`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      if(data.message === "Student created successfully"){
        alert(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const { formik, inputs } = studentInputFields(initialValues, onSubmit, handleFieldChange);

  const renderInputs = inputs.map((input, index) => (
    <InputCom
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      key={index}
      placeholder={input.title}
      onChange={input.onChange || formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
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
        ml: { xs: 0, md: 20 },
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontSize: "30px", my: 2, fontWeight: "bold" }}
        >
          Create User
        </Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          {renderInputs}
          <SelectCom
            labelId="department-label"
            id="department"
            value={formik.values.depId}
            onChange={handleDepartmentChange}
            label="Department"
            options={departments.map(dep => ({ value: dep._id, label: dep.name }))}
          />

          <UploadFile />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(43, 1, 62, 0.5)",
              "&:hover": {
                backgroundColor: " rgba(43, 1, 62, 0.8)",
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
