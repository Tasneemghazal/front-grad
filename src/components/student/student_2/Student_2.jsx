import React from 'react';
import HailIcon from '@mui/icons-material/Hail';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StudentTab1 from './StudentTab1.jsx';
import StudentTab2 from './StudentTab2.jsx';
import StudentTab3 from './StudentTab3.jsx';
import DynamicTabs from '../../shared/DynamicTabs.jsx';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Student_2() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate('/student/chat');
  };

  return (
    <Container>
      <DynamicTabs
        items={[
          { label: <HailIcon />, content: <StudentTab1 /> },
          { label: <PeopleIcon />, content: <StudentTab2 /> },
          { label: <BorderColorIcon />, content: <StudentTab3 /> },
        ]}
      />
      <Box>
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            left: '20px',
            zIndex: '99999999999',
            backgroundColor: '#2B013EB3',
            borderRadius: '50%', // Make it circular
            width: '60px', // Adjust the width and height according to your need
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleChatbotClick}
        >
          <TelegramIcon
            style={{
              fontSize: '50px',
              color: 'white',
            }}
          />
        </div>
      </Box>
    </Container>
  );
}

