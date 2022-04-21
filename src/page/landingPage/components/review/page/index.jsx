import React from 'react';
import Title from '../components/Title';
import ListReview from '../components/ListReview';
import {Box } from '@mui/material';
 
export default function Review(){
    return(
        <Box sx={{height:"100vh" }}>
            <Box sx={{height:"50vh",    display: "flex",    alignItems: "center",justifyContent: "center",}}>
                <Title/>
            </Box>
            <Box sx={{height:"50vh",    display: "flex",      flexDirection: "column",justifyContent: "space-around",}}>
                <ListReview/>
            </Box>
             
        </Box>
    )
}