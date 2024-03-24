import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import { userContext } from "../context/StudentContextProvider.jsx";

const GetStudentName = ({ userId }) => {
  const { getStudentById  } = useContext(userContext);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const name = await getStudentById(userId);
        setStudentName(name.user.name);
      } catch (error) {
        console.error("Error fetching supervisor name:", error);
      }
    };

    fetchStudentName();
  }, [getStudentById, userId]);

  return (
    <Typography sx={{ fontStyle: "italic" }}>
      Student: {studentName}
    </Typography>
  );
};

export default GetStudentName;
