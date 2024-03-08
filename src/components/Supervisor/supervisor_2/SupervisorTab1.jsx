import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CardComp2 from '../../shared/CardComp2.jsx';
import SpringModal from '../../shared/SpringModal.jsx';

export default function SupervisorTab1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    // Add delete logic here
  };

  return (
    <Box>
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
          Your Sections
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CardComp2 title={"section 1"} description={"Description of section 1"} onClickLearnMore={openModal} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComp2 title={"section 1"} description={"Description of section 1"} onClickLearnMore={openModal}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComp2 title={"section 1"} description={"Description of section 1"} onClickLearnMore={openModal} />
        </Grid>
       
      </Grid>
      <SpringModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Box>
  );
}
