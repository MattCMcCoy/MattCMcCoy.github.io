import { React } from "react";

import { useSharedTheme } from "./PageTheme";

import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import "./Card.css";
function ProduceCard({ href, image, title, description }) {
  const { checkedState } = useSharedTheme();

  const cardStyle = checkedState ? "dark-card" : "card";
  const cardContentStyle = checkedState
    ? "darkCardContentStyle"
    : "cardContentStyle";

  return (
    <Card>
      <CardActionArea href={href}>
        <CardMedia image={image} className="imageStyle" />
        <CardContent className={cardContentStyle}>
          <Typography component="div" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography component="div" variant="caption" className={cardStyle}>
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
