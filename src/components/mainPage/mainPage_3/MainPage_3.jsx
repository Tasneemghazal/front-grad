import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import React from "react";

export default function ExampleComponent() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "50vh",
        color: "#fff",
        position: "relative",
        my: 3,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: [2, 6],
                paddingTop: [4, 8],
                paddingBottom: [4, 8],
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  display: ["none", "block", "block"],
                  color: "#fff",
                  marginLeft: 15,
                  position: "absolute",
                  top: ["10%", "12%"],
                  right: ["50%", "90%"],
                }}
              >
                <SchoolOutlinedIcon sx={{ fontSize: [60, 50] }} />
              </IconButton>
              <Typography>
                <h2 sx={{ fontSize: [24, 32, 40] }}>
                  “The only way to do great <br /> work is LOVE what you do”
                </h2>
              </Typography>
              <Typography sx={{ fontSize: [16, 18, 24], paddingTop: 3, paddingBottom: 3 }}>
                STEVE JOBS
              </Typography>
              <Typography sx={{ fontSize: [16, 18, 24] }}>
                Mantan CEO Apple Inc.
              </Typography>
              <IconButton
                sx={{
                  display: ["none", "none", "block"],
                  color: "#bcaaa4",
                  marginLeft: 2,
                  position: "absolute",
                  top: ["5%", "10%"],
                  right: ["5%", "10%"],
                  bottom: ["0%", "0%"],
                }}
              >
                <PsychologyOutlinedIcon sx={{ fontSize: [100, 70] }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                position: ["relative", "absolute"],
                bottom: 0,
                right: [0, 150],
                marginTop: [4, 0],
              }}
            >
              <img src="image/steve.png" alt="" style={{ maxWidth: "100%", height: "auto" }} />
              <IconButton
                sx={{
                  display: ["none", "none", "block"],
                  color: "#fff",
                  marginLeft: 2,
                  top: ["5%", "10%"],
                  right: ["5%", "50%"],
                  left: ["55%", "-100%"],
                }}
              >
                <TipsAndUpdatesTwoToneIcon sx={{ fontSize: [30, 50] }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
