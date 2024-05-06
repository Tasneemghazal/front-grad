import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Loader from '../components/loader/Loader.jsx';
export default function SupervisorLayout() {
 
    
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2500); 
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    {loading ? (
      <Loader/>
    ) : (
    <>
    <Navbar navItems={["Home", "Profile", "Technical Support"]}/>
    <Outlet/>
    </>
     )}
     </>
  )
}
