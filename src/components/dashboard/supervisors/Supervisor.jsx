import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CustomTable from '../../shared/CustomTable';
import { UserContext } from '../../context/UserContextProvider.jsx';
import { useSnackbar } from '../../context/SnackbarProvider.jsx';

export default function supervisor() {
  const { getUsers, removeUser } = useContext(UserContext); 
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const { showSnackbar } = useSnackbar();
  const removeMyUser = async (userId) => {
    try {
      const res = await removeUser(userId);
      if (res.message === "success") {
       
        showSnackbar({ message: "User deleted successfully", severity: "success" });
        setTableData(tableData.filter(user => user._id !== userId));

      }
     
      console.log(res);
    } catch (error) {
      console.error("Error removing user:", error);
      showSnackbar({ message: "An error occurred while deleting user", severity: "error" });
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
          
          const filteredUsers = res.users.filter(user => user.role.includes("supervisor"));
          setTableData(filteredUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [getUsers]);

  return (
    <Box sx={{ width: { md:"95%",lg:"70%" }, ml: {md:"35px", lg:"295px" }, mt: 5, mx: { xs: 4 } }}>
       <Typography
          variant="h3"
          sx={{ textAlign: "center", fontSize: "30px", my: 5, fontWeight: "bold" }}
        >
         Show all supervisors
        </Typography>
      
      <CustomTable
        columns={tableColumns}
        data={tableData}
        onDelete={removeMyUser}
      />
    </Box>
  );
}
