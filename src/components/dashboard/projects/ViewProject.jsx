import { Box } from '@mui/material'
import React from 'react'
import CustomTable from '../../shared/CustomTable.jsx'

export default function ViewProject() {
  return (
    <Box sx={{ width: { md: '60%' }, ml: { md: "300px" }, mt: 10, mx: { xs: 4 } }}>
    <CustomTable/>
    </Box>
  )
}
