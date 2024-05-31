import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/StudentContextProvider.jsx';
import { DepartmentContext } from '../../context/DepartmentContextProvider.jsx';

export default function Profile() {
  const {extractNameFromToken} = useContext(userContext);
  const [studentName,setStudentName] = useState();
  const [studentEmail,setStudentEmail] = useState();
  const { getDepartments } = useContext(DepartmentContext); 
  const[ depName,setDepName]=useState();
  const[ academicYear,setAcademicYear]=useState();
  const[ officeHours,setOfficeHours]=useState();
  const[ image,setAStudentImage]=useState();
  const getDepName = async () => {
    try {
      const departmentRes = await getDepartments(); 
      const depId = extractNameFromToken();
        
          const department = departmentRes.deps.find(dep => dep._id === depId.depId); 
          const depName = department ? department.name : "Unknown Department";
          setDepName(depName);
      }
    catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const name = extractNameFromToken();
        console.log(name)
        setStudentName(name.name);
        setStudentEmail(name.email);
        setAcademicYear(name.academicYear);
        setOfficeHours(name.officeHours);
        setAStudentImage(name.img);
        
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
    getDepName();
  }, []);
  return (
    <>
    <Box sx={{height:"200px", position:"relative",top:-50, backgroundColor:"rgba(0, 60, 67, 0.7)"}}>
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
        <Avatar src={image} sx={{width:{xs:"90px",md:"150px"}, height:{xs:"90px",md:"150px"},border:"2px solid rgba(43, 1, 62, 1)"}}/>
      </Box>
    </Box>
    <Box sx={{my:{xs:2,md:4, textAlign:"center"}}}>
      <Typography sx={{fontSize:{xs:"30px",md:"40px"}, fontWeight:"bold"}}>{studentName}</Typography>
      <Typography sx={{py:2}}>{depName}</Typography>
      <Typography sx={{py:1}}>{studentEmail}</Typography>
      <Typography sx={{py:1}}>{academicYear}</Typography>
      <Typography sx={{py:1}}>{officeHours}</Typography>
      <Box sx={{display: "flex",justifyContent:"center",flexWrap: "wrap",py:2}}>
          <Link to='editProfile' style={{width:"100%"}}>
          <Button variant='contained' color="success" sx={{mx: { xs: 1, md: 2 }, my: { xs: 1, md: 0 },width:"20%"}}>Edit</Button>
          </Link>
      </Box>
    </Box>
    </>

  )
}
