import { TextField } from '@material-ui/core';
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

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool, // Sửa thành bool thay vì object
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name];

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (

            <FormControl
                fullWidth
                margin='normal'
                // sx={{ m: 1, width: '25ch' }}
                variant='outlined'
            >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={form.control}
                    as={OutlinedInput}
                    id={name}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                edge='end'
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={label}
                    sx={{ background: 'transparent',
                    border:'none',
                    outline: 'none',
                    // border:'2px solid rgba(255,255,255,2)',
                    borderRadius: '40px', }} 
                />
            </FormControl>
    );
}

export default PasswordField;
