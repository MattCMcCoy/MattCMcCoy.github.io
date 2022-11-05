import React from "react";
import { useSharedTheme } from "./PageTheme";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import "../../style/Card.css";

function ProduceCard({ href, image, title, description }) {
  const { checkedState } = useSharedTheme();

  return (
    <Card className="cardStyle">
      <CardActionArea href={href} target="_blank">
        <CardMedia image={image} className="imageStyle" />
        <CardContent
          className={checkedState ? "darkCardContentStyle" : "cardContentStyle"}
        >
          <Typography component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography
            component="div"
            variant="caption"
            className={checkedState ? "dark-card" : "card"}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export function ActionAreaCard({ href, image, title, description }) {
  return (
    <ProduceCard
      href={href}
      image={image}
      title={title}
      description={description}
    />
  );
}
