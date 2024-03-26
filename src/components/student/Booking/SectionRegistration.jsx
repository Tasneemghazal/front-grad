import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Box, Grid, Paper, Button } from "@mui/material";
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

  const handleSectionUpdate = (updatedSection) => {
    setSection(prevSections =>
      prevSections.map(sec =>
        sec._id === updatedSection._id ? updatedSection : sec
      )
    );
  };

  return (
    <Container>
      <ToastContainer />
   <Title title={"Book Your Supervisor"} />
      <Grid container justifyContent="center" spacing={2}>
        {section.map((sec) => (
          sec.visible && (
            <Grid key={sec._id} item xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7f668b",
                    marginBottom: 2,
                  }}
                >
                  <EventIcon sx={{ color: "white" }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Section Number: {sec.num}
                </Typography>
                <SupervisorName userId={sec.userId} />
                <SectionForm section={sec} token={token} onUpdateSection={handleSectionUpdate} />
              </Paper>
            </Grid>
          )
        ))}
      </Grid>
    </Container>
  );
};

export default SectionRegistration;
