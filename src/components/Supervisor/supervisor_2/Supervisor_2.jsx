import { Box, Container } from '@mui/material'
import DynamicTabs from '../../shared/DynamicTabs.jsx'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SupervisorTab1 from './SupervisorTab1.jsx';
import SupervisorTab2 from './SupervisorTab2.jsx'; 
import SupervisorTab3 from './SupervisorTab3.jsx';
import SupervisorTab4 from './SupervisorTab4.jsx';
import ChatIcon from '../../ChatApp/ChatIcon.jsx';
import { Link } from 'react-router-dom';
export default function Supervisor_2() {
  return (
    <Container>
        <DynamicTabs
         items={[
            { label: <ViewListIcon/>, content: <SupervisorTab1/> },
            { label: <BorderColorIcon/>, content: <SupervisorTab2/> },
            { label: <AppRegistrationIcon/>, content: <SupervisorTab3/> },
            { label: <FeedbackIcon/> , content:<SupervisorTab4/> },
          ]}
        />
         <Link to={`chat`}>
         <ChatIcon/>
         </Link>
        
    </Container>
  )
}
