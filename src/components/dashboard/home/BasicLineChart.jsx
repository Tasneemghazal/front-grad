<<<<<<< HEAD
// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// export default function BasicLineChart() {
//   return (
//     <LineChart
//       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//         },
//       ]}
//       width={500}
//       height={300}
//     />
//   );
// }




import { Avatar, Box, Container } from '@mui/material';
import React from 'react';
=======
import { Avatar,Container } from '@mui/material';
>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const CustomContainer = styled(Container)({
  position: 'relative',
  width: '80%', // Set the width of the container
  height: '80%', // Set the height of the container
});

const CustomAvatar = styled(Avatar)({
  position: 'absolute',
  width: '100px', // Set the width of each avatar
  height: '100px', // Set the height of each avatar
});

const TopAvatar = styled(CustomAvatar)({
  top: '0',
  left: '0%',
  transform: 'translateX(-50%)', // Center horizontally
  border:"1px dashed gray"
});

const BottomLeftAvatar = styled(CustomAvatar)({
  bottom: '0',
  left: '0',
  transform: 'translateX(-50%)', // Center horizontally
  border:"1px dashed gray"
});

const CenterAvatar = styled(CustomAvatar)({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Center horizontally and vertically
  width:"100%",
  height:"80%",
  border:"1px dashed gray"
});
const BottomRightAvatar = styled(CustomAvatar)({
  bottom: '0',
  right: '0',
  transform: 'translateX(50%)', // Center horizontally
  border:"1px dashed gray"
<<<<<<< HEAD
 
=======

>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
});

const TopRightAvatar = styled(CustomAvatar)({
  top: '0',
  right: '0',
  transform: 'translateX(50%)', // Center horizontally
  border:"1px dashed gray"
<<<<<<< HEAD
  
  
=======


>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
});

export default function BasicLineChart() {
  return (
    <CustomContainer>
<<<<<<< HEAD
      <Link to="https://www.facebook.com/ptukedups?mibextid=ZbWKwL">
        <TopAvatar src="https://c.tenor.com/Y_mjBhqei8cAAAAC/tenor.gif" />
      </Link>
      <Link to="https://www.linkedin.com/company/palestine-technical-university---kadoorie/">
      <BottomRightAvatar src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_400px.gif" />
      </Link>
      <Link to="https://lms.ptuk.edu.ps/">
      <TopRightAvatar src="https://play-lh.googleusercontent.com/WETi4kiHx6KfyGBDsZ1-jgPdAATt8n6Fq4tK05TOBe_z6NxsoWjrGkDyy8PIW29pvJw=w480-h960-rw" />
      </Link>
      <BottomLeftAvatar src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif" />
      <CenterAvatar src="https://imgvisuals.com/cdn/shop/products/animated-studying-boy-character-956660.gif?v=1697059328&width=1080" />
    </CustomContainer>
  )
}
=======
    <Link to="https://www.facebook.com/ptukedups?mibextid=ZbWKwL">
      <TopAvatar src="https://c.tenor.com/Y_mjBhqei8cAAAAC/tenor.gif" />
    </Link>
    <Link to="https://www.linkedin.com/company/palestine-technical-university---kadoorie/">
    <BottomRightAvatar src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_400px.gif" />
    </Link>
    <Link to="https://lms.ptuk.edu.ps/">
    <TopRightAvatar src="https://play-lh.googleusercontent.com/WETi4kiHx6KfyGBDsZ1-jgPdAATt8n6Fq4tK05TOBe_z6NxsoWjrGkDyy8PIW29pvJw=w480-h960-rw" />
    </Link>
    <BottomLeftAvatar src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif" />
    <CenterAvatar src="https://imgvisuals.com/cdn/shop/products/animated-studying-boy-character-956660.gif?v=1697059328&width=1080" />
  </CustomContainer>
)
}
>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
