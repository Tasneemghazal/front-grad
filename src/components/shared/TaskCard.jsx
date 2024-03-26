import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React  from "react";
export default function TaskCard({txt,endDate}) {
 
  return (
    <Box>
      <Paper
        sx={{
          p: 3,
          border: "1px solid rgba(43, 1, 62, 0.4)",
          transition:
            "transform 0.4s ease, box-shadow 0.3s ease, border 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            border: "2px solid black",
            cursor: "pointer",
          },
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Avatar src="image/task.png"></Avatar>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>{txt}</Typography>
            <Typography>{endDate.split('T')[0]}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
