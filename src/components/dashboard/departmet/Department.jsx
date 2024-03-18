import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import { useFormik } from "formik";
import axios from "axios";
import CustomTable from "../../shared/CustomTable.jsx";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";

export default function Department() {
  const token = localStorage.getItem("userToken");
  const { getDepartments, removeDep } = useContext(DepartmentContext);
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const removeDepartment = async (depId) => {
    const res = await removeDep(depId);
    console.log(res);
    if (res.message === "success") {
      setTableData(tableData.filter((dep) => dep._id !== depId));
    }
    return res;
  };
  async function fetchData() {
    try {
      const res = await getDepartments();
      if (res.deps.length > 0) {
        const departmentKeys = Object.keys(res.deps[0]);
        const columns = departmentKeys.slice(0, -1);
        setTableColumns(columns);
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
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/addDepartment`,
        values,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      console.log(data);
      if (data.message === "success") {
        alert(data.message);

        const res = await getDepartments();
        if (res.deps.length > 0) {
          setTableData(res.deps);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ml: { xs: 0, md: 20 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: "30px",
          my: 2,
          fontWeight: "bold",
        }}
      >
        Departments
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <InputCom
            type="text"
            placeholder="department"
            name="name"
            title="Department"
            value={formik.values.name}
            onChange={formik.handleChange} // Use handleChange from Formik
          />
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
      <Box sx={{ my: 1, width: "80%" }}>
        <CustomTable
          columns={tableColumns}
          data={tableData}
          onDelete={removeDepartment}
        />
      </Box>
    </Box>
  );
}
