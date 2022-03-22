import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput ,TextField} from '@mui/material';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: "10px 0",
    },
    root1: {
        "& .MuiOutlinedInput-notchedOutline":{
            border :"1px solid rgba(255, 189, 53, 0.6)",
             
        },
        "&.Mui-focused":{
            borderColor:"yellow"
        },
        
    }
}));

 

function PasswordField(props) {
    const classes = useStyles();
    const { form, name, label,disabled } = props;

    const { formState: { errors } } = form
    const hasError = errors[name]

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState, }) => {
                    return (
                        <>
                        <InputLabel sx={{fontStyle: "normal",textAlign:"left",fontWeight:"400",fontFamily: 'Rubik',fontSize: "16px"}}  error={!!hasError}>{label}</InputLabel> 
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                             
                            <OutlinedInput
                                className={classes.root1}
                                onBlur={onBlur}
                                onChange={onChange}
                                inputRef={ref}
                                fullWidth
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                disabled={disabled}
                                error={!!hasError}
                                labelWidth={70}
                         
                            />
                        </FormControl>
                        </>
                    )
                }}
            />
            <FormHelperText style={{ color: "red"}}>
                {errors[name]?.message}
            </FormHelperText>
        </div>
    );
}

export default PasswordField;