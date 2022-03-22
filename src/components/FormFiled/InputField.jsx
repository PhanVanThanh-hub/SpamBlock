import React from 'react';
import { Controller } from "react-hook-form";
import { FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';

const useStyles = makeStyles(() => ({
    root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border:"1px solid rgba(255, 189, 53, 0.6)"
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
   
    
}))
 
function InputField(props) {
    const classes = useStyles();
    const { form, name, label, disabled } = props;
    const { formState: { errors } } = form
    const hasError = errors[name]

    return (
        <div style={{ margin: "10px 0" }}>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState, }) => {
                    return (
                      <> 
                        <InputLabel sx={{color:"#222832",fontStyle: "normal",textAlign:"left",fontWeight:"bold",fontFamily: 'Rubik',fontSize: "16px"}}>{label}</InputLabel>
                        <TextField
                            onBlur={onBlur}
                            onChange={onChange}
                            inputRef={ref}
                            fullWidth
                            variant="outlined"
                            error={!!hasError}
                            disabled={disabled}
                            className={classes.root}
                        />
                        </>
                    )
                }}
            />
            <FormHelperText error={!!hasError}>
                {errors[name]?.message}
            </FormHelperText>
        </div>
    );
}

export default InputField;