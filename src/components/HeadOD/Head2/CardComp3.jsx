import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Button } from '@mui/material';

export default function CardComp3({ title, description, onClickLearnMore, onClickDelete, flag=true }) {
  const imageUrls = [
    'image/section1.jpg',
    'image/section2.jpg',
    'image/section3.jpg',
    'image/section4.jpg',
    'image/section5.jpg',
    'image/section6.jpg',
    'image/section7.jpg',
    'image/section8.jpg',
    'image/section9.jpg',
    'image/section10.jpg',
    'image/section11.jpg',
    'image/section12.jpg',
    'image/section13.jpg',
    'image/section14.jpg',
    'image/section15.jpg',
    'image/section16.jpg',
    'image/section17.jpg',
    // Add more image URLs as needed
  ];

  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={randomImageUrl} 
          alt="Random Image"
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary" sx={{py:2}}>
              {description}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" , pt:1}}>
            <Button onClick={onClickLearnMore} variant="outlined" sx={{color:"text.#135D66"}}>
              Learn More
            </Button>
            {flag && (
            <Button 
            variant="outlined" 
            color="error" 
            onClick={() => window.location.href = 'http://localhost:5173/headOfDepartment/sections/chat'}
          >
            Chat
          </Button>
          
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
