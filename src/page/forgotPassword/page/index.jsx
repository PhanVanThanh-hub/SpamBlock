import React from "react";
import Box from "@mui/material/Box";
 
import Header from "../../../components/Header/index";
import imgForgotPassword from '../../../static/forgotPassword.jpg';
import ModalResetPassword from '../components/Main';
export default function ForgotPasswordPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        backgroundImage: `url(${imgForgotPassword})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}
    >
    
      <ModalResetPassword/>
    </Box>
  );
}
