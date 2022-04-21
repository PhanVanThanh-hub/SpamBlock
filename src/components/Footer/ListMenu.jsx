import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ListMenuProps( props ) {
  const { content,title } = props;
 
  return (
    <>
      <Typography sx={{fontWeight: "bold" ,marginBottom: "10px"}}>{title}</Typography>

      {content.map((value, index) => (
        <List dense={false} key={index}>
          <ListItem sx={{padding:"0px",color: "#4F5665"}} >
            <ListItemText primary={value} />
          </ListItem>
        </List>
      ))}
    </>
  );
}
