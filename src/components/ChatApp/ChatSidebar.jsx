import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";

const ChatSidebar = () => {
  const [sectionDetails, setSectionDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/grad/chat/sectionDetails?sectionId={id}');
        setSectionDetails(response.data);
      } catch (error) {
        console.error('Error fetching section details:', error);
      }
    };

    fetchData();
  }, []);

  if (!sectionDetails) {
    return <div>Loading...</div>;
  }

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
        <SchoolIcon style={{ marginRight: "20px", fontSize: "28px" }} /> Section Number
      </Typography>
      <Typography variant="subtitle1" style={{ fontSize: "20px" }}>
        {sectionDetails.sectionNumber}
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
        <GroupIcon style={{ marginRight: "20px", fontSize: "28px" }} /> Team Member
      </Typography>
      <List>
        {sectionDetails.teamMembers.map((member, index) => (
          <ListItem key={index}>
            <ListItemText primary={member} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChatSidebar;
