import React, { useContext, useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import { useTheme } from '@mui/material/styles';
import { DepartmentContext } from '../../context/DepartmentContextProvider.jsx';
import { ProjectContext } from '../../context/ProjectContextProvider.jsx';

export default function Chart1() {
  const theme = useTheme();
  const { getDepartments } = useContext(DepartmentContext);
  const { getDepProject } = useContext(ProjectContext);
  const [departmentData, setDepartmentData] = useState([]);
  const [projectCounts, setProjectCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departmentsResponse = await getDepartments();
        console.log('Departments:', departmentsResponse);
        const departments = departmentsResponse.deps;
        
        const counts = [];
        for (const dep of departments) {
          const projectsResponse = await getDepProject(dep._id);
          console.log('Projects for', dep.name, ':', projectsResponse);
          counts.push({ department: dep.name, count: projectsResponse.projects.length });
        }
        
        setDepartmentData(departments.map(dep => dep.name.slice(0,4)+"."));
        setProjectCounts(counts);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [getDepartments, getDepProject]);

  if (departmentData.length === 0 || projectCounts.length === 0) {
    return <div>Loading...</div>;
  }

  const data = projectCounts.map(dep => dep.count);

  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: departmentData,
            scaleType: 'band',
          },
        ]}
        yAxis={[
          {
            label: 'Number of Projects'
          },
        ]}
        series={[
          {
            data: data,
          },
        ]}
        width={500}
        height={300}
        sx={{
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 200, 
          },
        }}
      />
    </div>
  );
}
