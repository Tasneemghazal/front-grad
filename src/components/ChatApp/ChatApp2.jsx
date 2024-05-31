import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ChatContext } from '../context/ChatContextProvider.jsx';
import styled from 'styled-components';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const MessageArea = styled(List)({
  padding: 0,
});

const MessageItem = styled(ListItem)(({ isMyMessage }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: isMyMessage ? 'flex-start' : 'flex-end',
}));

const MessageText = styled(ListItemText)(({ isMyMessage }) => ({
  width: '60%',
  backgroundColor: isMyMessage ? 'lightgrey' : 'rgb(19 93 102)',
  color: isMyMessage ? '#000000' : '#ffffff',
  borderRadius: '10px',
  padding: '10px',
  marginBottom: '5px',
}));

const MessageInfo = styled.span({
  fontSize: '0.8rem',
  color: 'grey',
  margin: '3px',
});

const ChatApp2 = () => {
  const { getMessages, chatMsg } = useContext(ChatContext);
  const [userId, setUserId] = useState();
  const [chatId, setChatId] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      await getMessages(chatId);
    };

    const getMyChat = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/chat/fetchChat`,
          {
            headers: { token: `Bearer ${token}` },
          }
        );
        setChatId(data.chats[0]._id);
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    const extractUserIdFromToken = () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;
        setUserId(userId);
        return userId;
      } else {
        console.error("User token not found in localStorage.");
        return null;
      }
    };

    getMyChat();
    extractUserIdFromToken();
    const intervalId = setInterval(fetchMessages, 1000);

    return () => clearInterval(intervalId);
  }, [chatId]);

  return (
    <Paper style={{ height: '80vh', overflowY: 'scroll' }}>
    <MessageArea>
      {chatMsg &&
        chatMsg.map((msg) => {
          const isMyMessage = msg.senderStd ? msg.senderStd._id === userId : msg.senderSuper._id === userId;
          return (
            <MessageItem key={msg.id} isMyMessage={isMyMessage}>
              <MessageText primary={msg.content} isMyMessage={isMyMessage} />
              <Box>
                <MessageInfo>{isMyMessage ? 'You' : msg.senderStd ? msg.senderStd.name : msg.senderSuper.name}</MessageInfo>
                <MessageInfo>{generateTime(msg.createdAt)}</MessageInfo>
              </Box>
            </MessageItem>
          );
        })}
    </MessageArea>
  </Paper>
);
};

const generateTime = (timestamp) => {
const date = new Date(timestamp);
const hours = date.getHours();
const minutes = date.getMinutes();
return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};

export default ChatApp2;

