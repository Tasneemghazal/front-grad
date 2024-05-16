import React, { useContext, useEffect } from 'react';
import HailIcon from '@mui/icons-material/Hail';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import StudentTab1 from './StudentTab1.jsx';
import StudentTab2 from './StudentTab2.jsx';
import StudentTab3 from './StudentTab3.jsx';
import DynamicTabs from '../../shared/DynamicTabs.jsx';
import ChatBotHelper from './ChatBotHelper.jsx';
import { ChatContext } from '../../context/ChatContextProvider.jsx';
import ChatIcon from '../../ChatApp/ChatIcon.jsx';

export default function Student_2() {
  return (
    <Container>
      <DynamicTabs
        items={[
          { label: <HailIcon />, content: <StudentTab1 /> },
          { label: <PeopleIcon />, content: <StudentTab2 /> },
          { label: <BorderColorIcon />, content: <StudentTab3 /> },
        ]}
      />
      <Link to={`chat`}>
      <ChatIcon/>
      </Link>
      <ChatBotHelper/>
    </Container>
   
  );
}

