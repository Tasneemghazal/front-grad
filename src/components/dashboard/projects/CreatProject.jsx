import React, { useState } from "react";
import { Box, Button, FormGroup, Grid, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import { purple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import UploadFile from "../../shared/UploadFile.jsx";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function CreatProject() {
  const Dep = [
    "Computer Systems Engineering",
    "Electrical Engineering",
    "Energy Engineering",
    "Mechanical Engineering",
    "Electrical Eng-Industrial Automation",
    "Communications Engineering Technology",
    "Building Engineering",
    "Sustainable Energy Engineering",
    "Civil Engineering and Sustainable Structures/Co-operative",
    "Automotive Engineering/Co-operative",
  ];

  const [studentNames, setStudentNames] = useState([""]);

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: { xs: 0, md: 20 },
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <FormGroup>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: "30px",
              my: 2,
              fontWeight: "bold",
            }}
          >
            Add Project
          </Typography>
          <InputCom placeholder={"Project Name"} type={"text"} />
          <InputCom placeholder={"Supervisor"} type={"text"} />
          <Grid container spacing={2}>
            {studentNames.map((studentName, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <InputCom
                  placeholder={`Student ${index + 1} Name`}
                  type={"text"}
                  value={studentName}
                  onChange={(e) => handleStudentNameChange(index, e.target.value)}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <IconButton onClick={handleAddStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                    <AddCircleIcon sx={{ fontSize: 30 }}/>
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <IconButton onClick={handleRemoveStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": {color:"rgba(43, 1, 62, 0.8)" } }}>
                    <RemoveCircleIcon sx={{ fontSize: 30 }}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Dep}
            sx={{ my: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Departments" />
            )}
          />
          <UploadFile/>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(43, 1, 62, 0.5)",
              "&:hover": {
                backgroundColor:"rgba(43, 1, 62, 0.8)",
              },
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
}
