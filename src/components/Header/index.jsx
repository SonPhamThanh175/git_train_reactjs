import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './styles.module.css';
import Register from 'features/Auth/components/Register';
import Avatar from '@mui/material/Avatar';
import PasswordField from 'components/form-controls/PasswordField';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const value = []
    // console.log(value);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <GitHubIcon />
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        <NavLink
                            to='/'
                            className={styles.link}
                        >
                            {' '}
                            ezCode
                        </NavLink>
                    </Typography>
                    <NavLink
                        to='/todos'
                        className={styles.link}
                    >
                        <Button color='inherit'>Todo</Button>
                    </NavLink>
                    <NavLink
                        to='/albums'
                        className={styles.link}
                    >
                        <Button color='inherit'>Album</Button>
                    </NavLink>
                    <Button color='inherit' onClick={handleClickOpen}>Register</Button>
                </Toolbar>
            </AppBar>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson);
                        // value.push(formJson);
                        
                        handleClose();
                    },
                }}
            >
                <DialogContent>
                    <Register/>
                    <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='email'
                        label='Email Address'
                        type='email'
                        fullWidth
                        variant='standard'
                        helperText='please enter your email address'
                    />
                     <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='name'
                        label='Name'
                        type='name'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='password'
                        label='Password'
                        type='password'
                        fullWidth
                        variant='standard'
                    />
                    {/* <PasswordField/> */}
                </DialogContent>
                <DialogActions>
                <Button type='submit'
                            variant='contained'
                            color='primary'
                            fullWidth
                    >
                        Subscribe</Button>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
