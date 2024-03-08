import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 7, label: 'HOD' },
  { value: 10, label: 'Supervisor' },
  { value: 10, label: 'Student' },

];

const size = {
  width: 400,
  height: 200,
};

export default function Chart2() {
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
        },
        
      }}
      {...size}
    />
  );
}