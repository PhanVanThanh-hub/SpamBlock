import * as React from 'react';

import { Avatar,Button ,Typography,Stack ,Box,Paper ,Grid} from '@mui/material';
import logo from '../../static/logo.png';
import { makeStyles } from '@mui/styles';
 

const useStyles = makeStyles(() => ({
    stack:{
        '& .MuiButton-root':{
            fontWeight: "400",fontSize: "16px",lineHeight: "19px",color: "#4F5665",textTransform: "none"
        }
    },
 
 
}))
export default function Header() {
    const classes = useStyles()
  return (
    <Paper   sx={{ position:"fixed",   backgroundColor: "transparent",color:"black",width:"80%" }} elevation={0}>
        <Grid container spacing={1} alignItems="center" justifyContent="space-between" direction="row">
            <Grid item sx={{display: "flex", alignItems: "center" }}>
                <Avatar src={logo} sx={{height:"100px",width:"100px"}}/>
                <Typography sx={{fontWeight: "500",fontSize: "20px",lineHeight: "24px",color:"#222832",}}>HorusBLOCK</Typography>
            </Grid>
            <Grid item>
                <Stack spacing={2} direction="row" className={classes.stack}>
                    <Button variant="text">About</Button>
                    <Button variant="text">Enterprise </Button>
                    <Button variant="text">Pricing</Button>
                    <Button variant="text">Setting</Button>
                    <Button variant="text">Company</Button>

                </Stack>
            </Grid>
            <Grid item>
                <Stack spacing={2} direction="row" className={classes.stack}>
                    <Button variant="text">Sign in</Button>
                    <Button variant="outlined" sx={{borderRadius:"50px",color: "#FFBD35",borderColor: "#FFBD35",}}>Sign up </Button>
                </Stack>
            </Grid>
        </Grid>
    </Paper>
  );
}
