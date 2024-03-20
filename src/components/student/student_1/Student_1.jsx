import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./student_1.css";
import Divider from "@mui/material/Divider";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import { Link } from "react-router-dom";
import { userContext } from "../../context/StudentContextProvider.jsx";
export default function Student_1() {
  const {extractNameFromToken} = useContext(userContext);
  const [studentName,setStudentName] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const name = extractNameFromToken();
        setStudentName(name.name);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  return (
 
     <Box sx={{ marginX: 2}}>
      <Box className="custom-shape-divider-top-1708175870" >
      <Box sx={{visibility:{xs:"hidden",lg:"visible"}}}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </Box>

      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
         
          borderRadius: "30px",
          
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item  xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 2 } }}>
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: {
                      xs: "30px",
                      sm: "30px",
                      md: "40px",
                      lg: "60px",
                    },
                    fontFamily: "fantasy",
                    textAlign: { xs: "center", sm: "left" },
                    pt: { xs: 0, sm: 0, md: 0, lg: 5 },
                  }}
                  variant="h1"
                >
                  {`Welcome Eng. ${studentName}`}
                </Typography>

                <Typography
                  sx={{
                    width: "100%",
                    py: { xs: 1, sm: 7, md: 6, lg: 7 },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  We are here to help you complete the best year of your academic life with the best results
                </Typography>
               
                    <Box sx={{ width: "100%", maxWidth: 360 }}>
                      <nav aria-label="main mailbox folders">
                        <List>
                          <Link
                            to="https://lms.ptuk.edu.ps/"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            <ListItem disablePadding sx={{ "&:hover": { transform: "translateY(2px)" } }}>
                              <ListItemButton>
                                <ListItemIcon>
                                  <MarkEmailUnreadOutlinedIcon sx={{ color: "#00b0ff", }} />
                                </ListItemIcon>
                                <ListItemText primary=" Your PTUK email" />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                          <Link
                            to="https://lms.ptuk.edu.ps/"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            <ListItem disablePadding sx={{ "&:hover": { transform: "translateY(2px)" } }}>
                              <ListItemButton>
                                <ListItemIcon>
                                  <CoPresentOutlinedIcon sx={{ color: "#ff9800", }} />
                                </ListItemIcon>
                                <ListItemText primary="PTUK LMS" />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                          <Link
                            to="https://lms.ptuk.edu.ps/"
                            style={{ color: "black", textDecoration: "none", }}
                          >
                            <ListItem disablePadding sx={{ "&:hover": { transform: "translateY(2px)" } }}>
                              <ListItemButton>
                                <ListItemIcon>
                                  <AutoStoriesIcon sx={{ color: "#43a047" }} />
                                </ListItemIcon>
                                <ListItemText primary=" Exam" />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        </List>
                      </nav>
                      <Divider />
                    </Box>
                
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ position: "relative", order: { xs: 1, sm: 2 } }}>
              <Box
                className="image-container"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "100%",
                  paddingBottom: "0%",
                  width: "100%",
                 alignItems:"center",
                 display: "flex",
                  maxWidth: "100%",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(43, 1, 62, 0.3)",
                    borderRadius: "30px",
                    position: "absolute",
                    top: { xs: "50%", md: 0 },
                    left: 0,
                    width: "100%",
                    height: "80%",
                    objectFit: "cover",
                    transform: { xs: "translateY(-50%)", md: "none" },
                  }}
                >
                  <img
                    src="image/howitwork.jpg"
                    alt=""
                    className="animated-image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>

              <Box
                className="image-container"
                sx={{
                  position: "absolute",
                  height: "25%",
                  width: "25%",
                  top: "calc(40% - -20%)",
                  left: "80%",
                  backgroundColor: "rgba(43, 1, 62, 0.5)",
                  overflow: "hidden",
                  borderRadius: "10px",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              ></Box>
            </Grid>
          </Grid>
         
        </Container>
      </Box>
     
    </Box>
 

  );
}
