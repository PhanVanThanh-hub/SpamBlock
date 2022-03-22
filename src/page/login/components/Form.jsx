import { yupResolver } from '@hookform/resolvers/yup';
import {Button,Box,Typography} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import InputField from '../../../components/FormFiled/InputField';
import PasswordField from '../../../components/FormFiled/PasswordField';


 
function LoginForm(props) {

    const { onSubmit ,setVisibleLogin } = props

    const schema = yup.object().shape({
        username: yup.string().required("Xin vui lòng nhập username"),
        password: yup.string().required("Xin vui lòng nhập mật khẩu")
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
         console.log("values:",values)
    }

    
    return (
        <div style={{width: "100%"}}>
            <form initialValues={{ remember: true }} onSubmit={form.handleSubmit(handleSubmit)}>
                <div>
                    <InputField form={form} name="username" label="Username" />
                </div>
                <div style={{ margin: "15px 0 10px 0" }}>
                    <PasswordField form={form} name="password" label="Password" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,width:"100%"}}>
 
                    <Button type="primary" htmlType="submit" shape="round" 
                        style={{ width: "100%" ,background: "#FFBD35",borderRadius: "8px",textTransform: "capitalize",}}
                    >
                       <Typography sx={{color:"white"}}>
                       Sing in
                       </Typography>
                         
                    </Button>
 
                </div>
            </form>
        </div>
    );
}

export default LoginForm;