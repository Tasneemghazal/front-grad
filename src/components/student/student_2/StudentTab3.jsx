import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BasicDateCalendar from "../../shared/BasicDateCalender.jsx";
import TaskCard from "../../shared/TaskCard.jsx";
import Task from "./Task.jsx";


export default function StudentTab3() {
  return (
    <Box>
      <Box sx={{ width: { xs: "60%", md: "40%" }, my: 5 }}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            borderBottom: "2px solid rgba(43, 1, 62, 0.4)",
            fontSize: { xs: 15, md: 40 },
          }}
        >
          Your Tasks
        </Typography>
      </Box>
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
