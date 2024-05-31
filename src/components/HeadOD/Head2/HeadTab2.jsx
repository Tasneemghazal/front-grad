import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import { UserContext } from "../../context/UserContextProvider.jsx";
import axios from "axios";
import { useFormik } from "formik";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import Title from "../../shared/title.jsx";

export default function HeadTab2() {
  const { getUsers,extractDepIdFromToken  } = useContext(UserContext);
  const [supervisors, setSupervisors] = useState([]);
  const { showSnackbar } = useSnackbar();
  const token = localStorage.getItem("userToken");
  const initialValues = {
    num: "", 
    userId: "", 
  };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const depId = extractDepIdFromToken();
        
        
        const res = await getUsers();
        if (res && res.users && res.users.length > 0) {
          const filteredUsers = res.users.filter(user => user.role.includes("supervisor") && user.depId === depId);
          setSupervisors(filteredUsers);
          console.log(supervisors);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/head/addSection`, values, {
        headers: { token: `Bearer ${token}` },
      });
      if(data.message === "Success") {
        showSnackbar({ message: "Section added successfully", severity: "success" });
      }
      return data;
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to add section. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleSupervisorChange = (event) => {
    formik.setFieldValue("userId", event.target.value);
  };

  return (
    <Container>
 <Title title={"Add a New Section"}/>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={isSmallScreen ? 12 : 7} sx={{mt:{md:10}}}>
            <form onSubmit={formik.handleSubmit}>
              <InputCom
                placeholder="Section Number"
                type="number"
                name="num"
                onChange={formik.handleChange}
                value={formik.values.num}
              />
              <SelectCom
                labelId="supervisor-label"
                id="supervisor"
                value={formik.values.userId}
                onChange={handleSupervisorChange}
                label="Supervisor"
                options={supervisors.map(supervisor => ({ value: supervisor._id, label: supervisor.name }))}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                 
                    width:"100%"
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 3,
                }}
              >
                <img
                  src="/image/AddSection.png"
                  alt="Add Task"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}
