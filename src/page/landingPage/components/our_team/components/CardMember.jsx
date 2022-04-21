import React from 'react';
 
import {Card,CardMedia,CardContent, Typography} from '@mui/material';
 
export default function OurTeamPage(props){
    const {information} = props
    return(
        <Card sx={{    width: "260px"}} >
            <CardMedia
                component="img"
                height="300"
                sx={{    width: "260px"}}
                image={information.image}
                alt="green iguana"
                />
            <CardContent sx={{textAlign:"center"}}>
                <Typography gutterBottom sx={{fontWeight: "500",fontSize: "25px",lineHeight: "50px",}} component="div">
                    {information.name}
                </Typography>
                <Typography sx={{fontWeight: "400",fontSize: "16px",lineHeight: "30px",}}>
                    {information.role}
                </Typography>
            </CardContent>
        </Card>
    )
}