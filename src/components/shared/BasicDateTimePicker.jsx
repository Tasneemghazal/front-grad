import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export default function BasicDateTimePicker({ label, onChange, value, flag=true}) {
  console.log(value)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label={label}
          onChange={onChange}
          value={flag? dayjs(value): ""|| null} // Ensure value is defined (or set to null if undefined)
          textField={(props) => <TextField {...props} />} // Add this line if not rendering input
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
