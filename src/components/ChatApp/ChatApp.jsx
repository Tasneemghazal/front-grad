// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Button } from '@mui/material';

// const ChatApp = ({ userId, userType }) => {
//   const token = localStorage.getItem("userToken");
//   const [chats, setChats] = useState([]);
//   const [activeChat, setActiveChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [socket, setSocket] = useState(null);



//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/chat/fetchChat`, {
//           headers: { token: `Bearer ${token}` },
//         });
//         setChats(response.data);
//         console.log(response)
//       } catch (error) {
//         console.error('Error fetching chats:', error);
//       }
//     };
//     fetchChats();
//   }, []);

//   useEffect(()=>{
//     const fetchMessages = async (chatId) => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_URL}/chat/getmessages/6630af90982034e5cce06e03
//         `, {
//           headers: { token: `Bearer ${token}` },
//         });
//         console.log(response)
//         setMessages(response.data);
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };
//     fetchMessages();
//   },[])

 

//   const sendMessage = async() => {
//     const message = {
//       content:"hello"
//     }
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/chat/sendmessage/6630af90982034e5cce06e03
//       `, message,{
//         headers: { token: `Bearer ${token}` },
//       });
//       console.log(response)
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };


  


//   return (
//    <Button onClick={sendMessage}>app</Button>
//   );
// };

// export default ChatApp;


import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';

const ChatSection = styled(Grid)({
  width: '100%',
  height: '90vh', // Adjusted to fill the entire viewport height
  display: 'flex',
  flexDirection: 'row',
  position:'absolute',
  top:'65px' // Align items horizontally
});

const Sidebar = styled(Grid)({
  width: '20%', // Sidebar width
  backgroundColor: "rgba(57, 27, 71, ,0.66)"
});

const Conversation = styled(Grid)({
  width: '80%', // Conversation area width
  backgroundColor: '#000',
  position: 'relative', // For the input field positioning
  overflowY: 'auto',
});

const MessageArea = styled(List)({
  padding: 0,
});

const MessageItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const MessageText = styled(ListItemText)({
  maxWidth: '70%',
  backgroundColor: '#0084ff',
  color: '#ffffff',
  borderRadius: '10px',
  padding: '10px',
  marginBottom: '5px',
});

const InputArea = styled(Grid)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '10px',
  backgroundColor: '#ffffff',
});

const ChatApp = () => {
  return (
    <ChatSection container>
      <Sidebar item>
        <List>
          {/* Sidebar users */}
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="User" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <ListItemText primary="John Wick" />
          </ListItem>
          {/* Add more users here */}
        </List>
      </Sidebar>
      <Conversation item>
        <Paper style={{ height: 'calc(100% - 56px)', overflowY: 'auto' }}>
          <MessageArea>
            {/* Sample Messages */}
            <MessageItem>
              <MessageText primary="Hey, how are you?" />
            </MessageItem>
            <MessageItem>
              <MessageText primary="I'm good, thanks!" />
            </MessageItem>
            <MessageItem>
              <MessageText primary="Let's catch up later." />
            </MessageItem>
            {/* End of Sample Messages */}
          </MessageArea>
        </Paper>
        <InputArea container alignItems="center">
          <Grid item xs={11}>
            <TextField id="outlined-basic-email" label="Type Something" fullWidth />
          </Grid>
          <Grid item xs={1} align="right">
            <Fab color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Grid>
        </InputArea>
      </Conversation>
    </ChatSection>
  );
}

export default ChatApp;
