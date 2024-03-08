import React from "react";
import { Box, Button, FormGroup, Typography } from "@mui/material";
import InputCom from "../../shared/InputCom.jsx";
import { purple, red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Create() {
  const Dep = [
    "Computer Systems Engineering",
    "Electrical Engineering",
    "Energy Engineering",
    "Mechanical Engineering",
    "Electrical Eng-Industrial Automation",
    "Communications Engineering Technology",
    "Building Engineering",
    "Sustainable Energy Engineering",
    "Civil Engineering and Sustainable Structures/Co-operative",
    "Automotive Engineering/Co-operative",
  ];

  const Role = ["Head of department", "Supervisor", "Student"];
  const Gender = ["Male", "Female"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: { xs: 0, md: 20 },
      }}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <FormGroup>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "30px", my: 2, fontWeight: "bold" }}
          >
            Create User
          </Typography>
          <InputCom placeholder={"UserName"} type={"text"} />
          <InputCom placeholder={"Email"} type={"email"} />
          <InputCom placeholder={"Password"} type={"password"} />
          <InputCom placeholder={"PhoneNumber"} type={"text"} />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Dep}
            sx={{ my: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Departments" />
            )}
          />

          <Autocomplete
            disablePortal
            multiple
            id="combo-box-demo"
            options={Role}
            sx={{ my: 1 }}
            renderInput={(params) => <TextField {...params} label="Role" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Gender}
            sx={{ my: 1 }}
            renderInput={(params) => <TextField {...params} label="Gender" />}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(43, 1, 62, 0.5)",

              "&:hover": {
                backgroundColor: " rgba(43, 1, 62, 0.8)",
              },
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
}
