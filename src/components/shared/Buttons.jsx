import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgba(43, 1, 62, 0.7)"),
  backgroundColor: "#135D66",
  '&:hover': {
    backgroundColor:" #77B0AA",
  },
}));

export default function Buttons({title,link,children,variant="contained"}) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" href={link}>{title}
    {children}
    <ArrowForwardIosIcon sx={{ml:1}}/>
      </ColorButton>
    </Stack>
  );
}