import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

export default function DotBadge({ icon: Icon }) {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <Icon />
      </Badge>
    </Box>
  );
}
