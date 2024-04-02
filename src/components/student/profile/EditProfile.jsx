import React, { useContext, useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { userContext } from "../../context/StudentContextProvider.jsx";
import InputCom from "../../shared/InputCom.jsx";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
export default function EditProfile({role}) {
  const { extractNameFromToken } = useContext(userContext);
  const token = localStorage.getItem("userToken");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { showSnackbar } = useSnackbar();
  const onSubmit = async (users) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/v1/grad/${role}/editProfile`,
        users, {
          headers: { token: `Bearer ${token}` }}
      );
     if(data.message==="Profile updated successfully"){
      showSnackbar({ message: 'Profile updated successfully', severity: 'success' });
     }
      console.log(data);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const name = extractNameFromToken();
        setUserName(name.name);
        setUserEmail(name.email);
        setPhoneNumber(name.phoneNumber);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  const initialValues = {
    phoneNumber: phoneNumber,
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });
  const inputs = [
 
    {
      id: "password",
      type: "password",
      name: "password",
      title: "User Password",
      value: formik.values.password,
    },
  ];

  const renderInputs = inputs.map((input, index) => (
    <InputCom
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      key={index}
      placeholder={input.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));

  const handleUploadClick = () => {
    // Define functionality to handle profile image upload
    console.log("Upload clicked");
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
      <Container
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: { xs: "center", md: "start" },
          pt: { xs: 5, md: 6 },
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, fontWeight: "bold" }}
        >
          Hello {userName}!
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
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRight: { xs: 0, md: "1px solid #eee" },
              height: { xs: "auto", md: "400px" },
              mt: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative", pt: { xs: 0, md: 8 } }}>
                <Avatar
                  alt={`${userName}'s Profile`}
                  src="/image/Dr.Thear.jpeg"
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
            </Box>
          </Grid>

          {/* Edit Info Section */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{ height: { xs: "auto", md: "400px" }, mt: 5 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Edit Your Info
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <form onSubmit={formik.handleSubmit}>
                    <InputCom
                      placeholder={"Name"}
                      type={"text"}
                      name={"name"}
                      value={userName}
                      disabled={true}
                    />
                    <InputCom
                      placeholder={"Email"}
                      type={"email"}
                      name={"email"}
                      value={userEmail}
                      disabled={true}
                    />
                     <InputCom
                      placeholder={"Phone Number"}
                      type={"text"}
                      name={"phoneNumber"}
                      value={phoneNumber}
                      
                    />
                    {renderInputs}
                    <Button
                      sx={{
                        bgcolor: "green",
                        color: "#fff",
                        "&:hover": { bgcolor: "green", color: "#000" },
                      }}
                      type="submit"
                    >
                      Save
                    </Button>
                  </form>
                  <Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
