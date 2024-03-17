import axios from 'axios';
import React, { createContext } from 'react'
export const DepartmentContext = createContext(null);
export default function DepartmentContextProvider({children}) {
    const getDepartments =async()=>{
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getDep`, {
              headers: { token: `Bearer ${token}` },
            });
            return data;
          } catch (err) {
            console.log(err);
          }
    }
    const removeDep = async (depId) => {
      try {
        const token = localStorage.getItem("userToken");
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/admin/deleteDep/${depId}`,
          { headers: { token: `Bearer ${token}` } }
        );
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
        
        
  return (
    <DepartmentContext.Provider
      value={{
        getDepartments,
        removeDep
      }}
    >
      {children}
    </DepartmentContext.Provider>
  )
}
