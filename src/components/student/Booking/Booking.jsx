import "./Booking.css";
import { Box, Container } from "@mui/system";

const Booking = () => {
  return (
    <Container>
      <Box className="marquee">
        <span style={{ color: "red" }}>
          Booking Is Available.&nbsp;&nbsp;&nbsp;
        </span>  <span style={{ color: "red" }}>
          Booking Is Available.&nbsp;&nbsp;&nbsp;
        </span>
      </Box>
    </Container>
  );
};

export default Booking;
