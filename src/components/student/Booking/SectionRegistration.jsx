import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Avatar,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SupervisorName from "./SupervisorName.jsx";
import SectionForm from "./SectionForm.jsx";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import EventIcon from "@mui/icons-material/Event";
import Title from "../../shared/title.jsx";

const SectionRegistration = () => {
  const token = localStorage.getItem("userToken");
  const [section, setSection] = useState([]);
  const { getSections } = useContext(SectionContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sections = await getSections();
        setSection(sections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, [getSections]);

  const avatarImages = [
    "/image/class.png",
    "/image/class2.png",
    "/image/class3.png",
    "/image/class4.png",
    "/image/class5.png",
    "/image/class6.png",
    "/image/class7.png",
    "/image/class8.png",
    "/image/class9.png",
  ];

  const getRandomAvatar = () => {
    return avatarImages[Math.floor(Math.random() * avatarImages.length)];
  };

  const handleSectionUpdate = (updatedSection) => {
    setSection((prevSections) =>
      prevSections.map((sec) =>
        sec._id === updatedSection._id ? updatedSection : sec
      )
    );
  };

  return (
    <Container sx={{mb:10}}>
      <ToastContainer />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#135D66",
          textAlign: "center",
          marginBottom: 4,
          animation: "fadeIn 2s ease-in-out infinite",
          "@keyframes fadeIn": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 5,
            },
          },
        }}
      >
        Registration instructions !
      </Typography>
      <Typography
  variant="body1"
  sx={{
    fontSize: "1.1rem",
    fontWeight: "normal",
    lineHeight: 1.5,
    mb: 10,
    mx: 5,
   
  }}
>
  <ul>
    <li>
      All you have to do is choose the session number. 
    </li>
    <li>
    Enter your number and
      the numbers of your colleagues in the same group .
    </li>
    
    <li>
    You cannot withdraw the
      request except after the supervisor approves or rejects it.
    </li>
   
  </ul>
</Typography>


      <Title title={"Book Your Supervisor"} />
      <Grid container justifyContent="center" textAlign="center" spacing={2}>
        {section.map(
          (sec) =>
            sec.visible && (
              <Grid key={sec._id} item xs={12} md={6}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 3,
                    border: "1px solid rgba(43, 1, 62, 0.4)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box sx={{ padding: 4, textAlign: "center" }}>
                    <Avatar
                      src={getRandomAvatar()}
                      alt="Avatar"
                      sx={{
                        width: 100,
                        height: 100,
                        margin: "auto",
                        border: "1px solid #000",
                      }}
                    />{" "}
                  </Box>
                  <Box sx={{ paddingLeft: 4 }}>
                    {" "}
                    {/* Add padding to separate avatar from content */}
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Section Number: {sec.num}
                    </Typography>
                    <SupervisorName userId={sec.userId} />
                    <SectionForm
                      section={sec}
                      token={token}
                      onUpdateSection={handleSectionUpdate}
                    />
                  </Box>
                </Paper>
              </Grid>
            )
        )}
      </Grid>
    </Container>
  );
};

export default SectionRegistration;
