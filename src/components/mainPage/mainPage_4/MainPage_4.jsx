import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import style from '../../shared/shared.module.css';
export default function MainPage_4() {
  return (
   <Box sx={{py:5,my:5}}>
    <Container>
    <Box sx={{textAlign:"center",pb:3,width:"35%",m:"auto",position:"relative"}} >
        <Typography variant="h2" sx={{ fontSize: { xs: "24px", sm: "30px", md: "36px" }, fontWeight: "900" }}>How it works
        
        </Typography>
        <Box sx={{width:"100%"}} className={`${style.border}`}></Box>
    </Box>
   <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2} sx={{mt:3}}>
    <Grid item xs={12} md={3}>
      <Paper sx={{ padding: 3 ,'&:hover':{backgroundColor:'#e0e0e0', transition:'0.5s'}}} >
        <Typography variant="h5" sx={{fontSize:"20px",fontWeight:"900"}}>Sign In</Typography>
        <Typography>
        Go to the site, choose the admin, wait for approval, and then you can communicate with him
       
        </Typography>
      </Paper>

      <Paper sx={{ padding: 3, marginTop: 2,'&:hover':{backgroundColor:'#e0e0e0', transition:'0.5s'} }}>
        <Typography variant="h5" sx={{fontSize:"20px",fontWeight:"900",pb:1}}>Get access</Typography>
        <Typography>Access to question bank of over 2000 questions</Typography>
      </Paper>
    </Grid>

    <Grid item xs={6} md={6} sx={{ margin: { xs: "auto", md: 0 }, width: "60%", display: { xs: "none", md: "flex" },flexDirection:{md:"column"}, justifyContent:{md:"center"} }}>
      <Paper sx={{ margin: "auto", padding: 3,width:"60%" }}>
        <img src="image/howitwork.jpg" alt="" style={{ width: "100%", margin: "auto", padding: 10 , boxShadow: "4px 4px 8px 5px rgba(0, 0, 0, 0.6)"}}/>
      </Paper>
    </Grid>

    <Grid item xs={12} md={3}>
      <Paper sx={{ padding: 3 ,'&:hover':{backgroundColor:'#e0e0e0', transition:'0.5s'}}}>
        <Typography variant="h5" sx={{fontSize:"20px",fontWeight:"900"}}>Assignments</Typography>
        <Typography>
          You must submit your assignments on time and communicate with your supervisor when needed
        </Typography>
      </Paper>

      <Paper sx={{ padding: 3, marginTop: 2,'&:hover':{backgroundColor:'#e0e0e0', transition:'0.5s'} }}>
        <Typography variant="h5" sx={{fontSize:"20px",fontWeight:"900"}}> feedback</Typography>
        <Typography>Your supervisor will mark and comment on your submission</Typography>
      </Paper>
    </Grid>

    <Grid item xs={6} md={6} sx={{ margin: { xs: "auto", md: 0 }, width: "60%", display: { xs: "block", md: "none" } }}>
      <Paper sx={{ margin: "auto", padding: 3 }}>
        <img src="image/howitwork.jpg" alt="" style={{ width: "100%", margin: "auto", padding: 10, boxShadow: "4px 4px 8px 5px rgba(0, 0, 0, 0.6)" }}/>
      </Paper>
    </Grid>
  </Grid>
</Box>

   </Container>
   </Box>
  );
}