import axios from 'axios';
import React, { createContext } from 'react'
export const ProjectContext = createContext(null);
export default function ProjectContextProvider({children}) {
    const getProjects =async()=>{
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getprojects`);
            return data;
          } catch (err) {
            console.log(err);
          }
    }
    const getDepProject =async(depId)=>{
      try {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getprojects/${depId}`);
          return data;
        } catch (err) {
          console.log(err);
        }
  }
    const removeProject = async (proId) => {
      try {
        const token = localStorage.getItem("userToken");
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/admin/deleteProject/${proId}`,
          { headers: { token: `Bearer ${token}` } }
        );
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
        
        
  return (
    <ProjectContext.Provider
      value={{
        getProjects,
        removeProject,
        getDepProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
