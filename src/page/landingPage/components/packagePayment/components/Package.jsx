import React from 'react';
import {Paper ,Typography,Grid,List,ListItem,ListItemIcon,ListItemText,Button} from '@mui/material';
import CheckIcon from '@material-ui/icons/Check';
export default function Package(props){
    const {packageT} = props
    return(
        <Paper sx={{width:"330px",height:"760px",borderRadius:"10px"}} elevation={3} >
            <Grid container spacing={2} sx={{height:"100%"}}>
                <Grid item xs={12} sx={{flexDirection: "column",alignItems: "center",height:"30%" , justifyContent:"flex-end",display:"flex"}}>
                    <Typography sx={{fontWeight: "bold",fontSize: "18px",    justifyContent: "center",display: "flex"}}>{packageT.title}</Typography>
                </Grid>
                <Grid item xs={12} sx={{height:"70%"}}>
                    <Grid container spacing={1} sx={{height:"100%"}}  direction="column" justifyContent="space-between">
                        <Grid item  >
                            <Paper sx={{ display: "flex", justifyContent: "center",}} elevation={0} >
                                <List dense={false}>
                                    {packageT.detail.map((benefit,index)=>{
                                        return(
                                            <ListItem>
                                                <ListItemIcon sx={{minWidth:"30px",justifyContent: "center" }}>
                                                    <CheckIcon style={{color:"#2FAB73",width:"18px",height:"15px"}} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography sx={{fontSize: "14px"}}>{benefit}</Typography>}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                     
                               
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item   >
                            <Paper elevation={0} >
                                <Grid container spacing={1} sx={{    flexDirection: "column",alignItems: "center"}}>
                                    <Grid item >
                                        <Typography sx={{fontWeight: "500",fontSize: "25px"}}>{packageT.price}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{width: "177.88px",border: "2px solid #FFBD35",borderRadius: "50px",height:"45px"}}>
                                            Select
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}