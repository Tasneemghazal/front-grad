import Student_1 from "./student_1/Student_1.jsx";
import Student_2 from "./student_2/Student_2.jsx";
import Footer from "./Footer.jsx";
import Booking from "./Booking/Booking.jsx";

export default function TotalStudent() {
  return (
    <>
      <Student_1 />
      <Booking />
      <Student_2 />
      <Footer />
    </>
  );
}
