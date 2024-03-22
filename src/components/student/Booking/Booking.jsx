import "./Booking.css";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/section-booking");
  };
  return (
    <Container>
      <Box className="marquee" onClick={handleBookingClick}>
        <span style={{ color: "red" }}>
          Booking Is Available.&nbsp;&nbsp;&nbsp;
        </span>{" "}
        <span style={{ color: "red" }}>
          Booking Is Available.&nbsp;&nbsp;&nbsp;
        </span>
      </Box>
    </Container>
  );
};

export default Booking;
