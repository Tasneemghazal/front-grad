import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/components/theme/theme.js';
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
 
)
