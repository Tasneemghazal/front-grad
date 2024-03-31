import React, { useEffect, useState } from 'react'
import Head1 from './Head1.jsx'
import Head2 from './Head2/Head2.jsx'
import Footer from './Footer.jsx'
import Loader from '../loader/Loader.jsx';

export default function TotalHead() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
      <Loader/>
      </>
    )
  }
  return (
    <>
    <Head1/>
    <Head2/>
    <Footer/>
    </>
  )
}
