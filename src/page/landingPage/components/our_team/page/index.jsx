import React from 'react';
import Title from '../components/Title';
import {Box } from '@mui/material';
import ListCardMember from '../components/ListCardMember';
export default function OurTeamPage(){
    return(
        <Box sx={{height:"100%" }}>
            <Title/>
            <ListCardMember/>
        </Box>
    )
}