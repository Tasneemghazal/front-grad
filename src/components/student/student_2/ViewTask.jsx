import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid, Paper } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import UploadFile from '../../shared/UploadFile.jsx';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewTask({ open, onClose }) {
  return (
    <Container>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        classes={{ paper: 'dialog-paper' }} // Add custom class to the dialog paper
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
              Assignment 1
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
       
          
         <Grid container>
          <Grid item md={7}>
          <Box
            sx={{
              display:"flex",justifyContent:"center", 
              flexDirection:"column",
              height:"100%"
            }}
          >
            <Box sx={{p:3 ,border:"1px solid rgba(43, 1, 62, 0.4)",textAlign:"center",borderRadius:"20px",m:3}}>
              <Typography sx={{fontWeight:"bold",py:1}} variant="h4">Assignment 3</Typography>
              <Typography sx={{ color: "black" }}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat officia laboriosam assumenda, facere enim, aspernatur nulla quasi voluptatibus, dolorum dolore dolores nobis aut consequatur fugiat. Dignissimos, optio? Vero, pariatur.</span>
              </Typography>
              <Box>Assignment file</Box>
              <UploadFile/>
              
              <Box>Time</Box>
              <Box>Mark</Box>
            </Box>
          </Box>
          </Grid>
          <Grid item md={5}>
          <Box sx={{width:"100%"}}>
          <img src="/image/viewTask.png" alt="" style={{width:"100%"}}/>
          </Box>
          </Grid>
         </Grid>
        
      </Dialog>
    </Container>
  );
}
