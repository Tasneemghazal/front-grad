import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../shared/CustomTable';
import { ProjectContext } from '../../context/ProjectContextProvider.jsx';
import { DepartmentContext } from '../../context/DepartmentContextProvider.jsx'; 
import { useSnackbar } from '../../context/SnackbarProvider.jsx';

export default function ViewProject() {
  const { getProjects, removeProject } = useContext(ProjectContext); 
  const { getDepartments } = useContext(DepartmentContext); 
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const { showSnackbar } = useSnackbar();

  const removeMyProject = async (proId) => {
    try {
      const res = await removeProject(proId);
      if (res.message === "success") {
        showSnackbar({ message: "Project deleted successfully", severity: "success" });
        setTableData(tableData.filter(project => project._id !== proId));
      }
      return res;
    } catch (error) {
      console.error("Error removing project:", error);
      showSnackbar({ message: "An error occurred while deleting project", severity: "error" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectRes = await getProjects();
        const departmentRes = await getDepartments(); 
        if (projectRes.projects.length > 0) {
          const columns = ['_id', 'name', 'group', 'supervisorName', 'depId'];
          setTableColumns(columns);
          const updatedProjects = projectRes.projects.map(project => {
            const department = departmentRes.deps.find(dep => dep._id === project.depId); 
            const depName = department ? department.name : "Unknown Department";
            return { ...project, depId: depName };
          });
          setTableData(updatedProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, [getProjects, getDepartments]); 

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
