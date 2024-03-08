import React, { useRef } from "react";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import InputCom from "../../shared/InputCom.jsx";

export default function EditProfile() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the file upload logic here
    console.log("Selected file:", file);
  };

  return (
    <Box
      sx={{
        height: "200px",
        position: "relative",
        top: -115,
        backgroundColor: "rgba(43, 1, 62, 0.2)",
        
      }}
    >
      <Container sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: {xs:"center",md:"start"} ,pt: { xs: 5, md: 6 } }}>
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, fontWeight: "bold" }}
        >
          Hello Fatima!
          <WavingHandIcon
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              ml: 2,
              color: "rgba(43, 1, 62, 1)",
            }}
          />
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2}>
          {/* Profile Picture Section */}
          <Grid item xs={12} md={4} sx={{ borderRight: { xs: 0, md: "1px solid #eee" }, height: { xs: "auto", md: "400px" }, mt: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative",pt:{xs:0,md:8} }}>
                <Avatar
                  alt="Fatima's Profile"
                  src="/image/toto.jpeg"
                  sx={{
                    width: "130px",
                    height: "130px",
                    border: "1px solid #000",
                  }}
                />
                <Box
                  onClick={handleUploadClick}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    position: "absolute",
                    right: 0,
                    bottom: -5,
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <AddPhotoAlternateIcon />
                </Box>
              </Box>
              <Typography sx={{ mt: 5 }}>Change your profile image!</Typography>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Box>
          </Grid>

          {/* Edit Info Section */}
          <Grid item xs={12} md={8} sx={{ height: { xs: "auto", md: "400px" }, mt: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Edit Your Info
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <InputCom placeholder={"Name"} type={"text"} />
                  <InputCom placeholder={"Email"} type={"text"} />
                  <InputCom placeholder={"PhoneNumber"} type={"text"} />
                  <InputCom placeholder={"Password"} type={"password"} />
                </Box>
                <Box>
                  <Button sx={{ bgcolor: "green", color: "#fff", "&:hover": {bgcolor: "green",color: "#000"} }}>Save</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
