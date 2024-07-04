import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputCom from "./InputCom.jsx";
import axios from "axios";
import { DepartmentContext } from "../context/DepartmentContextProvider.jsx";
import SelectCom from "./SelectCom.jsx";
import userInputFields from "../dashboard/create/userInputFields.js";
import { useSnackbar } from "../context/SnackbarProvider.jsx";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider.jsx";

export default function EditUser() {
  const { id } = useParams();
  const token = localStorage.getItem("userToken");
  const { getDepartments } = useContext(DepartmentContext);
  const { showSnackbar } = useSnackbar();
  const { getUserById } = useContext(UserContext);
  const [departments, setDepartments] = useState([]);

  async function fetchUserData(userId) {
    const res = await getUserById(userId);
    formik.setValues({
      name: res.user.name,
      email: res.user.email,
      password:"", // Assuming you don't want to show the password initially
      phoneNumber: res.user.phoneNumber,
      officeHours: res.user.officeHours,
      role: res.user.role || [], // Handle role as an array
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
    officeHours: "",
    role: [],
    depId: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/updateSupervisor/${id}`, values, { headers: { token: `Bearer ${token}` } });
      if (data.message === "success") {
        showSnackbar({ message: "User updated successfully", severity: "success" });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const { formik, inputs } = userInputFields(initialValues, onSubmit);

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

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
    formik.setFieldValue(
      "role",
      typeof value === 'string' ? value.split(',') : value
    );
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
          sx={{ textAlign: "center", fontSize: "30px", my: 5, fontWeight: "bold" }}
        >
          Edit user
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
            <Grid item md={6} xs={12}>
              <SelectCom
                labelId="role-label"
                id="role"
                multiple
                value={formik.values.role}
                onChange={handleRoleChange}
                label="Role"
                options={Role.map(role => ({ value: role, label: role }))}
              />
            </Grid>
          </Grid>
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
