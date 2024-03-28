import React, { useContext, useEffect } from 'react'
import AccordionExpandIcon from '../../shared/AccordionExpandIcon.jsx'
import { TaskContext } from '../../context/TaskContextProvider.jsx'
import { useState } from 'react';
export default function SupervisorTab4() {
    const {getSuperSubmission} = useContext(TaskContext);
    const [submissions,setSubmissions]= useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const submission = await getSuperSubmission();
            setSubmissions(submission.submissions);
            console.log(submissions);
        }
        fetchData();
    },[getSuperSubmission]);
  return (
    <AccordionExpandIcon submissions={submissions}/>
  )
}
