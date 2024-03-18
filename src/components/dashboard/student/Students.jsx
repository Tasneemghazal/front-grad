import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../shared/CustomTable';
import { UserContext } from '../../context/StudentContextProvider';

export default function Students() {
  const { getUsers, userData, removeUser } = useContext(UserContext);
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const removeMyUser = async (userId) => {
    try {
      const res = await removeUser(userId);
      console.log(res);
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        if (res.users.length > 0) {
          const userKeys = Object.keys(res.users[0]);
          const columns = ['_id', 'name', 'email'];
          setTableColumns(columns);
          setTableData(res.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [getUsers]);

  return (
    <Box sx={{ width: { md: '60%' }, ml: { md: "400px" }, mt: 5, mx: { xs: 4 } }}>
      <Typography
          variant="h3"
          sx={{ textAlign: "center", fontSize: "30px", my: 5, fontWeight: "bold" }}
        >
         Show all students
        </Typography>
       
        <CustomTable
          columns={tableColumns}
          data={tableData}
          onDelete={removeMyUser}
        />
     
    </Box>
  );
}
