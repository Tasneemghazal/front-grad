import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box,Button,Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from '../../context/SnackbarProvider.jsx';
import { useContext } from 'react';
import { RequestContext } from '../../context/RequestContextProvider.jsx';

export default function Confirm({ rowId, sectionId,closeModal}) {
    const [student, setStudent] = useState([""]);
    const token = localStorage.getItem("userToken");
    const { showSnackbar } = useSnackbar();
    const{getRequestById,students } = useContext(RequestContext);
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await getRequestById(rowId);
            console.log(req)
        };
        fetchData();
    }, [rowId]);
    
    
    const handleSubmit = async () => {
        try { 
            const req = {
                students:students,
                requestId: rowId,
                sectionId,
              };
              console.log(req)
<<<<<<< HEAD
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/confirm`, req,{ headers: { token: `Bearer ${token}` } });
            closeModal();
=======
              const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/supervisor/confirm`, req,{ headers: { token: `Bearer ${token}` } });
              closeModal();
>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
            if (data.message === "success") {
                showSnackbar({ message: "Request confirmed successfully", severity: "success" });
              }
        } catch (error) {
            console.error('Error confirming request:', error);
        }
    };

    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Avatar src="/image/AddSection.png" alt="Toto" sx={{ width: "15%", height: "15%", margin: "auto" }} />
            <Typography sx={{ borderBottom: "1px solid rgba(43, 1, 62, 0.4)", my: 4, fontSize: "80%", fontWeight: "bold" }}>Are you sure to confirm this request?</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button 
                    onClick={handleSubmit} 
                    sx={{
                        border: "1px solid green",
                        color: "white",
                        backgroundColor: "green",
                        '&:hover': {
                            backgroundColor: "rgba(255, 0, 0, 0.7)",
                        },
                    }}
                >
                    Yes
                </Button>
                <Button 
                    onClick={closeModal} 
                    sx={{
                        border: "1px solid red",
                        color: "white",
                        backgroundColor: "red",
                        '&:hover': {
                            backgroundColor: "rgba(255, 0, 0, 0.7)",
                        },
                    }}
                >
                    No
                </Button>
                </Box>
        </Box>
    );
}
