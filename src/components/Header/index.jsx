import * as React from 'react';
import { Avatar,Button ,Typography,Stack , Paper ,Grid} from '@mui/material';
import logo from '../../static/logo.png';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {   logout } from '../../redux/auth/slice';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    stack:{
        '& .MuiButton-root':{
            fontWeight: "400",fontSize: "16px",lineHeight: "19px",color: "#4F5665",textTransform: "none"
        }
    },
 
 
}))
export default function Header() {
    const classes = useStyles()
    const history = useHistory();
    const isLogin = useSelector(state=>state.auth.login)
    const dispatch = useDispatch()
    const onClickLogout =async()=>{
        const actions = logout()
        await dispatch(actions)
        return history.replace('/login');
    }
    const renderLogin=()=>{
        if(isLogin){
            return(
            <Stack spacing={2} direction="row" className={classes.stack} sx={{alignItems:"center" }}>
                <Avatar>H</Avatar>
                <Button variant="outlined" sx={{borderRadius:"50px",color: "#FFBD35",borderColor: "#FFBD35",}} onClick={onClickLogout}>Logout</Button> 
            </Stack>
            )
        }
        return(
            <Stack spacing={2} direction="row" className={classes.stack}>
                <Link to="/login" style={{textDecoration:"none"}}><Button variant="text">Sign in</Button></Link>
                <Link to="/signup" style={{textDecoration:"none"}}><Button variant="outlined" sx={{borderRadius:"50px",color: "#FFBD35",borderColor: "#FFBD35",}}>Sign up </Button></Link>
            </Stack>
        )
    }
  return (
    <Paper   sx={{ position:"fixed",   backgroundColor: "transparent",color:"black" ,width:"100%" }} elevation={3}>
        <Grid container spacing={1} alignItems="center" justifyContent="space-between" direction="row" sx={{padding:"0px 80px"}}>
            <Grid item  >
                <Link to="/" style={{textDecoration:"none",display:"flex",alignItems: "center" }}>
                    <Avatar src={logo} sx={{height:"100px",width:"100px"}}/>
                    <Typography sx={{fontWeight: "500",fontSize: "20px",lineHeight: "24px",color:"#222832",}}>HorusBLOCK</Typography>
                </Link>
            </Grid>
            <Grid item>
                <Stack spacing={2} direction="row" className={classes.stack}>
                    <Button variant="text">About</Button>
                    <Button variant="text">Enterprise </Button>
                    <Button variant="text">Pricing</Button>
               
                    <Link to="/choose_social_network" style={{textDecoration:"none"}}>
                        <Button variant="text">Setting</Button>
                    </Link>
                    <Button variant="text">Company</Button>

                </Stack>
            </Grid>
            <Grid item>
                {renderLogin()}
            </Grid>
        </Grid>
    </Paper>
  );
}
