import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
export default function ConfirmDelete({ handleDeleteConfirm, closeConfirmationModal,closeModal }) {
  const handleNoClick = () => {
    closeConfirmationModal();
    closeModal();
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ py: 2, fontWeight: "bold" }}>Are you sure you want to delete?</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant='contained' color="success" onClick={handleDeleteConfirm}>Yes</Button>
          <Button variant='contained' color="error" onClick={handleNoClick}>No</Button>
        </Box>
      </Box>
    </Container>
  );
}

