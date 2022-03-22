import {
 
    FormHelperText,
 
    Checkbox ,
} from '@mui/material';
import * as React from 'react';

import { Controller } from 'react-hook-form';

export default function CheckboxField(props) {
    const {  form, name, disabled, options } = props
    const { formState: { errors }, setValue } = form
    const hasError = errors[name]
 
    return (
        <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState, }) => {
                    return (
                      <> 
                        <Checkbox sx={{padding: "9px 0px",color:"rgba(255, 189, 53, 0.6)",'&.Mui-checked': {
                                    color: "rgba(255, 189, 53, 0.6)"
                                },}}
                            onBlur={onBlur}
                            onChange={onChange}
                            inputRef={ref}
                            fullWidth
                            variant="outlined"
                            error={!!hasError}
                            disabled={disabled} 
                        />
                        I accept the terms of service and privacy policy
                        <FormHelperText error={!!hasError}>
                            {errors[name]?.message}
                        </FormHelperText>
                        </>
                    )
                }}
                 
            />
         
    );
}
