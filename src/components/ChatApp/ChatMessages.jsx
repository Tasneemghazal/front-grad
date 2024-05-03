import { useState, useRef, useEffect } from "react";
import { Grid, Button, Box, List, ListItem, ListItemText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import axios from 'axios'; // Import axios

const ChatMessages = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const now = new Date().toLocaleTimeString();
      const newMessage = { text: message, time: now, attachment: null };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      try {
        await axios.post('/api/sendmessage', { message }); 
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/getmessages'); 
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleAttachmentUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const attachmentUrl = e.target.result;
        const now = new Date().toLocaleTimeString();
        const newMessage = { text: "", time: now, attachment: attachmentUrl };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollToBottom();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (attachment) => {
    setSelectedImage(attachment);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Grid container spacing={1} sx={{ height: "84vh" }}>
      <Grid
        item
        xs={12}
        sx={{
          height: "70vh",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ad94b8",
            borderRadius: "7px",
          },
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                width: "50%",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={() => msg.attachment && handleImageClick(msg.attachment)}
              >
              <ListItemText sx={{ color: "#333", fontSize: "13px" }}>
                {msg.text}
                {msg.attachment && (
                  <img
                    src={msg.attachment}
                    alt="Attachment"
                    style={{ maxWidth: "100px", cursor: "pointer" }}
                  />
                )}
              </ListItemText>
              <ListItemText sx={{ textAlign: "right", color: "#888" }}>
                <span style={{ fontSize: "11px" }}>{msg.time}</span>
              </ListItemText>
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Grid>
      <Grid item xs={12}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 20px",
            position: "relative",
          }}
        >
          <textarea
            placeholder="your message.."
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyPress}
            style={{
              flex: 1,
              height: "50px",
              marginBottom: "10px",
              borderRadius: "10px",
              outline: "none",
              resize: "none",
              fontSize: "15px",
              padding: "10px",
              marginTop: "10px",
              marginRight: "14px",
            }}
          />
          <input
            id="fileInput"
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(event) => handleAttachmentUpload(event)}
          />
          <Box
            style={{
              position: "absolute",
              right: "140px",
              top: "20px",
            }}
          >
            <label htmlFor="fileInput">
              <Button
                variant="contained"
                component="span"
                style={{
                  backgroundColor: "#ad94b8",
                  fontWeight: "bold",
                  height: "30px",
                }}
                onClick={() => fileInputRef.current.click()}
              >
                +
              </Button>
            </label>
          </Box>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSendMessage}
            style={{
              backgroundColor: "#ad94b8",
              fontWeight: "bold",
              height: "40px",
            }}
          >
            <SendIcon style={{ fontSize: "17px", marginRight: "4px" }} />
            Send
          </Button>
        </Box>
      </Grid>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img src={selectedImage} alt="Attachment" style={{ width: "100%" }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ChatMessages;
