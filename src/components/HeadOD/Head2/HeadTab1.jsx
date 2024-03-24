import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CardComp2 from '../../shared/CardComp2.jsx';
import SpringModal from '../../shared/SpringModal.jsx';
import { SectionContext } from '../../context/SectionContextProvider.jsx'
import { UserContext } from '../../context/UserContextProvider.jsx';
import SupervisorName from '../../student/Booking/SupervisorName.jsx';
import GetStudentName from '../../shared/GetStudentName.jsx';

export default function HeadTab1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("userToken");
  const [section, setSection] = useState([]);
  const { getSections } = useContext(SectionContext);
  const { getUserById } = useContext(UserContext);
  const [supervisorName, setSupervisorName] = useState("");
  const [rowData, setRowData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sections = await getSections();
        setSection(sections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, [getSections]);

  const openModal = (students) => {
    setRowData(students)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    // Add delete logic here
  };

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
          Your Sections
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {section.map((sec) =>
          <Grid item xs={12} sm={6} md={4} key={sec._id}>
            <CardComp2
              title={`${sec.num}`}
              // Call getUser asynchronously and set user data once resolved
              description={
                <>
                  <SupervisorName userId={sec.userId} />
                </>
              }
              onClickLearnMore={() => openModal(sec.students)} // Pass student IDs to openModal
              onClickDelete={onClickDelete}
            />
          </Grid>
        )}
      </Grid>
      <SpringModal 
        closeModal={closeModal} 
        isModalOpen={isModalOpen}  
        modalContent={
          <>
            {rowData.map(studentId => (
              <GetStudentName key={studentId} userId={studentId} />
            ))}
          </>
        }
      />
    </Box>
  );
}
