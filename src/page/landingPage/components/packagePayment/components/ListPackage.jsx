import React from 'react';
import { Box,Grid } from '@mui/material';
import Package from './Package';
export default function ListPackage(){
    const packageList=[
        {title:"Free Plan",detail:["Unlimited Number of Block","No Block Logs","Works on All Devices"],price:"Free"},
        {title:"Standard Plan",detail:["Unlimited Number of Block","Yes Block Logs","Works on All Devices","Connect Anyware"],price:"$10 / mo."},
        {title:"Premium Plan",detail:["Unlimited Number of Block","Yes Block Logs","Works on All Devices","Connect Anyware","Get New Features"],price:"$25 / mo."},
    ]
 
    return(
        <Box sx={{marginTop:"20px"}}>
            <Grid container spacing={3}>
                {packageList.map((packageT,index)=>{
                    return(
                        <Grid item key={index}>
                        <Package packageT={packageT}/>
                    </Grid>
                    )
                })}
                 
            </Grid>
        </Box>
    )
}