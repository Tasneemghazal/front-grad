import React from "react";
import InputCom from "../../shared/InputCom";
import { Box, Button, Container, FormGroup, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgba(43, 1, 62, 0.7)",
 
  "&:hover": {
    backgroundColor:"rgba(43, 1, 62, 0.8)",
  },
}));

export default function TechnicalSupport() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

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
              <FormGroup sx={{ width: "100%" }}>
              <Box sx={{textAlign:"center"}}>
              <img src="image/ptuk.jpg" alt="ptuk logo"  width="30px" height="30px"/>
              <Typography variant="p" sx={{display:"block", pb:1}}>Palestine Technical University</Typography>
             <Typography variant="h4" sx={{ fontSize:"30px",textAlign: "center", mb: 4, fontWeight: "bold" }}>
                Contact us
              </Typography>
             </Box>
                <InputCom placeholder={"Your Name"} />
                <InputCom placeholder={"Your Email"} />
                <InputCom placeholder={"Subject"} />
                <InputCom placeholder={"Your Message"} />
                <ColorButton fullWidth>Send</ColorButton>
              </FormGroup>
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
