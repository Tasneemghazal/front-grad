import { Box } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
export default function ChatIcon() {
  return (
    <Box>
    <div
      style={{
        position: 'fixed',
        bottom: '90px',
        left: '20px',
        zIndex: '99999999999',
        backgroundColor: '#135D66',
        borderRadius: '50%', // Make it circular
        width: '50px', // Adjust the width and height according to your need
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    
    >
      <TelegramIcon
        style={{
          fontSize: '40px',
          color: 'white',
        }}
      />
    </div>
  </Box>
  )
}
