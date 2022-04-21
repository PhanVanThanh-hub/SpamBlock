import React from "react";
import {Box,Grid} from "@mui/material";

import Overview from '../components/Overview';
import Image from '../components/Image';
import Feature from '../components/Features';
export default function Features() {
  return (
    <Box sx={{height:"100vh" }}>
      <Grid container >
        <Grid item xs={12} sx={{  justifyContent: "center",display: "flex"}}>
          <Overview/>
        </Grid>
        <Grid item xs={12} sx={{marginTop:"100px"}}>
          <Grid container spacing={1}>
            <Grid item xs={6} >
              <Image/>
            </Grid>
            <Grid item xs={6} >
              <Feature/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
       
    </Box>
  );
}
