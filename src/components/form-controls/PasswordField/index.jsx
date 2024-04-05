import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';


PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.object,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name];

    const [showPassword,setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(x => !x)
    }

    return (
        <div>
            <Controller
                name={name}
                control={form.control}
                as={TextField}
                margin='normal'
                variant='outlined'
                fullWidth
                label={label}
                disabled={disabled}
                error={!!hasError}
                helperText={errors[name]?.message}
            />
            <FormControl
                // sx={{ m: 1, width: '25ch' }}
                variant='outlined'
                fullWidth
                margin='normal'
            >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <OutlinedInput 
                    name={name}
                    control={form.control}
                    as={OutlinedInput}
                    id={name}
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={toggleShowPassword}
                                edge='end'
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    disabled={disabled}
                    error ={!!hasError}
                />
                <FormHelperText error = {!!hasError}>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;
