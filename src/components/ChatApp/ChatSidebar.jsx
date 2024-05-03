import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";

const ChatSidebar = () => {
  return (
    <Paper
      style={{
        background: "#ad94b8",
        color: "#fff",
        height: "90vh",
        paddingBottom: "14px",
        paddingTop: "20px",
        borderLeft: "3px solid gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://res.cloudinary.com/djtwchvuu/image/upload/v1708465310/samples/landscapes/architecture-signs.jpg"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          paddingBottom: "30px",
        }}
      />
      <Typography
        variant="h6"
        style={{ alignItems: "center", display: "flex" }}
      >
        <SchoolIcon style={{ marginRight: "20px", fontSize: "28px" }} /> Section
        Number
      </Typography>
      <Typography variant="subtitle1" style={{ fontSize: "20px" }}>
        2
      </Typography>
      <Typography
        variant="h6"
        style={{
          paddingTop: "15px",
          marginTop: "20px",
          alignItems: "center",
          display: "flex",
        }}
      >
        <GroupIcon style={{ marginRight: "20px", fontSize: "28px" }} /> Team
        Member
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Tasneem" />
        </ListItem>
        <ListItem>
          <ListItemText primary="leen" />
        </ListItem>
        <ListItem>
          <ListItemText primary="fatima" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ChatSidebar;
