import React from 'react';
import {Box,CardMedia } from '@mui/material';
import image from '../../../../../static/landingpage@500x500.PNG';
export default function Image(){
    return(
        <Box sx={{display: "flex",
            justifyContent: "center",}}>
             <CardMedia
                component="img"
                sx={{    height: "500px",
                    width: "500px",}}
                image={image}
                alt="Paella dish"
            />
        </Box>
    )
}