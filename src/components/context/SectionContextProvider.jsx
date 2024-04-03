import React,{ createContext, useContext, useEffect, useState }  from 'react'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const SectionContext = createContext();
export default function SectionContextProvider({children}) {
    const getSections = async () => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/head/getHeadSections`, {
            headers: { token: `Bearer ${token}` }
          });
          return data;
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      };
      const getSuperSections = async () => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/supervisor/getSections`, {
            headers: { token: `Bearer ${token}` }
          });
          return data;
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      };
      const getSectionNum = async (sectionId) => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/supervisor/getSectionNum/${sectionId}`, {
            headers: { token: `Bearer ${token}` }
          });
          return data;
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      };
      const removeSection = async (secId) => {
        try {
          const token = localStorage.getItem("userToken");
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/head/deleteSection/${secId}`,
            { headers: { token: `Bearer ${token}` } }
          );
          console.log(data);
         
          return data;
        } catch (error) {
          console.error("Error removing user:", error);
          throw error;
        }
      };
      useEffect(()=>{
        getSuperSections();
        getSections();
        getSectionNum();
      },[])
  return (
    <SectionContext.Provider value={{ getSections , getSuperSections,getSectionNum,removeSection}}>
      {children}
    </SectionContext.Provider>
  )
}
