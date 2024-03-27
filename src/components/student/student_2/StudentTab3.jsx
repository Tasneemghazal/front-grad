import { Box, Grid} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BasicDateCalendar from "../../shared/BasicDateCalender.jsx";
import Task from "./Task.jsx";
import Title from "../../shared/title.jsx";
import {userContext} from "../../context/StudentContextProvider.jsx";


export default function StudentTab3() {
  const {getStudentTask} = useContext(userContext);
  const [ tasks, setTasks] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const myTask = await getStudentTask();
      setTasks(myTask.tasks);
      console.log(tasks)
    }
    fetchData();
  },[])
  return (
    <Box>
    <Title title={"Your Tasks"} />
    <Grid container>
      <Grid item xs={12} md={7} sx={{pb:2,pt:{xs:0,sm:1,md:7}}}>
      <Task tasks={tasks}/>
      </Grid>
      <Grid item xs={12} md={5}>
      <BasicDateCalendar style={{ border: "1px solid rgba(43, 1, 62, 0.4)" }} />
      </Grid>
    </Grid>
      
    </Box>
  );
}
