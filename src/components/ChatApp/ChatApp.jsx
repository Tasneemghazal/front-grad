import { Grid, Paper } from '@mui/material';
import ChatSidebar from './ChatSidebar'; 
import ChatMessages from './ChatMessages';

const ChatApp = () => {
  return (
    <Grid container spacing={1} sx={{marginTop:"-60px"}}>
      <Grid item xs={3}>
        <ChatSidebar /> 
      </Grid>
      <Grid item xs={9}>
        <Paper style={{ padding: '20px' }}><ChatMessages/></Paper>
      </Grid>
    </Grid>
  );
};

export default ChatApp;

