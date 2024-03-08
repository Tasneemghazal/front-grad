import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from "./loader.module.css";

export default function Loader() {
  return (
    <Box sx={{width:"5%",margin:"auto",mt:{xs:"80%",sm:"60%",md:"80%",lg:"20%"} }} className={`${style.loader}`}>
     
    </Box>
  );
}