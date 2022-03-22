import React from "react";
import {Button,Box,Paper,Grid,Typography,CardMedia} from '@mui/material';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import gg from '../../../static/gg.png';
import fb from '../../../static/fb.png';
import { Link } from 'react-router-dom';
import SignUpForm from './Form';

const useStyles = makeStyles(() => ({
    box:{
        height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,width:"60%"
    },
   text:{
    fontFamily: 'Rubik',fontStyle: "normal",fontWeight: "700",fontSize: "30px",lineHeight: "36px",letterSpacing: "0.05em",textAlign:"left"
   },
   text1:{
    fontFamily: 'Rubik',fontStyle: "normal",fontWeight: "400",fontSize: "16px",lineHeight: "170%",color:"black",
   },
   button:{
    background: "#FFFFFF",
    border: "1px solid #FFBD35",
    borderRadius: "8px",
    textTransform: "capitalize",
    width:"231px",
    justifyContent: "space-evenly"
   },
 
}))
export default function Form(){
    const classes = useStyles()
    return(
        <Box className={classes.box} >
            <Paper elevation={0} >
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Typography className={classes.text} >Sign up to HorusBLOCK</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container  sx={{    justifyContent: "space-between"}}>
                            <Button className={classes.button}>
                                <CardMedia component="img" sx={{width:"28.57px",  height:"31.28px"}} image={gg}/>
                                <Typography className={classes.text1} >Sign in with google</Typography>
                            </Button>
                            <Button className={classes.button}>
                                <CardMedia component="img" sx={{width:"28.57px",  height:"31.28px"}} image={fb}/>
                                <Typography className={classes.text1} >Sign in with facebook</Typography>
                            </Button>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} sx={{    display: "flex",justifyContent: "center",alignItems: "center" }}>
                        <Divider sx={{width:"45%"}}/>
                        <Typography sx={{margin:"0px 10px",fontWeight: "400",
                                        fontSize: "26px",
                                        lineHeight: "136.5%",
                                        textAlign: "center",
                                        letterSpacing: "0.095em",
                                        color: "rgba(34, 40, 50, 0.5)",}}
                        >
                            Or
                        </Typography>
                        <Divider sx={{width:"45%"}}/>
                    </Grid>
                    <Grid item xs={12} sx={{justifyContent: "center",display: "flex",}}>
                        <SignUpForm/>
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex",justifyContent: "center",}}>
                     <Link to="/login" style={{textDecoration:"none"}}><Typography sx={{color:"rgba(255, 189, 53, 0.6)"}}>Sign in instead</Typography></Link>    
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}