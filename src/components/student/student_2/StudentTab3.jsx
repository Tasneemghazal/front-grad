import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BasicDateCalendar from "../../shared/BasicDateCalender.jsx";
import TaskCard from "../../shared/TaskCard.jsx";
import Task from "./Task.jsx";
import Title from "../../shared/title.jsx";


export default function StudentTab3() {
  return (
    <Box>
    <Title title={"Your Tasks"} />
    <Grid container>
      <Grid item xs={12} md={7} sx={{pb:2,pt:{xs:0,sm:1,md:7}}}>
      <Task/>
    
      </Grid>
      <Grid item xs={12} md={5}>
      <BasicDateCalendar style={{ border: "1px solid rgba(43, 1, 62, 0.4)" }} />
      </Grid>
    </Grid>
      
    </Box>
  );
}
