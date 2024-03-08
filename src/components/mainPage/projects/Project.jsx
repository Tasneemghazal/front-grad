import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import CardCom from "../../shared/CardCom.jsx";
import style from "../../shared/shared.module.css";
export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index
  const [open, setOpen] = useState(false); // Dropdown open state

  const majors = [
    "All Projects",
    "Computer Systems Engineering",
    "Electrical Engineering",
    "Energy Engineering",
    "Mechanical Engineering",
    "Electrical Eng-Industrial Automation",
    "Communications Engineering Technology",
    "Building Engineering",
    "Sustainable Energy Engineering",
    "Civil Engineering and Sustainable Structures/Co-operative",
    "Automotive Engineering/Co-operative",
  ];

  // Check if screen size is less than medium
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleListItemClick = (index) => {
    setActiveIndex(index);
    setOpen(false); // Close the dropdown when an item is clicked
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: { xs: 2, md: 3 },
        my:3,
        borderTop:"1px dashed  rgba(43, 1, 62, 0.4)",
      }}
    >
      <Container>
        <Box sx={{ pb:1, width: "50%", margin: "auto", textAlign: "center", position:"relative" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "24px", sm: "30px", md: "36px" }, fontWeight: "900", mb:4 }}>
            Explore Our College To See Previous Projects
          </Typography>
          <Box sx={{width:"100%"}} className={`${style.border}`}></Box>
        </Box>
        <Grid container spacing={2} sx={{pt:5}}>
          {isSmallScreen ? ( 
            <Grid item xs={12}>
              <Select
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                value={majors[activeIndex]}
                onChange={(e) => handleListItemClick(majors.indexOf(e.target.value))}
                fullWidth
              >
                {majors.map((major, index) => (
                  <MenuItem key={index} value={major}>
                    {major}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          ) : (
           
            <Grid item xs={12} md={4}>
              {majors.map((major, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: activeIndex === index ? " rgba(43, 1, 62, 0.7)" : "inherit",
                    color: activeIndex === index ? "#fff" : "inherit",
                    cursor: "pointer",
                    fontSize: { xs: "16px", sm: "20px", md: "23px" },
                    mb: 1,
                    "&:hover": {
                      backgroundColor: " rgba(43, 1, 62, 0.4)",
                      color: "#fff",
                      borderTopRightRadius:30,
                      borderBottomRightRadius:30,                    },
                    ...(activeIndex === index && {
                      borderTopRightRadius:30,
                      borderBottomRightRadius:30,                    }),
                  }}
                  onClick={() => handleListItemClick(index)}
                >
                  <Typography variant="body1" sx={{py:1, ml:1}}>{major}</Typography>
                </Box>
              ))}
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CardCom image="image/cover.jpg"/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
