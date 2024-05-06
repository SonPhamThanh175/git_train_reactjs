import { makeStyles } from '@material-ui/core/styles';
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
import { Link, NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Register from '../../features/Auth/components/Register';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {   IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { logout } from 'features/Auth/userSlice';
import HomeIcon from '@mui/icons-material/Home';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'red',
    },
    appBar: {
        // backgroundColor: theme.palette.secondary.main
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // padding: '0 30px',
        // backgroundColor: 'transparent', // Đặt màu nền là trong suốt
        // boxShadow: 'none', // Loại bỏ đổ bóng
        // backdropFilter: 'blur(10px)', 
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color:'black'
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color:'black',
    }
}));


export default function ButtonAppBar() {
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const history = useHistory();
    const handleClickOpen = () => {
        // setOpen(true);
        history.push('/NotFound');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    };

    const handleLogoutClick = () => {
        const action = logout()
        dispatch(action)
    }
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position='static' 
                // className={classes.appBar} 
                className='appBar' 
                sx={{  
                    backgroundColor: 'transparent', // Đặt màu nền là trong suốt
                    boxShadow: 'none', // Loại bỏ đổ bóng
                    backdropFilter: 'blur(10px)' 
                }}
            >
                <Toolbar>
                    <HomeIcon className={classes.menuButton} />
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
                    {!isLoggedIn && (
                        <Button 
                            // color='inherit'  
                            onClick={handleClickOpen}
                        >
                            Login
                        </Button>
                    )}
                    {isLoggedIn && (
                        <IconButton 
                            // color='inherit'
                            onClick={handleUserClick}
                        >
                            <AccountCircle/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      getContentAnchorEl={null}
                  >
                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
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

// export default function ButtonAppBar() {
//     return (
//         <Box
//             sx={{ 
//                 width:'100%',
//                 // height:(theme) => theme.trello.appBarHeight,
//                 display:'flex',
//                 alignItems:'center',
//             }}
//         >
//             <Box>Trello</Box>
//             <Box></Box>
//         </Box>
//     )
// }

