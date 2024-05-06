import React, { useEffect, useState } from 'react'
import Footer from './Footer.jsx'
import Supervisor_1 from './supervisor_1/Supervisor_1.jsx'
import Supervisor_2 from './supervisor_2/Supervisor_2.jsx'
import Loader from '../loader/Loader.jsx';

export default function TotalSupervisor() {
  // let[loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <>
  //     <Loader/>
  //     </>
  //   )
  // }
   return (
    <>
    <Supervisor_1/>
    <Supervisor_2/>
    <Footer/>
    </>
  )
}
