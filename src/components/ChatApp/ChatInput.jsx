import React, { useContext, useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Fab, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { ChatContext } from '../context/ChatContextProvider.jsx';
import { useParams } from 'react-router-dom';

const SendButton = styled(Fab)({
  backgroundColor: "#135D66",
              "&:hover": {
                backgroundColor: "#77B0AA",
              },
});

export default function ChatInput() {
  const token = localStorage.getItem("userToken");
  const { chatId, getMyChat, sendMessage } = useContext(ChatContext);
  const [newId, setNewId] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchChat = async () => {
      await getMyChat();
      setNewId(id ?? chatId);
    };
    fetchChat();
  }, [chatId, getMyChat, id]);

  const initialValues = {
    content: "",
  };

  const onSubmit = async (values) => {
    await sendMessage(newId, values);
    formik.setFieldValue('content', '');
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '10px', backgroundColor: '#ffffff' }}>
        <Grid container alignItems="center">
          <Grid item xs={11}>
            <TextField
              type="text"
              name="content"
              id="content"
              title="Type Something"
              value={formik.values.content}
              placeholder="Type Something"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item xs={1} align="right">
            <SendButton color="primary" aria-label="add" type="submit">
              <SendIcon />
            </SendButton>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
