import ChatIcon from '@mui/icons-material/Chat';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { Container } from '@mui/material'
import HeadTab1 from './HeadTab1.jsx';
import HeadTab2 from './HeadTab2.jsx';
import DynamicTabs from '../../shared/DynamicTabs.jsx';
import { useNavigate } from 'react-router-dom';

export default function Head2() {
  return (
   <Container>
     <DynamicTabs
    items={[
      { label: <ViewListIcon/>, content:<HeadTab1/>  },
      { label: <EditCalendarIcon/>, content:<HeadTab2/>},
    ]}
  />
   </Container>
  
  )}