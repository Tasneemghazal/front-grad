import React from "react";
import InputCom from "../shared/InputCom";
import { Box, Button, Container, FormGroup, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

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
             <Box sx={{textAlign:"center"}}>
              <img src="image/ptuk.jpg" alt="ptuk logo"  width="40px" height="40px"/>
              <Typography variant="p" sx={{display:"block", pb:1}}>Palestine Technical University</Typography>
             <Typography variant="h4" sx={{ fontSize:"30px",textAlign: "center", mb: 4, fontWeight: "bold" }}>
                Sign In
              </Typography>
             </Box>
              <form sx={{ width: "100%", mb: 3 }}>
                <InputCom placeholder={"Email"} type={"email"} />
                <InputCom placeholder={"Password"} type={"password"}/>
                <Link style={{ textDecoration: "none" }} to='/sendCode'>
                  <Typography variant="body2" sx={{ textAlign: "right", color: "primary", cursor: "pointer" }}>
                    Forgot Password?
                  </Typography>
                </Link>
                <ColorButton fullWidth>Sign in</ColorButton>
              </form>
            </Paper>
          </Grid>
          {matches && (
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src="image/boy on graduation.gif" alt="" style={{ maxWidth: "100%", height: "auto" }} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
