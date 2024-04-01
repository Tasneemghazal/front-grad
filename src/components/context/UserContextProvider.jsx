import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const depId = extractDepIdFromToken(); // Extract department ID
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUsers?depId=${depId}`, {
        headers: { token: `Bearer ${token}` }
      });
      setUserData(data);
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  const getUserById = async (userId) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUser/${userId}`, {
        headers: { token: `Bearer ${token}` }
      });
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  const removeUser = async (userId) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/deleteUser/${userId}`,
        { headers: { token: `Bearer ${token}` } }
      );
      console.log(data);
   
      return data;
    } catch (error) {
      console.error("Error removing user:", error);
      throw error;
    }
  };

 
  const extractDepIdFromToken =() => {
    
    const token = localStorage.getItem("userToken");
    
    if (token) {
      const decodedToken = jwtDecode(token);
      
      const depId = decodedToken.depId;
      
      return depId;
    } else {
   
      console.error("User token not found in localStorage.");
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  return (
    <UserContext.Provider value={{ userToken, getUsers, userData, setUserData,setUserToken,removeUser, extractDepIdFromToken,getUserById }}>
      {children}
    </UserContext.Provider>
  );
}
