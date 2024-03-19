import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../shared/CustomTable';
import { ProjectContext } from '../../context/ProjectContextProvider.jsx';
import { useSnackbar } from '../../context/SnackbarProvider.jsx';

export default function ViewProject() {
  const { getProjects, removeProject } = useContext(ProjectContext); 
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const { showSnackbar } = useSnackbar();
  const removeMyProject = async (proId) => {
    
    try {
      const res = await removeProject(proId);
      if (res.message === "success") {
       
        showSnackbar({ message: "Project deleted successfully", severity: "success" });
        setTableData(tableData.filter(user => user._id !== proId));

      }
     
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error removing user:", error);
      showSnackbar({ message: "An error occurred while deleting user", severity: "error" });
    }
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProjects();
        if (res.projects.length > 0) {
          const projectKey = Object.keys(res.projects[0]);
          const columns = ['_id', 'name', 'group','supervisorName','depId'];
          setTableColumns(columns);
          setTableData(res.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, [getProjects]);

  return (
    <Box sx={{ width: { md: '60%' }, ml: { md: "400px" }, mt: 5, mx: { xs: 4 } }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: "30px", my: 5, fontWeight: "bold" }}
      >
        Show all projects
      </Typography>
      
      <CustomTable
        columns={tableColumns}
        data={tableData}
        onDelete={removeMyProject}
      />
    </Box>
  );
}
