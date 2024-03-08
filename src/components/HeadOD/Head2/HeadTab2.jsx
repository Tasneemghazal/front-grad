import { Box, Button, Container, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import InputCom from "../../shared/InputCom.jsx";
import BasicTimePicker from "../../shared/BasicTimePicker.jsx";
import BasicDatePicker from "../../shared/BasicDatePicker.jsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import UploadFile from "../../shared/UploadFile.jsx";

export default function HeadTab2() {
  const [studentNames, setStudentNames] = useState([""]);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleAddStudent = () => {
    setStudentNames([...studentNames, ""]);
  };

  const handleRemoveStudent = () => {
    if (studentNames.length > 1) {
      setStudentNames(studentNames.slice(0, -1));
    }
  };

  const handleStudentNameChange = (index, newName) => {
    const newStudentNames = [...studentNames];
    newStudentNames[index] = newName;
    setStudentNames(newStudentNames);
  };

  return (
    <Container>
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
          Add a new section
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={isSmallScreen ? 12 : 7}>
            <InputCom placeholder={"Section name"} type={"text"} />
            <InputCom placeholder={"Section number"} type={"number"} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <BasicTimePicker title={"Time for this section"} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BasicDatePicker title={"Day of this section"} />
              </Grid>
            </Grid>
            <InputCom placeholder={"Supervisor name"} type={"text"} />
            <Grid container spacing={2}>
              {studentNames.map((studentName, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <InputCom
                    placeholder={`Student ${index + 1} Name`}
                    type={"text"}
                    value={studentName}
                    onChange={(e) =>
                      handleStudentNameChange(index, e.target.value)
                    }
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={6}>
                    <IconButton
                      onClick={handleAddStudent}
                      size="large"
                      sx={{
                        width: "40%",
                        color: "black",
                        "&:hover": { color: "rgba(43, 1, 62, 0.8)" },
                      }}
                    >
                      <AddCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <IconButton
                      onClick={handleRemoveStudent}
                      size="large"
                      sx={{
                        width: "40%",
                        color: "black",
                        "&:hover": { color: "rgba(43, 1, 62, 0.8)" },
                      }}
                    >
                      <RemoveCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <UploadFile />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(43, 1, 62, 0.5)",
                width: "100%",
                "&:hover": {
                  backgroundColor: "rgba(43, 1, 62, 0.8)",
                },
              }}
            >
              Submit
            </Button>
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
                  src="/image/AddSection.png"
                  alt="Add Task"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}
