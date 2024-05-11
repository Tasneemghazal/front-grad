import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';

const ChatApp = ({ userId, userType }) => {
  const token = localStorage.getItem("userToken");
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);



  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/chat/fetchChat`, {
          headers: { token: `Bearer ${token}` },
        });
        setChats(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
    fetchChats();
  }, []);

  useEffect(()=>{
    const fetchMessages = async (chatId) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/chat/getmessages/6630af90982034e5cce06e03
        `, {
          headers: { token: `Bearer ${token}` },
        });
        console.log(response)
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  },[])

 

  const sendMessage = async() => {
    const message = {
      content:"hello"
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/chat/sendmessage/6630af90982034e5cce06e03
      `, message,{
        headers: { token: `Bearer ${token}` },
      });
      console.log(response)
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };


  


  return (
   <Button onClick={sendMessage}>app</Button>
  );
};

export default ChatApp;

