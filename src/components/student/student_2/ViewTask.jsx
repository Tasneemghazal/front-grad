import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContextProvider.jsx";
import { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { userContext } from "../../context/StudentContextProvider.jsx";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewTask({ open, onClose, taskId }) {
  const { getTaskById } = useContext(TaskContext);
  const { getStudentSection } = useContext(userContext);
  const [sectionId, setSectionId] = useState();
  const [homeWork, setHomeWork] = useState();

  const getSection = async () => {
    const mySection = await getStudentSection();
    setSectionId(mySection.section._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const task = await getTaskById(taskId);
      setHomeWork(task.tasks);
    };
    fetchData();
    getSection();
  }, [getTaskById, taskId, getSection]);

  return (
    <Container>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        classes={{ paper: "dialog-paper" }}
      >
        <AppBar
          sx={{ position: "relative", backgroundColor: "rgba(43, 1, 62, 0.4)" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              You have a new assignment!
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    width: "60%", 
    margin: "auto", 
    flexDirection: "column",
    height: "100%",
    backgroundImage:
      "linear-gradient(rgba(255,255,255, 0.8),rgba(255,255,255, 0.8)),url('/image/viewTask.png')",
    backgroundPosition: "center",
   
  }}
>

  
          <Box
            sx={{
             
              p: 3,
              border: "2px solid rgba(43, 1, 62, 0.4)",
              textAlign: "center",
              borderRadius: "20px",
              m: 3,
              backgroundColor: "rgba(255, 255, 255)",
            }}
          >
            <Typography sx={{ fontWeight: "bold", py: 1 }} variant="h4">
              Let's do it !
            </Typography>
            <Typography sx={{ color: "black" }}>
              <span>{homeWork && homeWork.txt}</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "rgba(43, 1, 62, 0.4)",
                p: 1,
                m: 2,
                borderRadius: "15px",
              }}
              onClick={() => {
                if (homeWork && homeWork.file) {
                  window.open(homeWork.file, "_blank");
                }
              }}
            >
              <DownloadForOfflineIcon sx={{ mr: 1 }} />
              <Typography
                variant="body1"
                component="a"
                href={homeWork && homeWork.file}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Download File
              </Typography>
            </Box>

           

            <Box sx={{ mt: 2 }}>
              <Link to={`submitTask/${sectionId}/${taskId}`}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(43, 1, 62, 0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(43, 1, 62, 0.8)",
                    },
                  }}
                >
                  Add your Submission
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{textAlign:"center",fontWeight:"bold"}}>
              Feedback: {homeWork && homeWork.feedback}
            </Box>
          <Box sx={{textAlign:"center",fontWeight:"bold"}}>
              End at: {homeWork && homeWork.endDate.split("T")[0]}/
              {homeWork && homeWork.endDate.split("T")[1].slice(0, -1)}
            </Box>
        </Box>
      </Dialog>
    </Container>
  );
}
