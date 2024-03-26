import React,{ createContext, useContext, useEffect, useState }  from 'react'
import axios from "axios";
export const TaskContext = createContext();
export default function TaskContextProvider({children}) {
      const getSuperTask = async () => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/supervisor/getSuperTask`, {
            headers: { token: `Bearer ${token}` }
          });
          return data;
        } catch (error) {
          console.error("Error fetching task:", error);
          throw error;
        }
      };
    
      useEffect(()=>{
        getSuperTask();
      },[])
  return (
    <TaskContext.Provider value={{getSuperTask}}>
      {children}
    </TaskContext.Provider>
  )
}
