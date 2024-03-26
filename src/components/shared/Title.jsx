import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Title({title}) {
  return (
   <>
     <Box sx={{ width: { xs: "60%", md: "40%" }, my: 5 }}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            borderBottom: "2px solid rgba(43, 1, 62, 0.4)",
            fontSize: { xs: 15, md: 40 },
          }}
        >
          {title}
        </Typography>
      </Box>
   </>
  )
}
