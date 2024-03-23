import EventIcon from "@mui/icons-material/Event";
import { useState, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputCom from "../../shared/InputCom.jsx";
import { useFormik } from "formik";
import { userContext } from "../../context/StudentContextProvider.jsx";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import { UserContext } from "../../context/UserContextProvider.jsx";

const SectionRegistration = () => {
  const token = localStorage.getItem("userToken");
  const [section, setSection] = useState([]);
  const { getSections } = useContext(SectionContext);
  const {extractDepIdFromToken}= useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sections = await getSections();
        const depSections = sections.filter(sec => sec.depId === extractDepIdFromToken() )
        setSection(depSections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };
   
    fetchData();
  }, [getSections]);

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
                <SectionForm section={sec} token={token} />
              </Paper>
            </Grid>
          )
        ))}
      </Grid>
    </Container>
  );
};

const SupervisorName = ({ userId }) => {
  const { getUserById } = useContext(UserContext);
  const [supervisorName, setSupervisorName] = useState("");

  useEffect(() => {
    const fetchSupervisorName = async () => {
      try {
        const name = await getUserById(userId);
        setSupervisorName(name.user.name);
      } catch (error) {
        console.error("Error fetching supervisor name:", error);
      }
    };

    fetchSupervisorName();
  }, [getUserById, userId]);

  return (
    <Typography sx={{ fontStyle: "italic" }}>
      Supervisor: {supervisorName}
    </Typography>
  );
};

const SectionForm = ({ section, token }) => {
  const { extractNameFromToken } = useContext(userContext);
  const [studentId, setStudentId] = useState("");
  const initialValues = { text: "" };

  useEffect(() => {
    const fetchStudentId = async () => {
      try {
        const name = extractNameFromToken();
        setStudentId(name._id);
      } catch (error) {
        console.error("Error fetching student id:", error);
      }
    };

    fetchStudentId();
  }, [extractNameFromToken]);

 const onSubmit = async (values) => {
  try {
    const data = {
      text: values.text,
      studentId: studentId,
      sectionId: section._id,
    };

    const response = await axios.post(
      "http://localhost:3000/api/v1/grad/student/bookSection",
      data,
      { headers: { token: `Bearer ${token}` } }
    );

    // Check if booking was successful
    if (response.data.success) {
      // Update the visibility of the booked section to false
      setSection(prevSections => prevSections.map(sec => {
        if (sec._id === section._id) {
          return { ...sec, visible: false };
        }
        return sec;
      }));
      
      console.log("Booking successful");
    } else {
      console.log("Booking failed");
    }
  } catch (error) {
    console.log("Error occurred:", error);
  }
};


  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputCom
        type="text"
        placeholder="Enter your info"
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text}
      />
      <Box sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          sx={{
            border: "1px solid rgba(43, 1, 62, 0.4)",
            color: "white",
            backgroundColor: "rgba(43, 1, 62, 0.7)",
            '&:hover': {
              backgroundColor: "rgba(43, 1, 62, 0.9)",
            },
          }}
        >
          Book
        </Button>
      </Box>
    </form>
  );
};

export default SectionRegistration;
