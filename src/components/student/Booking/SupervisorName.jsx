import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import { UserContext } from "../../context/UserContextProvider.jsx";

const SupervisorName = ({ userId }) => {
  const { getUserById } = useContext(UserContext);
  const [supervisorName, setSupervisorName] = useState("");

  useEffect(() => {
    const fetchSupervisorName = async () => {
      try {
        const name = await getUserById(userId);
        setSupervisorName(name.user.name);
      } catch (error) {
        console.error("Error fetching supervisor name:", error);
      }
    };

    fetchSupervisorName();
  }, [getUserById, userId]);

  return (
    <Typography >
      Supervisor: {supervisorName}
    </Typography>
  );
};

export default SupervisorName;
