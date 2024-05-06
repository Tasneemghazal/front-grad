import Student_1 from "./student_1/Student_1.jsx";
import Student_2 from "./student_2/Student_2.jsx";
import Footer from "./Footer.jsx";
import Booking from "./Booking/Booking.jsx";
import Loader from "../loader/Loader.jsx";
import { useEffect, useState } from "react";

export default function TotalStudent() {
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
      <Student_1 />
      <Booking />
      <Student_2 />
      <Footer />
    </>
  );
}
