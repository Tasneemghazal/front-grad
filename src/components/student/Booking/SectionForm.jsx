import React, { useState, useEffect, useContext } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import InputCom from "../../shared/InputCom.jsx";
import { useFormik } from "formik";
import { userContext } from "../../context/StudentContextProvider.jsx";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";

const SectionForm = ({ section, token, onUpdateSection }) => {
  const { extractNameFromToken } = useContext(userContext);
  const [studentId, setStudentId] = useState("");
  const { showSnackbar } = useSnackbar();
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
            width: "100%",
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
