import * as React from 'react';
 
import {Paper,Typography,Grid,Badge,Avatar  } from '@mui/material';

export default function EasyUse() {
  return (
 
    <Paper elevation={3} sx={{width:"1140px",height:"233px",position: "absolute",left: "150px",top: "-30%",   justifyContent: "space-evenly",display: "flex",padding: "0px 30px",flexDirection: "column",}}>
        <Typography sx={{fontSize: "30px"}}>Easy use</Typography>
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Badge 
                 overlap="circular" badgeContent="1"
                 anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                <Avatar
                  
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    >
                    B
                    </Avatar>
                </Badge >
                <Typography>Choose the social network that you want </Typography>
            </Grid>
            <Grid item xs={3}>
                <Badge 
                 overlap="circular" badgeContent="1"
                 anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                <Avatar
                  
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    >
                    B
                    </Avatar>
                </Badge >
                <Typography>Choose the social network that you want </Typography>
            </Grid>
            <Grid item xs={3}>
                <Badge 
                 overlap="circular" badgeContent="1"
                 anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                <Avatar
                  
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    >
                    B
                    </Avatar>
                </Badge >
                <Typography>Choose the social network that you want </Typography>
            </Grid>
            <Grid item xs={3}>
                <Badge 
                 overlap="circular" badgeContent="1"
                 anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                <Avatar
                  
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    >
                    B
                    </Avatar>
                </Badge >
                <Typography>Choose the social network that you want </Typography>
            </Grid>
        </Grid>
    </Paper>
 
  );
}
