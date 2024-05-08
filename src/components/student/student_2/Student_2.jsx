import HailIcon from '@mui/icons-material/Hail';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatIcon from '@mui/icons-material/Chat';
import DynamicTabs from '../../shared/DynamicTabs.jsx'
import { Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import StudentTab1 from './StudentTab1.jsx';
import StudentTab2 from './StudentTab2.jsx';
import StudentTab3 from './StudentTab3.jsx';
import ChatBotHelper from './ChatBotHelper';
import SvgIcon from '@mui/material/SvgIcon';

export default function Student_2() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate('/student/chat');
  };

  return (
    <Container>
    <DynamicTabs
      items={[
        { label: <HailIcon/>, content: <StudentTab1/> },
        { label: <PeopleIcon/>, content: <StudentTab2/> },
        { label: <BorderColorIcon/>, content: <StudentTab3/> },
      ]}
    />
  
  <Box>
  <SvgIcon component={ChatIcon} onClick={handleChatbotClick} style={{
    position: "fixed",
    bottom: "90px",
    left: "20px",
    zIndex: "99999999999",
    fontSize:"50px",
    color:"white",
    backgroundColor:"#2B013EB3",
    borderRadius:"130px",
    padding:"25px",
    cursor:"pointer" , 
  }}/>
  <ChatBotHelper/>
</Box>
  </Container>
  )
}
