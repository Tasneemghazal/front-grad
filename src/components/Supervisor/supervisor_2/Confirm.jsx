import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Grid, IconButton } from '@mui/material';
import InputCom from '../../shared/InputCom.jsx';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useFormik } from 'formik';

export default function Confirm({ rowId, sectionId }) {
    const [students, setStudents] = useState([""]);

    useEffect(() => {
        console.log(rowId);
    }, [rowId]);

    const handleAddStudent = () => {
        setStudents([...group, ""]);
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
            console.log(data);
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
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    {students.map((studentNum, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <InputCom
                                placeholder={`Student ${index + 1} Name`}
                                type="text"
                                value={studentNum}
                                onChange={(e) => handleStudentNumChange(index, e.target.value)}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={6}>
                                <IconButton onClick={handleAddStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                                    <AddCircleIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <IconButton onClick={handleRemoveStudent} size="large" sx={{ width: "40%", color: "black", "&:hover": { color: "rgba(43, 1, 62, 0.8)" } }}>
                                    <RemoveCircleIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
}
