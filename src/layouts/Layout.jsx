import React, {useState,useEffect} from 'react'
import Navbar from '../components/shared/Navbar.jsx'
import {Outlet} from 'react-router-dom'
import Loader from '../components/loader/Loader.jsx';

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    {loading ? (
      <Loader/>
    ) : (
      <>
      <Navbar navItems={["Home", "Technical Support", "Sign in"]}/>
      <Outlet/>
      </>
    )}
    </>
   
  )
}
