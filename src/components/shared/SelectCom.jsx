import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCom = ({ labelId, id, value, onChange, label, options ,multiple}) => {
  return (
    <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        label={label}
        multiple={multiple}
      >
        {options.map((option,index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCom;
