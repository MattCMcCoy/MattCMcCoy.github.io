import { React } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function ActionAreaCard({ href, image, title, description }) {
  return (
    <div>
      <Card sx={{ maxWidth: 550 }} bordered>
        <CardActionArea href={href}>
          <CardMedia component="img" height="350" image={image} />
          <CardContent>
            <Typography gutterBottom={false} variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
