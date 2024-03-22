import EventIcon from "@mui/icons-material/Event";
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 

const SectionRegistration = () => {
  const [sections, setSections] = useState([]);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/v1/grad/head/getHeadSections") 
      .then((response) => {
        setSections(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching sections data:", error);
      });
  }, []);

  const handleStudentDataChange = (event, index, field) => {
    const newStudentData = [...studentData];
    newStudentData[index][field] = event.target.value;
    setStudentData(newStudentData);
  };

  const handleSubmit = () => {
    console.log("Booking Done", studentData);
  };

  return (
    <Container>
      <ToastContainer />
      <Box sx={{ width: { xs: "60%", md: "40%" }, my: 5 }}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            borderBottom: "2px solid rgba(43, 1, 62, 0.4)",
            fontSize: { xs: 15, md: 40 },
          }}
        >
          Book Your Supervisor
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing={2}>
        {sections.map((section) => (
          <Grid key={section._id} item xs={12} sm={6} md={4}>
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
                Section Number: {section.num}
              </Typography>
              <Typography sx={{ fontStyle: "italic" }}>
                Supervisor: {section.depId}
              </Typography>

              {studentData.map((student, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <TextField
                    label={`Group Member`}
                    variant="outlined"
                    onChange={(event) =>
                      handleStudentDataChange(event, index, "name")
                    }
                    sx={{ marginTop: 2, width: "70%" }}
                  />
                </div>
              ))}

              <Button
                onClick={handleSubmit}
                sx={{
                  marginTop: 2,
                  background: "#7f668b",
                  color: "white",
                  "&:hover": {
                    background: "#624a73",
                  },
                }}
              >
                Booking
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionRegistration
