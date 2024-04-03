import React,{ createContext, useContext, useEffect, useState }  from 'react'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const RequestContext = createContext();
export default function RequestContextProvider({children}) {
  const [students, setStudents] = useState([""]);
    const getRequests = async () => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/supervisor/requests`, {
            headers: { token: `Bearer ${token}` }
          });
          return data;
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      };
      const getRequestById = async (reqId) => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/supervisor/getRequestById/${reqId}`, {
            headers: { token: `Bearer ${token}` }
          });
          setStudents(data.request.students)
          return data;
          
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      };
      useEffect(()=>{
        getRequests();
        getRequestById();
      },[getRequestById])
  return (
    <RequestContext.Provider value={{ getRequests,getRequestById,students  }}>
      {children}
    </RequestContext.Provider>
  )
}
