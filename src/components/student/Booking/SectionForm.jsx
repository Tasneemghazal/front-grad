import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import axios from "axios";
import InputCom from "../../shared/InputCom.jsx";
import { useFormik } from "formik";
import { userContext } from "../../context/StudentContextProvider.jsx";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const SectionForm = ({ section, token, onUpdateSection }) => {
  const { extractNameFromToken } = useContext(userContext);
  const [students, setStudents] = useState([""]);
  const [studentId, setStudentId] = useState("");
  const { showSnackbar } = useSnackbar();

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
  
  const handleAddStudent = () => {
    setStudents([...students, ""]);
};

const handleRemoveStudent = () => {
    if (students.length > 1) {
        setStudents(students.slice(0, -1));
    }
};

const handleStudentNumChange = (index, newNum) => {
    const newGroup = [...students];
    newGroup[index] = newNum;
    setStudents(newGroup);
};

  const onSubmit = async () => {
    try {
      const data = {
        students,
        studentId: studentId,
        sectionId: section._id,
      };

      const response = await axios.post(
        "http://localhost:3000/api/v1/grad/student/bookSection",
        data,
        
        { headers: { token: `Bearer ${token}` } }
       
      );
      console.log(response)

      if (response.data.message === "success") {
        // Update the visibility of the booked section to false
        onUpdateSection({ ...section, visible: false });
        console.log("Booking successful");
        showSnackbar({ message: "Section booking successfully", severity: "success" });
      } else {
        console.log("Booking failed");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues: { students },
    onSubmit,
    validateOnChange: false,
});

  return (
    <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
        {students.map((studentNum, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <InputCom
                    placeholder={`Student ${index + 1} Number`}
                    type="text"
                    value={studentNum}
                    onChange={(e) => handleStudentNumChange(index, e.target.value)}
                />
            </Grid>
        ))}
        <Grid item xs={12} sm={6}>
            <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                    <IconButton onClick={handleAddStudent} size="large" sx={{ width: "40%", color: "rgba(43, 1, 62, 0.5)", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                        <AddCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <IconButton onClick={handleRemoveStudent} size="large" sx={{ width: "40%", color: "rgba(43, 1, 62, 0.5)", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                        <RemoveCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <Box>
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

export default SectionForm;
