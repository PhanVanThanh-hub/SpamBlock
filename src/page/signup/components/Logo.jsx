import React from "react";
import logo from "../../../static/logo.png";
import image from '../../../static/signin@400x400.PNG';
import { CardMedia, Typography, Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  box: {
    height: "100%",
    backgroundColor: "#FFBD35",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
     
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Rubik",
    fontSize: "30px",
    lineHeight: "59.25px",
    fontStyle: "normal",
    color: "white",
  },
}));
export default function Logo() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Paper className={classes.paper} elevation={0} sx={{background: "transparent",}}>
        <CardMedia
          component="img"
          sx={{ width: "154px", height: "152px" }}
          image={logo}
          alt="Paella dish"
        />
        <Typography className={classes.text}>HorusBLOCK</Typography>
      </Paper>
      <CardMedia
             component="img"
             image={image}
             alt="Paella dish"
             />
    </Box>
  );
}
