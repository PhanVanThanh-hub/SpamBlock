import React from 'react';
import image1 from '../../../../../static/avatar1.png';
import image2 from '../../../../../static/avatar2.png';
import image3 from '../../../../../static/avatar3.png';
import ReviewDetail from './Review';
import {Grid,Pagination } from '@mui/material';

export default function ListReview(){
    const reviews=[
        {avatar:image1,name:"Antony Silva",location:"Paris, Frace",rating:"4.5",content:"“Well, I was very pleased with HorusBLOCK; it exceeded my expectations and there have been no issues thus far.”."},
        {avatar:image2,name:"Rosé Kim",location:"Gangnam, South Korea",rating:"4.5",content:"“It's convenient for me because my gmail account is becoming cleaner by the day.”"},
        {avatar:image3,name:"Cris Mark",location:"Manchester, England",rating:"4.5",content:"“This is critical to my parenting because it protects my child from negative comments.”"},
      ]
    return(
        <>
            <Grid container spacing={3} sx={{justifyContent: "center"}}>
                {reviews.map((value,index)=>{
                    return <Grid   item key={index} >
                        <ReviewDetail review={value}/>
                    </Grid> 
                     
                })}
            </Grid>
            <Pagination count={3} size="large" sx={{display: "flex",justifyContent: "flex-end"}} />
        </>
    )
}