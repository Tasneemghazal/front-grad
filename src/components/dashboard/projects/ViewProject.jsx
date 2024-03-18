import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../shared/CustomTable';
import { ProjectContext } from '../../context/ProjectContextProvider.jsx';

export default function ViewProject() {
  const { getProjects, removeProject } = useContext(ProjectContext); 
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const removeMyProject = async (proId) => {
    const res = await removeProject(proId);
    console.log(res);
    if (res.message === "success") {
      setTableData(tableData.filter((pro) => pro._id !== proId));
    }
    return res;
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
