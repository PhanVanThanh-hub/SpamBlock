import { yupResolver } from '@hookform/resolvers/yup';
import {Button, Typography,Grid,Checkbox  } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../components/FormFiled/InputField';
import PasswordField from '../../../components/FormFiled/PasswordField';
import CheckboxField from '../../../components/FormFiled/CheckBoxField';

 
function SignUpForm(props) {

    const { onSubmit ,setVisibleLogin } = props

    const schema = yup.object().shape({
        firstName:yup.string().required("Xin vui lòng nhập first name"),
        lastName:yup.string().required("Xin vui lòng nhập last name"),
        email: yup.string().required("Xin vui lòng nhập email"),
        password: yup.string().required("Xin vui lòng nhập mật khẩu"),
        acceptTerms: yup.bool()
            .oneOf([true], 'Please choose to have read the terms')
    });

    const form = useForm({
        defaultValue: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            acceptTerms:""

        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
         console.log("values:",values)
    }

    
    return (
        <div style={{width: "100%"}}>
            <form initialValues={{ remember: true }} onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <InputField form={form} name="firstName" label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField form={form} name="lastName" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField form={form} name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordField form={form} name="password" label="Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{textAlign:"left",fontFamily: 'Rubik',fontWeight: 400,fontSize: "16px",lineHeight: "136.5%",color: "rgba(0, 0, 0, 0.6)",}}>
                            Please create a strong password and with at least 8 characters.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{color:"black",fontSize: "16px",textAlign:"left"}}>
                        <CheckboxField form={form} name="acceptTerms" label="AcceptTerms"/>
                     </Grid>
                </Grid>
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

export default SignUpForm;