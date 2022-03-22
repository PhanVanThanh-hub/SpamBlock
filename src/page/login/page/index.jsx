import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../components/Logo';
import Form from '../components/Form1';
export default function LoginPage(){
    return(
        <Box sx={{height:"100vh",justifyContent: "center",display: "flex",alignItems: "center",}}>
            <Grid container sx={{height:"100%"}}>
                <Grid item xs={4} sx={{height:"100%"}} >
                    <Logo/> 
                </Grid>
                <Grid item xs={8} sx={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,}}>
                    <Form/>
                </Grid>
            </Grid>
        </Box>
    )
}