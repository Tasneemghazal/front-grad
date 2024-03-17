import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InputCom from '../../shared/InputCom.jsx'
import { useFormik } from 'formik';
import axios from 'axios'; // don't forget to import axios if you haven't already

export default function Department() {
    const initialValues = {
        name: "",
    };
    const token = localStorage.getItem("userToken");
    const onSubmit = async (values) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/admin/addDepartment`, values, {
                headers: { token: `Bearer ${token}` },
            });
            console.log(data)
            if (data.message === "success") {
                alert(data.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnBlur: true,
        validateOnChange: false,
    });

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ml: { xs: 0, md: 20 },
        }}>
            <Typography variant="h3" sx={{ textAlign: "center", fontSize: "30px", my: 2, fontWeight: "bold" }}>
                Departments
            </Typography>
            <Box sx={{ textAlign: "center" }}> {/* Center the contents horizontally */}
                <form onSubmit={formik.handleSubmit}>
                    <InputCom
                        type="text"
                        placeholder="department"
                        name="name"
                        title="Department"
                        value={formik.values.name}
                        onChange={formik.handleChange} // Use handleChange from Formik
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "rgba(43, 1, 62, 0.5)",
                            "&:hover": {
                                backgroundColor: "rgba(43, 1, 62, 0.8)",
                            },
                        }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    )
}
