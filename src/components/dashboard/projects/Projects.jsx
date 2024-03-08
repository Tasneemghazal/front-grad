import { Box, Button, IconButton, Typography, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";


export default function Projects() {
  return (
    <Box
      sx={{
        ml: {
          md: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          textAlign: "center",
          pt: { xs: 5, sm: 0 }, // Adjusted padding-top for screens less than 248px
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: 18, md: 40 }, fontWeight: "bold" }}
      >
        Graduation project management{" "}
      </Typography>
      <Typography
        sx={{ mx: { xs: 10, md: 0 }, py: 5, fontSize: { xs: 10, md: 20 } }}
      >
        Here you can control the process of adding, reviewing, modifying or
        deleting previous projects for students
      </Typography>
      <Box>
        <Link to='addProject'>
          <Button
            variant="contained"
            sx={{
              mx: 1,
              my: 1,
              backgroundColor: "green",

              "&:hover": {
                backgroundColor: "#43a047",
              },
            }}
          >
            Add project
            <IconButton sx={{ color: "white" }}>
              <ControlPointDuplicateIcon />
            </IconButton>
          </Button>
        </Link>
        

        <Link to='viewProjects'>
          <Button
            variant="contained"
            sx={{
              mx: 1,
              my: 1,
              backgroundColor: "#00838f",

              "&:hover": {
                backgroundColor: "#0097a7",
              },
            }}
          >
            View all projects
            <IconButton sx={{ color: "white" }}>
              <RemoveRedEyeIcon />
            </IconButton>
          </Button>
        </Link>
        
      </Box>
    </Box>
  );
}
