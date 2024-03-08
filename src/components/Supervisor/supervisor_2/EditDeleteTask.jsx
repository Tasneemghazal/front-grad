// EditDeleteTask.jsx
import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SpringModal from '../../shared/SpringModal.jsx';
import ConfirmDelete from '../../shared/ConfirmDelete.jsx';

export default function EditDeleteTask({ closeModal, onClickDelete }) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    onClickDelete();
    closeConfirmationModal();
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ py: 2, fontWeight: "bold" }}>What do you want to do?</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to='edittask'>
            <Button variant='contained' color="success" onClick={closeModal}>Edit</Button>
          </Link>
          <Button variant='contained' color="error" onClick={openConfirmationModal}>Delete</Button>
        </Box>
      </Box>

      {/* Confirmation Modal */}
      <SpringModal
        isModalOpen={isConfirmationModalOpen}
        closeModal={closeConfirmationModal}
        modalContent={<ConfirmDelete handleDeleteConfirm={handleDeleteConfirm} closeConfirmationModal={closeConfirmationModal} closeModal={closeModal}/>
          // <Box>
          //   <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Are you sure you want to delete this task?</Typography>
          //   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          //     <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Yes</Button>
          //     <Button variant="contained" onClick={closeConfirmationModal}>No</Button>
          //   </Box>
          // </Box>
        }
      />
    </Container>
  );
}

