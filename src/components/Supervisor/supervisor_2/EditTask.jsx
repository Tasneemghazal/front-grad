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
import { useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContextProvider.jsx";
import { format } from 'date-fns';
export default function EditTask() {
  const{id}=useParams();
  const { getSuperSections } = useContext(SectionContext);
  const { getTaskById } = useContext(TaskContext);
  const token = localStorage.getItem("userToken");
  const [sections, setSections] = useState([]);
  const [selectedThesis, setSelectedThesis] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const theme = useTheme();
  const { showSnackbar } = useSnackbar();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  async function fetchTaskData(taskId) {
    try {
      const res = await getTaskById(taskId);
      setStartDate(res.tasks.startDate);
      setEndDate(res.tasks.endDate);
  
      formik.setValues({
        txt: res.tasks.txt,
        sections: res.tasks.sections,
        task: res.tasks.file,
      });
    } catch (error) {
      console.error('Error fetching task data:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const sec = await getSuperSections();
      setSections(sec);
      console.log(sections);
    };
    fetchData();
    fetchTaskData(id);
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
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/supervisor/editTask/${id}`, formData, {
        headers: { token: `Bearer ${token}` },
      });
      console.log(data)
      if (data.message === 'success') {
        showSnackbar({ message: 'task updated successfully', severity: 'success' });
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
      key={index}
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
          }}
        >
          Edit Task
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={isSmallScreen ? 12 : 7} sx={{mt:{md:4}}}>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
            <BasicDateTimePicker label="From" onChange={setStartDate} value={startDate} />
            <BasicDateTimePicker label="To" onChange={setEndDate} value={endDate}/>
            <SelectCom
              labelId="sections-label"
              id="sections"
              value={formik.values.sections || []} 
              onChange={handleSectionChange}
              label="sections"
              options={sections.map((sec) => ({
                value: sec._id,
                label: sec.num,
              }))}
              multiple // Add the multiple prop here
            />
            <UploadFile
              onFileChange={setSelectedThesis}
              buttonText="Upload Task File"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(43, 1, 62, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(43, 1, 62, 0.8)",
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
                src="/image/editTask.png"
                alt="Add Task"
                style={{ width: "100%", height: "auto", borderRadius: "50%", border:"2px solid black"}}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

