import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUsers`, {
        headers: { token: `Bearer ${token}` }
      });
      setUserData(data);
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
      if (data.message === "success") {
        setUserData(userData.filter(user => user._id !== userId));
      }
      return data;
    } catch (error) {
      console.error("Error removing user:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  return (
    <UserContext.Provider value={{ userToken, getUsers, userData, removeUser,setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
