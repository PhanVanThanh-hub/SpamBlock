import React from "react";
import { Grid, Typography, Button, Box, Paper, CardMedia,Card,CardContent  } from "@mui/material";
import youtube from "../../../static/youtubesocial.png";
import fb from '../../../static/chooseSocialNetwork/fb.png';
import ig from '../../../static/chooseSocialNetwork/ig.png';
import tw from '../../../static/chooseSocialNetwork/twtich.png';
import ytb from '../../../static/chooseSocialNetwork/ytb.png';
import gmail from '../../../static/chooseSocialNetwork/gmail.png';
import twitch from '../../../static/chooseSocialNetwork/Twitch.png';
import Footer from '../../../components/Footer/index';

export default function ChooseSocialNetwork ()  {
  return(
 
    <Box sx={{ display: "flex",flexDirection: "column" }}>
      <Paper sx={{ borderRadius: "20px", height: "285px",  width: "1138px",marginTop:"120px",
      background: "linear-gradient(rgba(229, 9, 20, 0.6369),rgba(229, 9, 20, 0.6369),rgba(229, 9, 20, 0.4844) , rgba(229, 9, 20, 0.2957),rgba(229, 9, 20, 0))"}}>
        <Grid container spacing={2} >
          <Grid item xs={6} >
            <Grid container spacing={1} sx={{color:"white",justifyContent:"center",display:"flex",paddingLeft:"40px",paddingTop:"40px"}}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "36px", lineHeight: "43px" }}>
                  HorusBLOCK on Youtube
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "19px", lineHeight: "23px" }}>
                  With HorusBLOCK,negative or contradictory comments on YouTube
                  streams will no longer be visible.
                </Typography>
              </Grid>
              <Grid item xs={12} >
                <Button sx={{ color: "#E50914",backgroundColor:"#FFFFFF",textTransform: "none" }}>Access to Youtube</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{justifyContent: "center",display: "flex",}}>
            <CardMedia
              component="img"
              height="300"
              
              sx={{width:"300px"}}
              image={youtube}
              alt="youtube"
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} sx={{marginTop:"50px"}}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: "26px",position: "relative",'&::before':{
              content: `""`,
              width: "338px",
              height: "5px",
              backgroundColor:"#FFBD35",position: "absolute",
              borderRadius: "5px",
              top: "-10px"
            }}}>Social Networks</Typography>
          </Grid>
          <Grid item xs={12} sx={{flexDirection: "row",display: "flex",marginLeft:"52px"}}  >
            <Grid item >
              <Card sx={{ display: 'flex' ,backgroundColor:"#4267B2",width:"280px",height:"150px",borderRadius:"15px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Facebook</Typography>
                    <Typography sx={{fontSize:"12px"}}>Facebook helps you connect and share with the people in your life.</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={fb}
                  alt="fb"
                />
              </Card>
            </Grid>
            <Grid item sx={{marginLeft:"52px"}} >
              <Card sx={{ display: 'flex' ,backgroundColor:"#E95950",width:"280px",height:"150px",borderRadius:"15px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Instagram</Typography>
                    <Typography sx={{fontSize:"12px"}}>Instagram helps you connect with everybody you want.</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={ig}
                  alt="fb"
                />
              </Card>
            </Grid>
            <Grid item sx={{marginLeft:"52px"}}>
              <Card sx={{ display: 'flex' ,backgroundColor:"#1DA1F2",width:"280px",height:"150px" ,borderRadius:"15px"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Twitter</Typography>
                    <Typography sx={{fontSize:"12px"}}>Happening right now..</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={tw}
                  alt="fb"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} sx={{marginTop:"50px"}}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: "26px",position: "relative",'&::before':{
              content: `""`,
              width: "338px",
              height: "5px",
              backgroundColor:"#FFBD35",position: "absolute",
              borderRadius: "5px",
              top: "-10px"
            }}}>Video Sharing Web</Typography>
          </Grid>
          <Grid item xs={12} sx={{flexDirection: "row",display: "flex",marginLeft:"52px"}}  >
            <Grid item >
              <Card sx={{ display: 'flex' ,backgroundColor:"#E50914",width:"280px",height:"150px",borderRadius:"15px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Youtube</Typography>
                    <Typography sx={{fontSize:"12px"}}>Please login to like videos, comment and subscribe to the channel.</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={ytb}
                  alt="fb"
                />
              </Card>
            </Grid>
            <Grid item sx={{marginLeft:"52px"}} >
              <Card sx={{ display: 'flex' ,backgroundColor:"#CC33FF",width:"280px",height:"150px",borderRadius:"15px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Twitch </Typography>
                    <Typography sx={{fontSize:"12px"}}>Join the Twitch community! Discover the best live shows anywhere.</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={twitch}
                  alt="fb"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} sx={{marginTop:"50px"}}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: "26px",position: "relative",'&::before':{
              content: `""`,
              width: "338px",
              height: "5px",
              backgroundColor:"#FFBD35",position: "absolute",
              borderRadius: "5px",
              top: "-10px"
            }}}>The other types of website</Typography>
          </Grid>
          <Grid item xs={12} sx={{flexDirection: "row",display: "flex",marginLeft:"52px"}}  >
            <Grid item >
              <Card sx={{ display: 'flex' ,backgroundColor:"#EA4335",width:"280px",height:"150px",borderRadius:"15px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' ,color:"white",justifyContent: "center",display: "flex",flexDirection: "column",}}>
                    <Typography>Gmail</Typography>
                    <Typography sx={{fontSize:"12px"}}>Secure, smart and easy-to-use email</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height:100,position: "relative",margin: "auto", }}
                  image={gmail}
                  alt="fb"
                />
              </Card>
            </Grid>
 
          </Grid>
        </Grid>
      </Paper>
      <Footer/>
    </Box>
     
 
  )
   
}
