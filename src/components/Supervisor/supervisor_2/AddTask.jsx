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
import BasicDateTimePicker from "../../shared/BasicDateTimePicker.jsx";
import UploadFile from "../../shared/UploadFile.jsx";
import { useFormik } from "formik";
import axios from "axios";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import SelectCom from "../../shared/SelectCom.jsx";
import { useSnackbar } from "../../context/SnackbarProvider.jsx";

export default function AddTask({ title }) {
  const { getSuperSections } = useContext(SectionContext);
  const token = localStorage.getItem("userToken");
  const [sections, setSections] = useState([]);
  const [selectedThesis, setSelectedThesis] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const theme = useTheme();
  const { showSnackbar } = useSnackbar();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchData = async () => {
      const sec = await getSuperSections();
      setSections(sec);
      console.log(sections);
    };
    fetchData();
  }, []);
  const initialValues = {
    txt: "",
    file: "",
    startDate: "",
    endDate: "",
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('txt', values.txt);
    formData.append('task', selectedThesis);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    sections.forEach((section, index) => {
      if (values.sections.includes(section._id)) {
        formData.append(`sections[${index}]`, section._id);
      }
    });
  
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/assignTask`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      console.log(data)
      if (data.message === 'success') {
        showSnackbar({ message: 'task added successfully', severity: 'success' });
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
      errors={formik.errors}
    />
  ));
  const handleSectionChange = (event) => {
    formik.setFieldValue("sections", event.target.value);
  };
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            pb: 2,
            fontSize: { xs: "40px", md: "60px" },
            pb:3
          }}
        >
          {title}
        </Typography>
      </Box>
     
      <Grid container spacing={3} >
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7}  >
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
            <BasicDateTimePicker label="From" onChange={setStartDate} flag={false}/>
            <BasicDateTimePicker label="To" onChange={setEndDate} flag={false}/>
            <SelectCom
              labelId="sections-label"
              id="sections"
              value={formik.values.sections || []} 
              onChange={handleSectionChange}
              label="sections"
              onBlur={formik.handleBlur}
              touched={formik.touched}
              errors={formik.errors}
              options={sections.map((sec) => ({
                value: sec._id,
                label: sec.num,
              }))}
              multiple // Add the multiple prop here
            />
            <UploadFile
              onFileChange={setSelectedThesis}
              buttonText="Upload assignment File"
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
                src="/image/newTask.png"
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
