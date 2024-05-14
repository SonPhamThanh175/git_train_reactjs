import React from 'react';
import PropTypes from 'prop-types';
import Register from 'features/Auth/components/Register';
import Login from 'features/Auth/components/Login';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';
import './styles.scss';

NotFound.propTypes = {};
function NotFound(props) {
    const MODE = {
        LOGIN: 'login',
        REGISTER: 'register',
    };

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    return (
        <div className='wrapper'>
            {mode === MODE.REGISTER && (
                <>
                    <div className='wrapper__register'>
                        <Register />

                        <Box textAlign='center'>
                            <text>
                                Already have an account ?
                            </text>
                            <Button
                                color='primary'
                                onClick={() => setMode(MODE.LOGIN)}
                                style={{ margin: '0 auto' }}
                            >
                                 Login here
                            </Button>
                        </Box>
                    </div>
                </>
            )}
            {mode === MODE.LOGIN && (
                <>
                    <div className='wrapper__login'>
                        <Login />

                        <Box textAlign='center'>
                            <text>
                                Dont have an account ? 
                            </text>
                            <Button
                                color='primary'
                                onClick={() => setMode(MODE.REGISTER)}
                                style={{ margin: '0 auto' }}
                            >
                                Register here
                            </Button>
                        </Box>
                    </div>
                </>
            )}
        </div>
    );
}

export default NotFound;
