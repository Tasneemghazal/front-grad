import "./Booking.css";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { css } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";
import Title from "../../shared/title.jsx";

const Booking = () => {
  const navigate = useNavigate();
  const [showIcon, setShowIcon] = useState(true);

  const handleBookingClick = () => {
    navigate("/student/section-booking");
    setShowIcon(false); // Hide the icon when marquee is clicked
  };

  return (
    <Container>
      <Box className="booking-container" sx={{ py: 4 }} >
      <Title title={" Announcement"} />

        <Box
          className="marquee"
          onClick={handleBookingClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            color: "red",
          }}
        >
          <Avatar src="/image/booking.png" alt="Toto" sx={{ width: "7%", height: "7%" }} />
          <span>Booking Is Available.&nbsp;&nbsp;&nbsp;</span>
          <span>Booking Is Available.&nbsp;&nbsp;&nbsp;</span>
        </Box>
      </Box>
    </Container>
  );
};

export default Booking;
