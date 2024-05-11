import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Home from "@mui/icons-material/home";
import { Create } from "@mui/icons-material";
import HailIcon from "@mui/icons-material/Hail";
import PersonIcon from "@mui/icons-material/Person";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import DomainAddIcon from '@mui/icons-material/DomainAdd'
import CampaignIcon from '@mui/icons-material/Campaign';
import { Link } from "react-router-dom";
export default function SideBar({ noneOrBlock, drawerType, hideDrawer }) {
  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
          backgroundColor: "rgba(43, 1, 62, 0.5)",
        },
        display: { xs: noneOrBlock, lg: "block" },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer();
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Avatar src="image/ptuk.jpg" sx={{ mb: 2 }}></Avatar>
        <Typography color="#fff">PTUK</Typography>
      </Box>
      <Divider />
      <List>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="createUser" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Create style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Create User" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="departmentheads"
          style={{ color: "white", textDecoration: "none" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Heads of Departments" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="supervisors"
          style={{ color: "white", textDecoration: "none" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HailIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Supervisors" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="createStudent" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Create style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Create Student" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="students" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="department" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DomainAddIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Departments" />
            </ListItemButton>
          </ListItem>
        </Link>
    
      
      
        <Link to="projects" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="announcements" style={{ color: "white", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Announcement" />
            </ListItemButton>
          </ListItem>
        </Link>
       
      </List>
    </Drawer>
  );
}