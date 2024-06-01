import { Avatar, Box, Grid, List, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../context/ChatContextProvider.jsx";
import { Link } from "react-router-dom";

const Sidebar = styled(Grid)({
  width: "20%", // Sidebar width
  backgroundColor: "#135D66",
});

export default function ChatSidBar() {
  const { getMyChat, chatUsers, stdSection, superSections, role, getChatSection, chatSec } =
    useContext(ChatContext);
  const [randomAvatar, setRandomAvatar] = useState(null); // State to store the random avatar

  useEffect(() => {
    const fetchData = async () => {
      await getMyChat();
      await getChatSection();
      // Select a random avatar when the component mounts
      setRandomAvatar(getRandomAvatar());
    };
    fetchData();
  }, []);

  // Function to get a random avatar from the avatarImages array
  const getRandomAvatar = () => {
    const avatarImages = [
      "/image/class.png",
      "/image/class2.png",
      "/image/class3.png",
      "/image/class4.png",
      "/image/class5.png",
      "/image/class6.png",
      "/image/class7.png",
      "/image/class8.png",
      "/image/class9.png",
    ];
    return avatarImages[Math.floor(Math.random() * avatarImages.length)];
  };

  return (
    <Sidebar item>
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Avatar
          src={randomAvatar} // Use the randomly selected avatar
          alt="Avatar"
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
            border: "1px solid #000",
          }}
        />
        {role&&!role.includes("supervisor") ? (
          <>
            <Typography variant="h5" sx={{ m: 2, fontWeight: "bold" }}>
              Section {stdSection}
            </Typography>
            <List sx={{ mt: 5, fontWeight: "bold", textAlign: "center" }}>
              <Typography variant="h5" sx={{ m: 2, fontWeight: "bold" }}>
                Members:
              </Typography>
              {chatUsers.map((user) => (
                <Typography key={user._id}>{user.name}</Typography>
              ))}
            </List>
          </>
        ) : (
          <List sx={{ mt: 5, fontWeight: "bold", textAlign: "center" }}>
            {chatSec.map((sec) => (
              <Link to={sec.chatId} style={{ color: "black", textDecoration: "none" }} key={sec.chatId}>
                <Typography sx={{ fontSize: "24px", backgroundColor: '#E3FEF7', borderRadius: "10px", mb: "10px" }}>Section: {sec.sectionNum}</Typography>
              </Link>
            ))}
          </List>
        )}
      </Box>
    </Sidebar>
  );
}
