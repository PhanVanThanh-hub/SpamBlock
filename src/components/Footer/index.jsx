import React from "react";
import { Box, Grid, Avatar,Typography} from "@mui/material";
import ListMenuProps from './ListMenu';
import logo from '../../static/logo.png';
 

export default function Footer() {
  const Company = ["About Us", "Team", "Career", "News"];
  const Product = [
    "Overview",
    "Pricing",
    "Languages",
    "Social network",
    "Blog",
    "Developers",
  ];
  const Support = [
    "Help",
    "FAQ",
    "Tutorials",
    "Cookie Policy",
    "Privacy Policy",
    "Terms of Service",
  ];
  const FollowUs = ["Facebook", "Twitter", "Instagram"];
  return (
    <Box sx={{backgroundColor:"#F8F8F8", height: "70vh" ,position: "relative",display: "flex",flexDirection: "column",justifyContent: "end",marginTop:"160px"}}>
      <Grid container spacing={1} sx={{ padding:" 100px 80px 0px 80px ",height:"100%"}}>
        <Grid item xs={4} sx={{display: "flex",     alignItems: "flex-start" }}>
          <Grid container>
            <Grid item xs={12} sx={{    flexDirection: "row",display: "flex",alignItems: "center"}}>
              <Avatar src={logo} sx={{height:"100px",width:"100px"}}/>
              <Typography sx={{fontWeight: "bold",fontSize: "20px",lineHeight: "24px",color:"#222832",}}>HorusBLOCK</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "15px",lineHeight: "24px",color:"#222832",}}>HorusBLOCK is</Typography>
            </Grid>
          </Grid>
           
           
        </Grid>
        <Grid item xs={6}   >
          <Grid container spacing={1}     justifyContent= "space-between">
            <Grid item>
              <ListMenuProps content={Company} title="Company"/>
            </Grid>
            <Grid item>
              <ListMenuProps content={Product} title="Product"/>
            </Grid>
            <Grid item>
              <ListMenuProps content={Support} title="Support"/>
            </Grid>
            <Grid item>
              <ListMenuProps content={FollowUs} title="FollowUs"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{backgroundColor:"#FFBD35",justifyContent:"center",height:"36px",display:"flex",alignItems:"center",color:"white"}}>
        <Typography>©2022HorusBLOCK</Typography>
      </Box>
    </Box>
  );
}
