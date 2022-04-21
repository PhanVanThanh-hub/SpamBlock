import React from 'react';
import Intro from '../components/intro/page/index';
import {Box } from '@mui/material';
import Features from '../components/features/page/index';
import PackagePayment from '../components/packagePayment/page/index';
import OurTeamPage from '../components/our_team/page/index';
import Review from '../components/review/page/index';
import Footer from '../../../components/Footer/index';

export default function LandingPage(){
    return(
        <Box sx={{height:"100%",padding:"0px 0px"}}>
            <Intro/>
            <Features/>
            <PackagePayment/>
            <OurTeamPage/>
            <Review/>
            <Footer/>
        </Box>
    )
}