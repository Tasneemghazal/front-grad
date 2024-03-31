import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import TaskCard from "../../shared/TaskCard.jsx";
import ViewTask from "./ViewTask.jsx";

export default function Task({ tasks }) {
  console.log(tasks)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleOpenDialog = (taskId) => {
    setSelectedTaskId(taskId);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedTaskId(null);
    setDialogOpen(false);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {tasks&&tasks.map((task) => (
          <Grid item xs={6} key={task._id} onClick={() => handleOpenDialog(task._id)}>
            <TaskCard
              txt={task.txt}
              endDate={task.endDate}
            />
          </Grid>
        ))}
      </Grid>
      <ViewTask open={dialogOpen} onClose={handleCloseDialog} taskId={selectedTaskId} />
    </Box>
  );
}
