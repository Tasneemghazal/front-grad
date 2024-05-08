import React from "react";
import InputCom from "../shared/InputCom";
import { Box, Button, Container, FormGroup, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import {  useNavigate } from 'react-router-dom'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgba(43, 1, 62, 0.7)",
  marginTop: 10,
  "&:hover": {
    backgroundColor: "rgba(43, 1, 62, 0.8)",
  },
}));

export default function UpdatePassword() {
  const navigate=useNavigate();

  const initialValues = {
<<<<<<< HEAD
    
=======

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
    email: "",
    password: "",
  };


  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const onSubmit = async (values) => {
    try {
      const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/changePassword`, values);
      console.log('Message sent successfully!');

      if(data.message=="success"){
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
<<<<<<< HEAD
   
=======

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
    {
      id: "email",
      type: "email",
      name: "email",
      title: "User Email",
      value: formik.values.email,
    }, {
      id: "password",
      type: "password",
      name: "password",
      title: "User password",
      value: formik.values.name,
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
              <form onSubmit={formik.handleSubmit} sx={{ width: "100%" }}>
                <Box sx={{textAlign:"center"}}>
                  <img src="image/ptuk.jpg" alt="ptuk logo"  width="30px" height="30px"/>
                  <Typography variant="p" sx={{display:"block", pb:1}}>Palestine Technical University</Typography>
                  <Typography variant="h4" sx={{ fontSize:"30px",textAlign: "center", mb: 4, fontWeight: "bold" }}>
                  Update your password
                  </Typography>
                </Box>
               {renderInputs}
                <ColorButton fullWidth type="submit">Send</ColorButton>
              </form>
            </Paper>
          </Grid>
          {matches && (
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center",position:"relative" }}>
              <img src="image/forgotPassword.gif" alt="" style={{ maxWidth: "100%", height: "auto" }} />                
              </Box>
            </Grid>
          )}
<<<<<<< HEAD
          
        </Grid>
        
=======

        </Grid>

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
      </Container>
    </Box>
  );



  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
<<<<<<< HEAD
        
=======

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
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
             <Box sx={{textAlign:"center"}}>
              <img src="image/ptuk.jpg" alt="ptuk logo"  width="40px" height="40px"/>
              <Typography variant="p" sx={{display:"block", pb:1}}>Palestine Technical University</Typography>
             <Typography variant="h4" sx={{ fontSize:"30px",textAlign: "center", mb: 4, fontWeight: "bold" }}>
                Forgot Password
              </Typography>
             </Box>
              <FormGroup sx={{ width: "100%", mb: 3 }}>
                <InputCom placeholder={"Email"} type={"email"} />
                <InputCom placeholder={"Password"} type={"password"}/>
                <InputCom placeholder={"Code"} type={"password"}/>
<<<<<<< HEAD
               
=======

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
                <ColorButton fullWidth>Confirm</ColorButton>
              </FormGroup>
            </Paper>
          </Grid>
          {matches && (
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src="image/forgotPassword.gif" alt="" style={{ maxWidth: "100%", height: "auto" }} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
