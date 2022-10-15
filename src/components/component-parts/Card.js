import { React } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function ActionAreaCard({ href, image, title, description }) {
  /*
  these need to be changed, light mode the borders disapear, may also want to reposition them here.
  So they go from row to row instead of column.
  */
  const card = {
    height: "auto",
    width: "500px",
    maxWidth: "30vw"
  };

  const imageStyle = {
    height: card.height / 2,
    width: card.maxWidth / 2,
    alignItems:'center',
    justifyContent:'center',

  };

  const cardContentStyle = {
    height: "auto",
    width: "auto",
    alignItems:'center',
    justifyContent:'center',
  };

  return (
    <Card style={card}>
      <CardActionArea href={href}>
        <CardMedia component="img" image={image} style={imageStyle} />
        <CardContent style={cardContentStyle}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="black">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
