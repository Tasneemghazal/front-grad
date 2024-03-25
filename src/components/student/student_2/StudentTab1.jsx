import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { userContext } from "../../context/StudentContextProvider.jsx";
import { useState } from "react";
import { UserContext } from "../../context/UserContextProvider.jsx";



export default function StudentTab1() {
  const{getStudentSection}= useContext(userContext);
  const [ Id,setId]= useState();
  const [ data,setData]= useState();
  const {getUserById}=useContext(UserContext);

  const superData= async(userId)=>{
       const supervisor = await getUserById(userId);
       setData(supervisor);
       console.log(data)
       
  }
  useEffect(()=>{
    const fetchData=async()=>{
      const studentSection = await getStudentSection();
      setId(studentSection.section.userId);
    }
    fetchData();
    superData(Id);
  },[])
  return (
    <Box>
      <Box sx={{ width: { xs: "60%", md: "40%" }, my: 5 }}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            borderBottom: "2px solid rgba(43, 1, 62, 0.4)",
            fontSize: { xs: 15, md: 40 },
          }}
        >
          Your Supervisor
        </Typography>
      </Box>
      
      <Grid container justifyContent="center" spacing={2}>
        
        <Grid item xs={12} sm={6} md={4} sx={{order:{xs:2,md:1}}} >
          <Paper 
            sx={{ 
              display: "flex",
              py: 5,
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(43, 1, 62, 0.4)",
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                cursor: "pointer"
              }
            }}
          >
            <Box sx={{ width: "30%", mt: 2 }}>
              <Avatar
                src="image/contact.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
                sx={{ borderRadius: "50%", width: "100%", aspectRatio: "1 / 1" }} 
              />
            </Box>
            <Box sx={{ pt: 4, pb: 2, textAlign: "center" }}>
              <Typography 
                sx={{ 
                  pb: 1,
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
                Email: {data && data.user.email}
              </Typography>
              <Typography 
                sx={{ 
                  pb: 1,
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
                Phone: {data&&data.user.phoneNumber}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} sx={{order:{xs:1,md:1}}} >
          <Paper 
            sx={{ 
              display: "flex",
              py: 5,
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(43, 1, 62, 0.4)",
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                cursor: "pointer"
              }
            }}
          >
            <Box sx={{ width: "30%", mt: 2 }}>
              <Avatar
                src={data && data.user.img}
                alt=""
                style={{ width: "100%", height: "100%" }}
                sx={{ borderRadius: "50%", width: "100%", aspectRatio: "1 / 1" , "&:hover": {
                  border:"1px solid rgba(43, 1, 62, 0.4) ",
                  borderRadius:"5px",
                   boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                   cursor: "pointer"
                 }}} 
              />
            </Box>
            <Box sx={{ pt: 4, pb: 2, textAlign: "center" }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: "bold", 
                  pb: 1,
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
                Dr. {data&&data.user.name}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
                Specialized in artificial intelligence
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
       
        
        <Grid item xs={12} sm={6} md={4} sx={{order:{xs:2,md:1}}} >
          <Paper 
            sx={{ 
              display: "flex",
              py: 5,
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(43, 1, 62, 0.4)",
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                cursor: "pointer"
              }
            }}
          >
            <Box sx={{ width: "30%", mt: 2 }}>
              <Avatar
                src="image/time.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
                sx={{ borderRadius: "50%", width: "100%", aspectRatio: "1 / 1" }} 
              />
            </Box>
            <Box sx={{ pt: 4, pb: 2, textAlign: "center" }}>
              <Typography 
                sx={{ 
                  pb: 1,
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
               Room no. :H-313
              </Typography>
              <Typography 
                sx={{ 
                  pb: 1,
                  fontSize: { xs: 12, md: 16 }, // Adjust font size for different screen sizes
                  "&:hover": {
                    borderBottom: "1px solid rgba(43, 1, 62, 0.4)",
                    transform: "translateX(-5px)",
                  }
                }}
              >
                 Office hours:{data && data.user.officeHours}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
