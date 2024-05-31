import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,

  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InputCom from "../../shared/InputCom.jsx";
import UploadFile from "../../shared/UploadFile.jsx";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";
import { useParams } from "react-router-dom";

export default function SubmitTask({ title }) {
  const {sectionId, taskId} = useParams();
  const token = localStorage.getItem("userToken");
  const [selectedThesis, setSelectedThesis] = useState(null);
  const theme = useTheme();
  const { showSnackbar } = useSnackbar();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  const initialValues = {
    txt: "",
    file: "",
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('txt', values.txt);
    formData.append('task', selectedThesis);
  
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/student/submitTask/${sectionId}/${taskId}`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      console.log(data)
      if (data.message === 'success') {
        showSnackbar({ message: 'task submitted successfully', severity: 'success' });
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };
  

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
    {
      id: "txt",
      type: "text",
      name: "txt",
      title: "Text",
      value: formik.values.txt,
    },
  ];
  const renderInputs = inputs.map((input, index) => (
    <InputCom
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      placeholder={input.title}
      onChange={input.onChange || formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            pb: 2,
            fontSize: { xs: "40px", md: "60px" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7} sx={{mt:{sm:5,md:15}}}>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
            <UploadFile
              onFileChange={setSelectedThesis}
              buttonText="Upload Thesis File"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#135D66",
                    "&:hover": {
                      backgroundColor: "#77B0AA",
                    },
                width: "100%",
                mt: 1,
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>

        {!isSmallScreen && (
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: 3,
              }}
            >
              <img
                src="/image/addTask.png"
                alt="Add Task"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
