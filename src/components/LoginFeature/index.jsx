import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import './styles.scss';
import { Typography } from '@material-ui/core';

LoginFeature.propTypes = {};
function LoginFeature(props) {
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
                            <Typography variant="caption">
                                Already have an account ?
                            </Typography>
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
                            <Typography >
                                Dont have an account ? 
                            </Typography>
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

export default LoginFeature;

// import React from 'react';
// import { Result, Button } from 'antd';
// import { Link } from 'react-router-dom';

// const LoginFeature = () => {
//   return (
//     <Result
//       status="404"
//       title="404"
//       subTitle="Sorry, the page you visited does not exist."
//       extra={
//         <Link to="/products">
//           <Button type="primary">Back Home</Button>
//         </Link>
//       }
//     />
//   );
// };

// export default LoginFeature;
