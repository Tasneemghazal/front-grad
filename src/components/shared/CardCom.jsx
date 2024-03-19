import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardContent, Link, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export default function CardComp({ image, name, supervisorName, thesis, group }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography>
          {name}
        </Typography>
        <Typography>
          {supervisorName}
        </Typography>
        <Typography>{group}</Typography>
        <Link href={thesis} sx={{color:"rgba(43, 1, 62, 1)"}}>
          <LinkIcon />
        </Link>
      </CardContent>
    </Card>
  );
}
