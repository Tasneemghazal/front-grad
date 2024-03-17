import React from 'react'
import CustomTable from '../../shared/CustomTable.jsx'
import { Box } from '@mui/material'

export default function headOfDepartments() {
  return (
    <Box sx={{ width: { md: '60%' }, ml: { md: "300px" }, mt: 10, mx: { xs: 4 } }}>
    <CustomTable/>
    </Box>
  )
}
