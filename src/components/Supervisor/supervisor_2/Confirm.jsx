import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import InputCom from '../../shared/InputCom.jsx';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useFormik } from 'formik';

export default function Confirm({ rowId, sectionId,closeModal }) {
    const [students, setStudents] = useState([""]);

    useEffect(() => {
        console.log(rowId);
    }, [rowId]);

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
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/confirm`, { requestId: rowId, sectionId, students });
            closeModal();
        } catch (error) {
            console.error('Error confirming request:', error);
        }
    };

    const formik = useFormik({
        initialValues: { students },
        onSubmit,
        validateOnChange: false,
    });

    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Avatar src="/image/AddSection.png" alt="Toto" sx={{ width: "15%", height: "15%", margin: "auto" }} />
            <Typography sx={{ borderBottom: "1px solid rgba(43, 1, 62, 0.4)", my: 4, fontSize: "80%", fontWeight: "bold" }}>Enter Students number for this section</Typography>
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
        </Box>
    );
}
