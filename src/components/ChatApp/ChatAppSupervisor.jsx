
import { Grid, Paper } from '@mui/material';
import ChatSidebar from './ChatSidebar'; 
import ChatMessagesSupervisor from './ChatMessagesSupervisor';

const ChatAppSupervisor = () => {
  return (
    <Grid container spacing={1} sx={{marginTop:"-60px"}}>
      <Grid item xs={3}>
        <ChatSidebar /> 
      </Grid>
      <Grid item xs={9}>
        <Paper style={{ padding: '20px' }}><ChatMessagesSupervisor/></Paper>
      </Grid>
    </Grid>
  )
}

export default ChatAppSupervisor
