import axios from "axios";
import {jwtDecode} from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

export const ChatContext = createContext(null);

export default function ChatContextProvider({ children }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatAdmin, setChatAdmin] = useState();
  const [stdSection, setStdSection] = useState();
  const [superSections, setSuperSections] = useState([]);
  const [chatSec, setChatSec] = useState([]);
  const [chatMsg, setChatMsg] = useState([]);
  const [chatOtherMsg, setChatOtherMsg] = useState([]);
  const [chatId, setChatId] = useState();
  const [role, setRole] = useState();
  const [userId, setUserId] = useState();

  const getMyChat = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/chat/fetchChat`,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      const users = data.chats.flatMap((chat) => chat.users);
      setChatUsers(users);
      setStdSection(data.section[0].num);
      const section = data.section.map((sec) => sec.num);
      setSuperSections(section);
      setRole(data.role);
      setChatId(data.chats[0]._id);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getChatSection = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/chat/fetchSectionChat`,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      setChatSec(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getMessages = async (chatId) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/chat/getmessages/${chatId}`,
        {
          headers: { token: `Bearer ${token}` },
        }
      );
      setChatMsg(data.messages);
      return data.messages;
    } catch (err) {
      console.log(err);
    }
  };

  const addMessage = (message) => {
    setChatMsg((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = async (newId, values) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/chat/sendmessage/${newId}`, values, {
        headers: { token: `Bearer ${token}` },
      });
      addMessage(data);
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
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

  useEffect(() => {
    getChatSection();
    getMyChat();
    extractUserIdFromToken();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chatUsers,
        getMyChat,
        stdSection,
        superSections,
        role,
        getChatSection,
        chatSec,
        getMessages,
        chatMsg,
        chatId,
        extractUserIdFromToken,
        userId,
        addMessage,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
