import React from "react";
import image from '../../../static/signin@400x400.PNG';
import logo from '../../../static/logo.png';
import {CardMedia,Typography ,Box,Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
 
   box:{
    height:"100%",
    backgroundColor:"#FFBD35",
    display:"flex",
    alignItems:"center",
    flexDirection:"column"
   },
   paper:{
    background:"transparent",
    flexDirection:"row",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
   },
   text:{
    fontWeight:"500",
    fontFamily:"Rubik",
    fontSize:"50px",
    lineHeight:"59.25px",
    fontStyle: "normal",
    color:"white"
   }
}))
export default function Logo(){
    const classes = useStyles()
    return(
        <Box  className={classes.box}  >
            <Paper className={classes.paper} elevation={0} >
                <CardMedia component="img" sx={{width:"154px",  height:"152px"}}
             image={logo}
             alt="Paella dish"/>
                <Typography  className={classes.text}>
                    HorusBLOCK
                </Typography>
            </Paper>
            <CardMedia
             component="img"
             image={image}
             alt="Paella dish"
             />
        </Box>
    )
}