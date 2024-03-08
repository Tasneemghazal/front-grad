import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CardComp({ image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image} 
        alt="Paella dish"
      />
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
}
