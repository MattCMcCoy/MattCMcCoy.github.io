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
  return (
      <Card>
        <CardActionArea href={href}>
          <CardMedia component="img" image={image} />
          <CardContent>
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
