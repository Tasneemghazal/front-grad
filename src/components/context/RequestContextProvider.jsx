import React,{ createContext, useContext, useEffect, useState }  from 'react'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const RequestContext = createContext();
export default function RequestContextProvider({children}) {
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
      useEffect(()=>{
        getRequests()
      },[])
  return (
    <RequestContext.Provider value={{ getRequests }}>
      {children}
    </RequestContext.Provider>
  )
}
