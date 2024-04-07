
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";

function ChatContainer() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const currentTime = getCurrentTime();
      setMessages([...messages, { text: message, time: currentTime }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container" style={{ background: "#fff", overflow: "hidden", height: "100vh" }}>
      <header className="chat-header" style={{ background: "#7f668b", color: "#fff", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", padding: "15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6"><QuestionAnswerIcon /> ChatApp</Typography>
        <Button id="leave-btn" variant="contained" style={{ background: "#553364" }}>Leave Room</Button>
      </header>
      <main className="chat-main" style={{ display: "grid", gridTemplateColumns: "1fr 4fr" }}>
        <div className="chat-sidebar" style={{ background: "#95809e", color: "#fff",
         paddingBottom: "14px", paddingTop: "50px", borderLeft: "3px solid gray",
          paddingLeft: "5%", height: "65vh", overflowY: "scroll" }}>
          <Typography variant="h6" style={{ alignItems: "center", display: "flex" }}>
            <SchoolIcon style={{ marginRight: "5px", fontSize: "28px" }} /> Section Number
          </Typography>
          <Typography variant="p" style={{ fontSize: "20px", paddingLeft: "30%" }}>2</Typography>
          <Typography variant="h6" style={{ paddingTop: "15px", marginTop: "20px", alignItems: "center", display: "flex" }}>
            <GroupIcon style={{ marginRight: "5px", fontSize: "28px" }} /> Team Member
          </Typography>
          <ul>
            <li>Tasneem</li>
            <li>leen</li>
            <li>fatima</li>
          </ul>
        </div>
        <div className="chat-messages" style={{ padding: "20px", overflowY: "scroll", position: "fixed", right: "20px", top: "80px", bottom: "10px", width: "35%" }}>
          {messages.map((msg, index) => (
            <div key={index} className="message" style={{ marginBottom: "10px", padding: "14px", backgroundColor: "#e9e5eb", borderRadius: "5px" }}>
              <div>{msg.text}</div>
              <div style={{ fontSize: "13px", textAlign: "right" }}>{msg.time}</div>
            </div>
          ))}
        </div>
      </main>
      
      <div className="chat-form-container" 
      style={{ padding: "10px 20px", backgroundColor: "#7f668b", paddingLeft: "20%", 
      marginRight: "35%" ,width:"75%",zIndex:"1000000000"}}>
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} style={{ display: "flex" ,zIndex:"1000000000"}}>
          <input type="text" placeholder="Enter Message" value={message} onChange={handleChange} required autoComplete="off" style={{ outline: "none", fontSize: "18px", padding: "14px", flex: "2" }} />
          <Button type="submit" variant="contained" style={{ backgroundColor: "#553364", fontWeight: "bold", marginLeft: "10px" }}>
            <SendIcon style={{ fontSize: "17px", marginRight: "4px" }} />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatContainer;
