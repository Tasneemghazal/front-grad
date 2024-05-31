import React from "react";
import InputCom from "../../shared/InputCom";
import { Box, Button, Container, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import axios from "axios";
import { useFormik } from "formik";
import { techValidation } from "../../validation/validation.js";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#135D66",
  "&:hover": {
    backgroundColor: "#77B0AA",
  },
}));

export default function TechnicalSupport() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const onSubmit = async (values) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/admin/technicalSupport`, values);
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:techValidation,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
    {
      id: "name",
      type: "name",
      name: "name",
      title: "User Name",
      value: formik.values.name,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      title: "User Email",
      value: formik.values.email,
    },
    {
      id: "subject",
      type: "text",
      name: "subject",
      title: "User Subject",
      value: formik.values.subject,
    },
    {
      id: "message",
      type: "text",
      name: "message",
      title: "User Message",
      value: formik.values.message,
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
      errors={formik.errors}
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
                    Contact us
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
                <img src="image/Active Support.gif" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                <Box
                  sx={{
                    position: "absolute",
                    height: "40%",
                    width: "40%",
                    top: "calc(30% - 40%)",
                    left: "calc(70% - 10%)",
                    backgroundColor: "rgba(0, 0, 0, .8)",
                    overflow: "hidden",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "10px", color: "#fff", textAlign: "center" }}>
                    We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any question you may have.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}
          
        </Grid>
        
      </Container>
    </Box>
  );
}