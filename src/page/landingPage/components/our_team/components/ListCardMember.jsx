import React from 'react';
import {Grid} from '@mui/material';

import OurTeamPage from './CardMember';
import avatar1 from '../../../../../static/avatar1.png';
import avatar2 from '../../../../../static/avatar2.png';
import avatar3 from '../../../../../static/avatar3.png';
import avatar4 from '../../../../../static/avatar4.png';
import avatar5 from '../../../../../static/avatar5.png';
export default function ListCardMember(){
    const informations=[
        {name:"Do Trong Quang",image:avatar1,role:"CEO of Horus"},
        {name:"Ngo Thai Son",image:avatar2,role:"CEO of Horus"},
        {name:"Nguyen Duc Tri",image:avatar3,role:"CEO of Horus"},
        {name:"Phan Van Thanh",image:avatar4,role:"CEO of Horus"},
        {name:"Phan Van Thanh",image:avatar5,role:"CEO of Horus"},
    ]
    return(
        <Grid container spacing={3} sx={{    justifyContent: "center"}}>
            {informations.map((information,index)=>{
                return(
                    <Grid item xs={4} key={index}  sx={{justifyContent: "center",display: "flex"}}>
                        <OurTeamPage information={information}/>
                    </Grid>
                )
            })}
             
        </Grid>
    )
}