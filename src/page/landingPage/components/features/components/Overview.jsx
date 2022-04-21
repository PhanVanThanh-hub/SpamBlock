import React from 'react';
import {Avatar,Grid,Typography } from '@mui/material';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import TwitterIcon from '@material-ui/icons/Twitter';
export default function Overview(){
    const data=[
        {icon:<PersonOutlineTwoToneIcon />,number:"50K+",type:"Clients"},
        {icon:<LocationOnTwoToneIcon />,number:"20",type:"Countries"},
        {icon:<TwitterIcon /> ,number:"50K+",type:"Social network"},
    ]
    return(
      <> 
          <Grid container sx={{display: "flex",alignItems: "center",justifyContent: "center",}}  >
              {data.map((value,index)=>{
                  return(
                    <Grid item xs={3} >
                        <Grid container >
                            <Grid item xs={3} sx={{alignItems: "center",justifyContent: "center",display: "flex",}}>
                                <Avatar sx={{backgroundColor:"#FFFEEC",height:"55px",width:"55px",'& .MuiSvgIcon-root':{
                                    color:"#FFBD35",height:"25px",width:"25px"
                                }}}>
                                    {value.icon }
                                </Avatar>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography sx={{fontWeight: "700",fontSize: "25px",lineHeight: "30px",}}>{value.number}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{fontWeight: "400",fontSize: "20px",lineHeight: "30px",}}>{value.type}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                  )
              })}
               
               
               
          </Grid>
 
 
    </>
    )
}