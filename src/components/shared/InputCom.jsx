import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
export default function InputCom({ placeholder, type }) {
  return (
    <TextField
      sx={{ my: 1 }}
      type={type}
      fullWidth
      label={placeholder} variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {placeholder === "Email" && (
              <IconButton>
                <Email />
              </IconButton>
            )}
            {placeholder === "Password" && (
              <IconButton>
                <Lock />
              </IconButton>
            )}
             {placeholder === "UserName" && (
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
  );
}

