import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {Paper,Typography,Grid,List,ListItem,ListItemAvatar,Avatar,ListItemText} from '@mui/material';
export default function Feature(){
    const features=["Powerful online protection.","Proactively block annoying spam.","24/7 support chatbot.","No specific block time limits."]
    return(
         
        <Paper elevation={0} sx={{ width:"80%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight: "500",fontSize: "35px",lineHeight: "50px",}}>
                    We Provide Many Features You Can Use
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: "16px",lineHeight: "30px",}}>
                        You can explore the features that we provide with fun and have their own functions for each feature.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <List dense={false}>
                        {features.map((value,index)=>
                        {
                        return(
                            <ListItem>
                            <ListItemAvatar >
                                <Avatar sx={{    backgroundColor: "#2FAB73",width: "20px",height: "20px",}}>
                                <CheckIcon style={{    width: "12px",height: "12px",}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography sx={{fontWeight: "400",fontSize: "14px",lineHeight: "30px",}}>{value}</Typography> }
                            />
                            </ListItem>
                        )})   
                        }
                    </List>
                </Grid>
            </Grid>
        </Paper>
    )
}