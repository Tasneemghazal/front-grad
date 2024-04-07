import React, { useState } from "react";
import InputCom from "../shared/InputCom";
import { Box, Button, Container, Grid, Paper, Typography, useMediaQuery, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from "../context/SnackbarProvider.jsx";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgba(43, 1, 62, 0.7)",
  marginTop: 10,
  "&:hover": {
    backgroundColor: "rgba(43, 1, 62, 0.8)"
  },
}));

export default function Sign_in() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  let navigate = useNavigate();
  let [userToken, setUserToken] = useState();
  const initialValues = {
    email: "",
    password: "",
  };
  const [openModal, setOpenModal] = useState(false);
  const [userRoles, setUserRoles] = useState([]);

  const { showSnackbar } = useSnackbar(); 

  const onSubmit = async (users) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/v1/grad/auth/signIn", users);
      console.log(data);
      if (data.message === "valid account") {
        localStorage.setItem("userToken", data.token);
        setUserToken(data.token);
        const roles = Array.isArray(data.role) ? data.role : [data.role];

        // If user has multiple roles, open modal for role selection
        if (roles.length > 1) {
          setUserRoles(roles);
          setOpenModal(true);
        } else {
          handleNavigation(roles[0]);
        }

        showSnackbar({ message: "Login successful", severity: "success" }); 
      }
    } catch (error) {
      console.log("Error occurred:", error)
    }
  }

  const handleNavigation = (role) => {
    switch (role) {
      case "admin":
        navigate("/dashboard");
        break;
      case "headOfDepartment":
        navigate("/headOfDepartment");
        break;
      case "supervisor":
        navigate("/supervisor");
        break;
      case "student":
        navigate("/student");
        break;
      default:
        // Handle other roles or unexpected cases
        break;
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
    {
      id: "email",
      type: "email",
      name: "email",
      title: "User Email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "User Password",
      value: formik.values.password,
    },
  ];

  const renderInputs = inputs.map((input, index) => (
    <InputCom
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      key={index}
      placeholder={input.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#fff",
                p: 3
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <img src="image/ptuk.jpg" alt="Palestine Technical University logo" width="40px" height="40px" />
                <Typography variant="body2" sx={{ display: "block", pb: 1 }}>Palestine Technical University</Typography>
                <Typography variant="h4" sx={{ fontSize: "30px", textAlign: "center", mb: 4, fontWeight: "bold" }}>
                  Sign In
                </Typography>
              </Box>
              <form onSubmit={formik.handleSubmit} sx={{ width: "100%", mb: 3 }}>
                {renderInputs}
                <Link style={{ textDecoration: "none" }} to='/sendCode'>
                  <Typography variant="body2" sx={{ textAlign: "right", color: "primary", cursor: "pointer" }}>
                    Forgot Password?
                  </Typography>
                </Link>
                <ColorButton fullWidth type="submit">Sign in</ColorButton>
              </form>
            </Paper>
          </Grid>
          {matches && (
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src="image/boy on graduation.gif" alt="Boy on Graduation" style={{ maxWidth: "100%", height: "auto" }} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* Modal for role selection */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose Role
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {userRoles.map((role, index) => (
              <Button key={index} onClick={() => {handleNavigation(role); setOpenModal(false);}}>
                {role}
              </Button>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
