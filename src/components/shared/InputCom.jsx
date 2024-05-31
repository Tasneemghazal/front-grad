import React from "react";
import { TextField, InputAdornment, IconButton, Typography } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function InputCom({ placeholder, type, name, value, onChange, title, disabled, multiline = false, rows = 1, errors = {}, touched, onBlur }) {
let showError="";
  if(Object.keys(errors).length>0){
   showError = touched[name] && errors[name];
  } 

  return (
    <>
      <TextField
        sx={{ my: 1 }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        title={title}
        disabled={disabled}
        fullWidth
        label={placeholder}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {placeholder === "Email" && (
                <IconButton>
                  <Email />
                </IconButton>
              )}
              {placeholder === "officeHours" && (
                <IconButton>
                  <AccessAlarmIcon />
                </IconButton>
              )}
              {placeholder === "SupervisorName" && (
                <IconButton>
                  <AssignmentIndIcon />
                </IconButton>
              )}
              {placeholder === "Password" && (
                <IconButton>
                  <Lock />
                </IconButton>
              )}
              {placeholder === "Name" && (
                <IconButton>
                  <AccountBoxIcon />
                </IconButton>
              )}
              {placeholder === "Department" && (
                <IconButton>
                  <AccountBalanceSharpIcon />
                </IconButton>
              )}
              {placeholder === "Role" && (
                <IconButton>
                  <SupervisorAccountSharpIcon />
                </IconButton>
              )}
              {placeholder === "PhoneNumber" && (
                <IconButton>
                  <LocalPhoneIcon />
                </IconButton>
              )}
              {placeholder === "Code" && (
                <IconButton>
                  <VpnKeyIcon />
                </IconButton>
              )}
            </InputAdornment>
          )
        }}
      />
      {showError && (
        <Typography sx={{ color: "red", fontSize: "10px", alignItems: "start" }}>
          {errors[name]}
        </Typography>
      )}
    </>
  );
}
