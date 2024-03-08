import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {

  return (
    <>
    <Box sx={{height:"200px", position:"relative",top:-50, backgroundColor:"rgba(43, 1, 62, 0.5)"}}>
      <Box sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: {xs:"-20%",md:"-30%"},
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%"
      }}>
        <Avatar src={"/image/toto.jpeg"} sx={{width:{xs:"90px",md:"150px"}, height:{xs:"90px",md:"150px"},border:"2px solid rgba(43, 1, 62, 1)"}}/>
      </Box>
    </Box>
    <Box sx={{my:{xs:2,md:4, textAlign:"center"}}}>
      <Typography sx={{fontSize:{xs:"30px",md:"40px"}, fontWeight:"bold"}}>Fatima Omair</Typography>
      <Typography sx={{py:2}}>Computer Systems Engineering Department</Typography>
      <Typography sx={{py:1}}>FatimaOmair@gmail.com</Typography>
      <Typography sx={{py:1}}>Fourth Year</Typography>
      <Box sx={{display: "flex",justifyContent:"center",flexWrap: "wrap",py:2}}>
          <Link to='editProfile' style={{width:"100%"}}>
          <Button variant='contained' color="success" sx={{mx: { xs: 1, md: 2 }, my: { xs: 1, md: 0 },width:"20%"}}>Edit</Button>
          </Link>
      </Box>
    </Box>
    </>

  )
}
