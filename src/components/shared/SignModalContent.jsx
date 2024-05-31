import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function SignModalContent({
  userRoles,
  handleNavigation,
  setOpenModal,
}) {
  return (
    <Box >
      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign:"center"}}>
        Choose Role
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        {userRoles.map((role, index) => (
          <Button
            key={index}
            onClick={() => {
              handleNavigation(role);
              setOpenModal(false);
            }}
            sx={{
              color:"#fff",
              backgroundColor: "#77B0AA",
              "&:hover": {
                backgroundColor: "#135D66",
              },
            }}
          >
            {role}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
