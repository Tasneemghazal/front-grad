// SupervisorTab2.jsx
import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BasicDateCalendar from "../../shared/BasicDateCalender.jsx";
import TaskCard from "../../shared/TaskCard.jsx";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import SpringModal from "../../shared/SpringModal.jsx";
import EditDeleteTask from "./EditDeleteTask.jsx";

export default function SupervisorTab2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    // Add delete logic here
    console.log("Delete action triggered");
    closeModal(); // Close modal after deletion
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
          Add Task
        </Typography>
      </Box>
      <Grid container>
        <Grid item md={7}>
          <Grid container spacing={2}>
            <SpringModal closeModal={closeModal} isModalOpen={isModalOpen} modalContent={<EditDeleteTask closeModal={closeModal} onClickDelete={onClickDelete} />} />
            <Grid item md={6} onClick={openModal}>
              <TaskCard />
            </Grid>
            <Grid item md={6} onClick={openModal}>
              <TaskCard />
            </Grid>
            <Grid item md={6} onClick={openModal}>
              <TaskCard />
            </Grid>
          </Grid>
          <Box sx={{ pt: 2 }}>
            <Link to='addTask'>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(43, 1, 62, 0.7)",
                  "&:hover": { backgroundColor: "rgba(43, 1, 62, 0.8)" },
                }}
              >
                Add Task
                <AddCircleIcon sx={{ fontSize: 30, ml:1 }}/>
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item md={5}>
          <BasicDateCalendar
            style={{ border: "1px solid rgba(43, 1, 62, 0.4)" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
