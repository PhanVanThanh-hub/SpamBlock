import React from 'react';
import {Paper,Typography,Grid,Button} from '@mui/material';
export default function Information(){
    return(
         
        <Paper elevation={0} sx={{ width:"80%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight: "500",fontSize: "50px",lineHeight: "70px",}}>
                        Make everything clean with HorusBLOCK.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: "16px",lineHeight: "30px",}}>
                    Optimize and improve spam filtering capabilities with ease and fun using HorusBLOCK discover interesting features from us.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button sx={{width: "250px",height: "60px",background: "#FFBD35",color:"white",textTransform: "none",borderRadius: "10px",}}>
                        Get started
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}