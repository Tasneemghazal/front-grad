import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const SelectCom = ({ labelId, id, name, value, onChange, label, options, multiple, onBlur, touched, errors }) => {
  const showError = touched[name] && errors[name];

  return (
    <>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          multiple={multiple}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {showError && (
        <Typography sx={{ color: "red", fontSize: "10px", alignItems: "start" }}>
          {errors[name]}
        </Typography>
      )}
    </>
  );
};

export default SelectCom;
