import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DatasetLinkedOutlinedIcon from "@mui/icons-material/DatasetLinkedOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import { Container, Typography } from "@mui/material";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding: 3 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Social Media
            </Typography>
            <Typography sx={{ py: 1 }}>
              You can contact us through social media sites
            </Typography>
            <Box>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#4caf50 !important",
                    transform: "translateY(2px)",
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <Link to="https://www.facebook.com/ptukedups?mibextid=ZbWKwL">
                <IconButton
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#01579b !important",
                      transform: "translateY(2px)",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Link>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#9e9e9e !important",
                    transform: "translateY(2px)",
                  },
                }}
              >
                <XIcon />
              </IconButton>
              <Link to="https://www.linkedin.com/company/palestine-technical-university---kadoorie/">
                <IconButton
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#0d47a1 !important",
                      transform: "translateY(2px)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact us
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 360 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PlaceOutlinedIcon
                          sx={{
                            color: "white",
                            "&:hover": {
                              color: "red !important",
                              transform: "translateY(2px)",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Jaffa Street, Tulkarm, Palestine" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MarkEmailUnreadOutlinedIcon
                          sx={{
                            color: "white",
                            "&:hover": {
                              color: "blue !important",
                              transform: "translateY(2px)",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="info@ptuk.edu.ps" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PermPhoneMsgOutlinedIcon
                          sx={{
                            color: "white",
                            "&:hover": {
                              color: "#80cbc4 !important",
                              transform: "translateY(2px)",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="+970 (0)9 2688199" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FaxOutlinedIcon
                          sx={{
                            color: "white",
                            "&:hover": {
                              color: "#b388ff !important",
                              transform: "translateY(2px)",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="+970 (0)9 2677922" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Useful links
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 360 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <Link
                    to="https://ptuk.edu.ps/ar/#"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DatasetLinkedOutlinedIcon
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "green !important",
                                transform: "translateY(2px)",
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Main university website" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="https://lms.ptuk.edu.ps/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <CoPresentOutlinedIcon
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "orange !important",
                                transform: "translateY(2px)",
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="PTUK LMS" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="https://library.ptuk.edu.ps/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem disablePadding sx={{}}>
                      <ListItemButton>
                        <ListItemIcon>
                          <LocalLibraryOutlinedIcon
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "#00838f !important",
                                transform: "translateY(2px)",
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Library website" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="https://app.ptuk.edu.ps/PTUK-stuff/mod_structure/colleges.php"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <HailOutlinedIcon
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "#00b0ff !important",
                                transform: "translateY(2px)",
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Staff directory" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </nav>
              <Divider />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Find Us On Google Map
            </Typography>
            <Box sx={{ padding: 3, margin: 2 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.949589762709!2d35.025401925656716!3d32.313208007546585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d177a1c3fc39b%3A0xb19b1b0e711b2107!2sPalestine%20Technical%20University%20%E2%80%93%20Kadoorie!5e0!3m2!1sar!2s!4v1707117030169!5m2!1sar!2s"
                style={{ borderRadius: 5, borderBlockStyle: "double" }}
                width="100%"
                height="80%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: 3, color: "#dad3d3" }}
        >
          Copyright ©2024 All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
