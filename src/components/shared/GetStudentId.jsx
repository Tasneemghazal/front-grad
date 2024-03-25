import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import { userContext } from "../context/StudentContextProvider.jsx";

const GetStudentId = ({ userId }) => {
  const { getStudentById  } = useContext(userContext);
  const [studentNum, setStudentNum] = useState();

  useEffect(() => {
    const fetchStudentNum = async () => {
      try {
        const name = await getStudentById(userId);
        setStudentNum(name.user.universityNum);
      } catch (error) {
        console.error("Error fetching supervisor name:", error);
      }
    };
    fetchStudentNum();
  }, [getStudentById, userId]);

  return (
    <Typography sx={{ fontStyle: "italic" }}>
      {studentNum}
    </Typography>
  );
};

export default GetStudentId;