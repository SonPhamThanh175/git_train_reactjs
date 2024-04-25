import { makeStyles } from '@material-ui/core/styles';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Register from '../../features/Auth/components/Register';
import styles from './styles.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <JavascriptIcon className={classes.menuButton} />
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to='/'>Font-end</Link>
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
                disableEscapeKeyDown
                disableBackdropClick
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
                    <Register/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
