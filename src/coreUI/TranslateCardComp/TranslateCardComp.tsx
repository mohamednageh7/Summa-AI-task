import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

type Props = {
    id:number;
    originText:string
};

const TranslateCardComp = ({id,originText}: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Id: {id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {originText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TranslateCardComp;
