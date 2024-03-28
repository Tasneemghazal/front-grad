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
import UploadFile from "../../shared/UploadFile.jsx";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContextProvider.jsx";
import { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewTask({ open, onClose, taskId }) {
  const { getTaskById } = useContext(TaskContext);
  const [homeWork, setHomeWork] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const task = await getTaskById(taskId);
      setHomeWork(task.tasks);
      console.log(task.tasks);
    };
    fetchData();
  }, [getTaskById, taskId]);
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

        <Grid container>
          <Grid item md={7} width={"100%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(43, 1, 62, 0.4)",
                  textAlign: "center",
                  borderRadius: "20px",
                  m: 3,
                }}
              >
                <Typography sx={{ fontWeight: "bold", py: 1 }} variant="h4">
                  Let's do it
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

                <Box>
                  End at: {homeWork && homeWork.endDate.split("T")[0]}/
                  {homeWork && homeWork.endDate.split("T")[1].slice(0, -1)}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box sx={{ width: "100%" }}>
              <img src="/image/viewTask.png" alt="" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
}
