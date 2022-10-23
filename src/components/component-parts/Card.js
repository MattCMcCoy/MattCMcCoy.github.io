import { React } from "react";

import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import "./Card.css";

export function ActionAreaCard({ href, image, title, description }) {
  return (
    <Card>
      <CardActionArea href={href}>
        <CardMedia image={image} className="imageStyle" />
        <CardContent className="cardContentStyle">
          <Typography component="div" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography component="div" variant="caption" className="card">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
