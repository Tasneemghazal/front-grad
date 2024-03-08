import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import TaskCard from '../../shared/TaskCard.jsx'
import ViewTask from './ViewTask.jsx';

export default function Task() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };
  return (
    <Box>
    <Grid container spacing={2}>
        <Grid item xs={6} onClick={handleOpenDialog}>
            <TaskCard />
        </Grid>
        <Grid item xs={6} onClick={handleOpenDialog}>
            <TaskCard/>
        </Grid>
        <Grid item xs={6} onClick={handleOpenDialog}>
            <TaskCard/>
        </Grid>
    </Grid>
    <ViewTask open={dialogOpen} onClose={handleCloseDialog} />
    </Box>
  )
}
