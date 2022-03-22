import React from "react";
import Box from "@mui/material/Box";
import {Grid,Typography,TextField,Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
 
import { Link } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border:"1px solid rgba(255, 189, 53, 0.6)"
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
   
  },
   
    
}))
export default function ModalResetPassword() {
    const classes= useStyles()
  return (
    <Box
      sx={{
        width: "610px",
        height: "450px",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        backgroundColor:"white",
        padding: "50px"
      }}
    >
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography sx={{fontWeight: "bold",fontSize: "19px",lineHeight:" 136.5%" ,color:"#000000",}}>
                    Reset Password - HorusBLOCK
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{fontWeight: "400",fontSize: "19px",lineHeight:" 136.5%" ,color:"#000000",}}>
                Reset your password by filling in your username or e-mail address. You will then receive an email with a 
                link that will let you enter a new password. If you don't receive the email, 
                please contact <span style={{color:"#FFBD35"}}>support@horusblock.com</span> 
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{fontWeight: "bold",fontSize: "19px",lineHeight:" 136.5%" ,color:"#000000",}}>E-mail address</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic"  className={classes.root} sx={{width:"100%",height:"57px"}} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                    <Grid item>
                        <Link to="/login" style={{textDecoration:"none"}}> 
                        <Button variant="outlined" 
                            sx={{fontSize: "17px",textTransform: "none",borderRadius:"8px",width:"256px",height:"58px",
                            borderColor:"rgba(255, 189, 53, 0.6)",color:"rgba(255, 189, 53, 0.6)",'&:hover':{
                                borderColor:"rgba(255, 189, 53, 0.6)"
                            }
                            }}>
                            Back to login
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" 
                            sx={{fontSize: "17px",textTransform: "none",borderRadius:"8px",width:"256px",
                                height:"58px",borderColor:"rgba(255, 189, 53, 0.6)",backgroundColor:"rgba(255, 189, 53, 0.6)",
                                color:"white",'&:hover':{
                                    backgroundColor:"rgba(255, 189, 53, 0.6)"
                                }
                            }}
                        >
                            Reset my password 
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}
