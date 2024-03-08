import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function C() {
  const theme = useTheme();
  const data = [2, 5, 3, 6, 8, 4, 7, 3, 5]; // Added more data points

  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['CSE', 'EE', 'Ene.', 'ME', 'CE', 'BE', 'SEE', 'Civil', 'AE'],
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
            height: 200, // Adjust height for smaller screens
          },
        }}
      />
    </div>
  );
}
