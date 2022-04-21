import React from 'react';
import Box from '@mui/material/Box';
import Information from '../components/Information';
import Image from '../components/Image';
export default function Intro(){
    return(
        <Box sx={{height:"100vh",width: "100%",display: "flex",justifyContent: "space-around",alignItems: "center",}}>
            <Box sx={{width:"50%",display: "flex",justifyContent: "center"}}>
                <Information/>
            </Box>
            <Box sx={{width:"50%"}}>
                <Image/>
            </Box>
             
        </Box>
    )
}