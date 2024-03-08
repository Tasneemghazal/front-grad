import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar({ style }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          showDaysOutsideCurrentMonth 
          fixedWeekNumber={4} 
          sx={style}
        />
    </LocalizationProvider>
  );
}
