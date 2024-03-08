import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgba(43, 1, 62, 0.6)",
  "&:hover": {
    backgroundColor: "rgba(43, 1, 62, 0.8)",
  },
}));

export default function PageNotFound({ onGoBack }) {
  const goBackHandler = () => {
    if (onGoBack && typeof onGoBack === "function") {
      onGoBack(); // Call the provided callback function to handle navigation
    }
  };

  return (
    <Box sx={{ backgroundColor: "#e0e0e0", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              <img
                src="/image/error.gif" // Adjusted image source path
                alt=""
                style={{
                  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "50%",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Box display="flex" justifyContent="center">
              <Stack spacing={2} direction="row">
                <ColorButton variant="contained" onClick={goBackHandler}>
                  Go back
                  <ArrowForwardIosIcon sx={{ ml: 1 }} />
                </ColorButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
