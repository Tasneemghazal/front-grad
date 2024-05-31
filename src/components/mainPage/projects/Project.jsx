import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CardCom from "../../shared/CardCom.jsx";
import style from "../../shared/shared.module.css";
import { DepartmentContext } from "../../context/DepartmentContextProvider.jsx";
import { ProjectContext } from "../../context/ProjectContextProvider.jsx";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [open, setOpen] = useState(false); 
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentProjects, setSelectedDepartmentProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { getDepartments } = useContext(DepartmentContext);
  const { getDepProject } = useContext(ProjectContext);

  async function fetchData() {
    try {
      const res = await getDepartments();
      if (res.deps.length > 0) {
        setDepartments(res.deps);
        await getProjectsForDepartment(res.deps[0]._id);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  }

  const getProjectsForDepartment = async (depId) => {
    try {
      const projects = await getDepProject(depId);
      setSelectedDepartmentProjects(projects.projects);
    } catch (error) {
      console.error("Error fetching projects for department:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleListItemClick = async (index) => {
    setActiveIndex(index);
    setOpen(false); 
    const depId = departments[index]._id;
    await getProjectsForDepartment(depId);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 2;
  const endIndex = startIndex + 2;

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: { xs: 2, md: 3 },
        my: 3,
        borderTop: "1px dashed  rgba(43, 1, 62, 0.4)",
       
      }}
    >
      <Container>
        <Box
          sx={{
            pb: 1,
            width: "50%",
            margin: "auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              fontWeight: "900",
              mb: 4,
              
            }}
          >
            Explore Our College To See Previous Projects
          </Typography>
          <Box sx={{ width: "100%" }} className={`${style.border}`} />
        </Box>
        <Grid container spacing={2} sx={{ pt: 5 }}>
          {isSmallScreen ? (
            <Grid item xs={12}>
              <Select
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                value={departments[activeIndex]}
                onChange={(e) =>
                  handleListItemClick(departments.indexOf(e.target.value))
                }
                fullWidth
              >
                {departments.map((major, index) => (
                  <MenuItem key={index} value={major}>
                    {major.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          ) : (
            <Grid item xs={12} md={4}>
              {departments.map((major, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor:
                      activeIndex === index
                        ? "#003C43"
                        : "inherit",
                    color: activeIndex === index ? "#fff" : "inherit",
                    cursor: "pointer",
                    fontSize: { xs: "16px", sm: "20px", md: "23px" },
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#77B0AA",
                      color: "#fff",
                      borderTopRightRadius: 30,
                      borderBottomRightRadius: 30,
                    },
                    ...(activeIndex === index && {
                      borderTopRightRadius: 30,
                      borderBottomRightRadius: 30,
                    }),
                  }}
                  onClick={() => handleListItemClick(index)}
                >
                  <Typography variant="body1" sx={{ py: 1, ml: 1 }}>
                    {major.name}
                  </Typography>
                </Box>
              ))}
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {(selectedDepartmentProjects.slice(startIndex, endIndex)).map((project, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <CardCom image={project.img} name={project.name} supervisorName={project.supervisorName} thesis={project.thesis} group={project.group}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination 
          count={Math.ceil(selectedDepartmentProjects.length / 2)} 
          page={currentPage} 
          onChange={handlePageChange} 
        />
      </Box>
    </Box>
  );
}
