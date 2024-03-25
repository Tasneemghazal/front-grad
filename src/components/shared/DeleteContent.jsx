import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function DeleteContent({ handleRejectConfirmation, setIsModalOpen }) {
    return (
        <Box sx={{textAlign:"center"}}>
            <Typography>Are you sure ?</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button 
                    onClick={handleRejectConfirmation} 
                    sx={{
                        border: "1px solid red",
                        color: "white",
                        backgroundColor: "red",
                        '&:hover': {
                            backgroundColor: "rgba(255, 0, 0, 0.7)",
                        },
                    }}
                >
                    Yes
                </Button>
                <Button 
                    onClick={() => setIsModalOpen(false)}
                    sx={{
                        border: "1px solid #1b5e20",
                        color: "white",
                        backgroundColor: "#1b5e20",
                        '&:hover': {
                            backgroundColor: "#4caf50",
                        },
                    }}
                >
                    No
                </Button>
            </Box>
        </Box>
    );
}
