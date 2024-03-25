import React, { useState, useEffect, useContext } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { userContext } from "../context/StudentContextProvider.jsx";

const GetStudentImg = ({ userId }) => {
  const { getStudentById  } = useContext(userContext);
  const [studentImg, setStudentImg] = useState();

  useEffect(() => {
    const fetchStudentImg = async () => {
      try {
        const name = await getStudentById(userId);
        setStudentImg(name.user.img);
      } catch (error) {
        console.error("Error fetching supervisor name:", error);
      }
    };

    fetchStudentImg();
  }, [getStudentById, userId]);

  return (
    <Box sx={{ width: "30%", mt: 2 }}>
            <Avatar
              src={studentImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
              sx={{ borderRadius: "50%", width: "100%", aspectRatio: "1 / 1", "&:hover": {
                border:"1px solid rgba(43, 1, 62, 0.4) ",
                borderRadius:"5px",
                 boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                 cursor: "pointer"
               }}} 
            />
          </Box>
  );
};

export default GetStudentImg;