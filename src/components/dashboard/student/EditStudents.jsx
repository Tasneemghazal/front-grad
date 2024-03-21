import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import axios from "axios";
import { useParams } from "react-router-dom";
import { userContext } from "../../context/StudentContextProvider.jsx";
import InputCom from "../../shared/InputCom.jsx";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import studentInputFields from "../create/studentInputFields.js";

export default function EditStudents() {
  const { id } = useParams();
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const { showSnackbar } = useSnackbar();
  const { getStudentById } = useContext(userContext);
  const [departments, setDepartments] = useState([]);
  

  async function fetchUserData(studentId) {
    const res = await getStudentById(studentId);
    formik.setValues({
      name: res.user.name,
      email: res.user.email,
      password: "", 
      phoneNumber: res.user.phoneNumber,
      academicYear: res.user.academicYear,
      depId: res.user.depId,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getDepartments();
      setDepartments(res.deps);
    }
    fetchUserData(id);
    fetchData();
  }, []);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    academicYear: "",
    depId: "", 
  };

 

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/updateStudent/${id}`, values, { headers: { token: `Bearer ${token}` } });
      if (data.message === "success") {
        showSnackbar({ message: "User updated successfully", severity: "success" });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const { formik, inputs } = studentInputFields(initialValues, onSubmit);

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
          Create User
        </Typography>
        <form onSubmit={formik.handleSubmit} >
          <Grid container spacing={2}>
            {renderInputs}
            <Grid item md={6} xs={12}>
              <SelectCom
                labelId="department-label"
                id="department"
                value={formik.values.depId}
                onChange={handleDepartmentChange}
                label="Department"
                options={departments.map(dep => ({ value: dep._id, label: dep.name }))}
              />
            </Grid>
            
          </Grid>
          
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(43, 1, 62, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(43, 1, 62, 0.8)",
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

