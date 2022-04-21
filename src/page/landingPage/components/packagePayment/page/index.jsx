import React from 'react'
import Box from '@mui/material/Box';
import Title from '../components/Title';
import ListPackage from '../components/ListPackage';

export default function PackagePayment(){
    return(
        <Box sx={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"100px"}} >
            <Title/>
            <ListPackage/>
        </Box>
    )
}