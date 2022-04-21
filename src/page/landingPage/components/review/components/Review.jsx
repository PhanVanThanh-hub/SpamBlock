import React from 'react';
import {Card,CardHeader,CardContent,Avatar,Typography,Stack} from '@mui/material';
import StarIcon from '@material-ui/icons/Star';

export default function ReviewDetail(props){
    const {review} = props
    return(
        <Card sx={{ maxWidth: 345 ,border:"2px solid #FFBD35",borderRadius:"10px",height:"190px"}}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={review.avatar}/>
                }
                action={
                    <Stack sx={{    flexDirection: "row",alignItems: "center"}}>
                        <Typography>{review.rating}</Typography>
                        <StarIcon style={{width:" 0.675em",height:" 0.675em",color:"#FEA250"}}/>
                    </Stack>
                     
                }
                title={ <Typography sx={{fontWeight:"bold",fontSize:"18px"}}>{review.name}</Typography>}
                subheader={<Typography sx={{ fontSize:"14px"}}>{review.location}</Typography>}
            />
            <CardContent sx={{    padding: "0px 16px"}}>
                <Typography variant="body2" sx={{color:"#222832"}}>
                {review.content}
                </Typography>
            </CardContent>
  
       
        </Card>
    )
}