import HailIcon from '@mui/icons-material/Hail';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DynamicTabs from '../../shared/DynamicTabs.jsx'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import StudentTab1 from './StudentTab1.jsx';
import StudentTab2 from './StudentTab2.jsx';
import StudentTab3 from './StudentTab3.jsx';
import ChatBotHelper from './ChatBotHelper';

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
        { label: <SmartToyIcon onClick={handleChatbotClick}/>  } 
      ]}
    />
    <ChatBotHelper/>
  </Container>
  )
}
