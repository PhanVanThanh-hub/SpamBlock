import React from 'react';
import {Grid ,Typography} from '@mui/material';
export default function Title(){
    return(
        <Grid container spacing={2} sx={{flexDirection:"column"}}>
            <Grid item>
                <Typography sx={{fontWeight:"500", fontSize:"35px" ,lineHeight:"50px", textAlign:"center"}}>Choose Your Plan</Typography>
            </Grid>
            <Grid item>
                <Typography sx={{fontWeight:"400", fontSize:"16px" ,lineHeight:"30px", textAlign:"center"}}>Let's choose the best package for you and have fun exploring it.</Typography>
            </Grid>
        </Grid>
    )
}