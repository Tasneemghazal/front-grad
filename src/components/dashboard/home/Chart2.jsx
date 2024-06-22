import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContextProvider.jsx'; 
import { userContext } from '../../context/StudentContextProvider.jsx';

const size = {
  width: 400,
  height: 200,
};

export default function Chart2() {
  const { getUsers } = useContext(UserContext); 
  const { userData } = useContext(userContext); 
  const [headCount, setHeadCount] = useState();
  const [superCount, setSuperCount]  = useState();
  const data = [
    { value: headCount, label: 'HOD' },
    { value: superCount, label: 'Supervisor' },
    { value: userData, label: 'Student' },
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        if (res.users.length > 0) {
          const filteredHOD = res.users.filter(user => user.role.includes("headOfDepartment"));
          setHeadCount(filteredHOD.length);
          const filteredSuper = res.users.filter(user => user.role.includes("supervisor"));
          setSuperCount(filteredSuper.length);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [getUsers]);
  
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
          fontSize: '10px',  // Set font size here
        },
      }}
      {...size}
    />
  );
}
