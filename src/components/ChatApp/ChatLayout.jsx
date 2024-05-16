import React from 'react';
import ChatSidBar from './ChatSidBar.jsx';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ChatInput from './ChatInput.jsx';
import { Conversation } from './chatStyle.jsx';

export default function ChatLayout() {
  const ChatSection = styled(Grid)({
    width: '100%',
    height: '90vh', // Adjusted to fill the entire viewport height
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '65px', // Align items horizontally
  });

  return (
    <ChatSection container>
      <ChatSidBar />
      <Conversation>
        <ChatInput />
          <Outlet />
      </Conversation>
    </ChatSection>
  );
}
