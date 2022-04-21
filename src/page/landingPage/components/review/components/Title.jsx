import React from 'react';
import {Box,Typography} from '@mui/material';


export default function Title(){
    return(
        <Box sx={{    textAlign: "center",alignItems: "center",display: "flex",flexDirection: "column",}}>
            <Typography sx={{fontSize: "35px",lineHeight: "50px",width:"40%"}}>
            Thousands of satisfied customers have put their trust in us.
            </Typography>
            <Typography sx={{fontSize: "16px",lineHeight: "30px",width:"40%"}}>
            These are the accounts of our customers who joined us with great enthusiasm after discovering this bizarre feature.
            </Typography>
        </Box>
    )
}