import { Box, Button, Container, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import InputCom from "../../shared/InputCom.jsx";
import BasicDateTimePicker from "../../shared/BasicDateTimePicker.jsx";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import UploadFile from "../../shared/UploadFile.jsx";

export default function AddTask({title}) {
    const [sectionNumber, setSectionNumber] = useState([""]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleAddSection = () => {
        setSectionNumber([...sectionNumber, ""]);
    };
  
    const handleRemoveSection = () => {
      if (sectionNumber.length > 1) {
        setSectionNumber(sectionNumber.slice(0, -1));
      }
    };
  
    const handleSectionNumberChange = (index, newNumber) => {
      const newSectionNumber = [...sectionNumber];
      newSectionNumber[index] = newNumber;
      setSectionNumber(newSectionNumber);
    };

    return (
        <Container>
            <Box>
                <Typography variant="h2" sx={{ fontWeight: "bold", pb: 2,fontSize:{xs:"40px",md:"60px"} }}>
                  {title}
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={isSmallScreen ? 12 : 7}>
                    <form action="">
                        <InputCom placeholder={"Title"} type={"text"} />
                        <BasicDateTimePicker label={"Submission Date"} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <BasicDateTimePicker label={"From"} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <BasicDateTimePicker label={"To"} />
                            </Grid>
                        </Grid>
                        <InputCom placeholder={"Description"} type={"text"} />
                        <Grid container spacing={2}>
                            {sectionNumber.map((section, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <InputCom
                                        placeholder={`Section ${index + 1}`}
                                        type={"text"}
                                        value={section}
                                        onChange={(e) => handleSectionNumberChange(index, e.target.value)}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6} sm={6}>
                                        <IconButton onClick={handleAddSection} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                                            <AddCircleIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <IconButton onClick={handleRemoveSection} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
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
                                "&:hover": {
                                    backgroundColor: "rgba(43, 1, 62, 0.8)",
                                },
                                width: "100%",
                                mt: 1
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>

                {!isSmallScreen && (
                    <Grid item xs={12} sm={5}>
                        <Box sx={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", pt: 3 }}>
                            <img src="/image/addTask.png" alt="Add Task" style={{ maxWidth: "100%", height: "auto" }} />
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
