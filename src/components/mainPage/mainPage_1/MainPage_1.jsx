import { Box, Container, Typography } from "@mui/material";
import React from "react";
import style from "./mainPage_1.module.css";
import Grid from "@mui/material/Grid";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import styled from "styled-components";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(43, 1, 62, 0.7)",
  "&:hover": {
    backgroundColor: "rgba(43, 1, 62, 0.8)",
  },
}));

export default function MainPage_1() {
  return (
    <Box className={`${style.containerr}`} sx={{ marginX: 2 }}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          borderRadius: "30px",
          top: -70,
          textAlign: { xs: "center", sm: "left" },
          overflowX: "hidden", 
          overflowY: "hidden",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
                      xs: "35px",
                      sm: "35px",
                      md: "40px",
                      lg: "60px",
                    },
                    fontFamily: "fantasy",
                    textAlign: { xs: "center", sm: "left" },
                    pt: { xs: 5, sm: 0, md: 10, lg: 5 },
                  }}
                  variant="h1"
                  className={`${style.word}`}
                >
                  Welcome to the <br /> graduate website
                </Typography>

                <Typography
                  sx={{
                    width: "60%",
                    py: { xs: 1, sm: 7, md: 6, lg: 7 },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  To be part of our family and to learn more about how to use
                  the site, click to watch the video
                </Typography>
                <Box>
                  <ColorButton variant="contained" sx={{ px: 5 }}>
                    Watch the video
                    <SlowMotionVideoIcon sx={{ ml: 1 }} />
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "100%",
                  width: "100%",
                  maxWidth: "100%", 
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,.5)",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <img
                    src="image/cover1.png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: -20,
                      left: 0,
                      width: "100%", 
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  height: "30%",
                  width: "30%",
                  top: "calc(30% - 5%)",
                  left: "-15%",
                  backgroundColor: "rgba(0, 0, 0, .8)",
                  overflow: "hidden",
                  borderRadius: "50%",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              ></Box>
              <Box
                sx={{
                  width: "10%",
                  height: "10%",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <img
                  src="image/comment.png"
                  style={{
                    position: "absolute",
                    height: "auto",
                    width: "20%", 
                    top: "calc(100% - 20%)",
                    left: "-10%",
                    overflow: "hidden",
                    boxShadow: "2px 1px 8px 5px rgba(0, 0, 0, 0.4)",
                  }}
                />
              </Box>
              <Box>
                <BlurOnIcon
                  sx={{
                    position: "absolute",
                    height: "30%",
                    width: "30%",
                    top: "calc(50% - 2%)",
                    left: "-15%",
                    overflow: "hidden",
                    borderRadius: "50%",
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  height: "25%",
                  width: "25%",
                  top: "calc(40% - -20%)",
                  left: "80%",
                  backgroundColor: "rgba(43, 1, 62, 0.4)",
                  overflow: "hidden",
                  borderRadius: "50%",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              ></Box>
              <Box>
                <EqualizerIcon
                  sx={{
                    position: "absolute",
                    height: "20%",
                    width: "20%",
                    top: "calc(50% - 40%)",
                    left: "90%",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  height: "10%",
                  width: "10%",
                  top: "calc(40% - 40%)",
                  left: "80%",
                  backgroundColor: "rgba(43, 1, 62, 0.7)",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              ></Box>
              <BlurOnIcon
                sx={{
                  position: "absolute",
                  height: "30%",
                  width: "30%",
                  top: "calc(70% - 2%)",
                  left: "80%",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
