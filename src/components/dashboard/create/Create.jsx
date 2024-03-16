import React, { useState, useEffect } from "react";
import { Box, Button, FormGroup, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function Create() {
  const [dep, setDep] = useState([]);
  const [selectedDepName, setSelectedDepName] = useState(""); // State to hold selected department name
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    getDep();
  }, []);

  const getDep = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:3000/api/v1/grad/admin/getDep",
        { headers: { token: `Bearer ${token}` } }
      );
      setDep(data.dep);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  const Role = ["headOfDepartment", "supervisor"];

  const handleFormSubmit = async () => {
    try {
      // Find the selected department object
      const selectedDepartment = dep.find((department) => department.name === selectedDepName);
      // Send the _id of the selected department to the backend
      await axios.post("YOUR_BACKEND_URL_HERE", {
        departmentId: selectedDepartment._id,
        // Other form data
      });
      // Handle success
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

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
        <FormGroup>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "30px", my: 2, fontWeight: "bold" }}
          >
            Create User
          </Typography>
          <InputCom placeholder={"UserName"} type={"text"} />
          <InputCom placeholder={"Email"} type={"email"} />
          <InputCom placeholder={"Password"} type={"password"} />
          <InputCom placeholder={"PhoneNumber"} type={"text"} />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={dep.map((department) => department.name)} // Map department names only
            value={selectedDepName} // Set selected department name
            onChange={(event, newValue) => setSelectedDepName(newValue)} // Update selected department name
            sx={{ my: 1 }}
            renderInput={(params) => <TextField {...params} label="Departments" />}
          />

          <Autocomplete
            disablePortal
            multiple
            id="combo-box-demo"
            options={Role}
            sx={{ my: 1 }}
            renderInput={(params) => <TextField {...params} label="Role" />}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(43, 1, 62, 0.5)",
              "&:hover": {
                backgroundColor: " rgba(43, 1, 62, 0.8)",
              },
            }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
}
