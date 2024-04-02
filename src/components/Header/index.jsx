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

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will
                        send updates occasionally.
                    </DialogContentText>
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
                    />
                    <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='password'
                        label='Your password'
                        type='password'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
