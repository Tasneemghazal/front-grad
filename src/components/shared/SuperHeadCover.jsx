import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
  import AutoStoriesIcon from "@mui/icons-material/AutoStories";
  import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
  import HdrStrongIcon from "@mui/icons-material/HdrStrong";
  import HdrWeakIcon from "@mui/icons-material/HdrWeak";
  import { Link } from "react-router-dom";
import { userContext } from "../context/StudentContextProvider.jsx";
import Loader from "../loader/Loader.jsx";
  
  export default function SuperHeadCover({ background }) {
  const {extractNameFromToken} = useContext(userContext);
  const [supervisorName,setSuperName] = useState();
  let[loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const name = extractNameFromToken();
        setSuperName(name.name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if(loading){
    return (
      <>
      <Loader/>
      </>
    )
  }
    return (
      <Box
        sx={{
          display: "flex",
          position: "relative",
          top: -100,
          height: "100vh",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(59, 59, 59, 0.5), rgba(59, 59, 59, 0.5)), url('image/${background}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,.5)",
                  borderRadius: "30px",
                  p: 5,
                  border: "1px solid rgba(0,0,0,1)",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "20px", md: "40px" }, fontWeight: "bold", py: {xs:1,sm:4} }}
                  variant="h1"
                >
                  Welcome Dr. {supervisorName}
                </Typography>
                <List>
                  <Link to="https://lms.ptuk.edu.ps/" style={{ color: "black", textDecoration: "none" }}>
                    <ListItem disablePadding sx={{ "&:hover": { transform: "translateY(2px)" } }}>
                      <ListItemButton>
                        <ListItemIcon>
                          <MarkEmailUnreadOutlinedIcon sx={{ color: "#00b0ff" }} />
                        </ListItemIcon>
                        <ListItemText primary=" Your PTUK email" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="https://lms.ptuk.edu.ps/" style={{ color: "black", textDecoration: "none" }}>
                    <ListItem disablePadding sx={{ "&:hover": { transform: "translateY(2px)" } }}>
                      <ListItemButton>
                        <ListItemIcon>
                          <CoPresentOutlinedIcon sx={{ color: "#ff9800" }} />
                        </ListItemIcon>
                        <ListItemText primary="PTUK LMS" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="https://lms.ptuk.edu.ps/" style={{ color: "black", textDecoration: "none" }}>
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
                <HdrStrongIcon
                  sx={{
                    position: "absolute",
                    top: "95%",
                    left: "0%",
                    color: "rgba(0,0,0,.5)",
                    display: { xs: "none", sm: "block" },
                    height: "130px",
                    width: "130px",
                  }}
                />
  
                <HdrWeakIcon
                  sx={{
                    position: "absolute",
                    top: "-30%",
                    left: "80%",
                    color: "rgba(0,0,0,.7)",
                    display: { xs: "none", sm: "block" },
                    height: "130px",
                    width: "130px",
                  }}
                />
  
            
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  