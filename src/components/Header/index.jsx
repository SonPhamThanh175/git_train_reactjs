import { HomeOutlined } from '@ant-design/icons';
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { logout } from 'features/Auth/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Register from '../../features/Auth/components/Register';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import { showMiniCart } from 'features/Cart/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import logo from '../../assets/imgs/logo.jpg'; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        padding: '0 30px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
        width: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        marginRight: theme.spacing(2),
    },
    iconButton: {
        color: 'black',
    },
}));

export default function Header() {
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser?.id;
    const dispatch = useDispatch();

    const cartItemsCount = useSelector(cartItemsCountSelector);
    const notifications = useSelector(showMiniCart);

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const history = useHistory();
    const handleClickOpen = () => {
        history.push('/');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseMenu();
        history.push('/');
    };

    const handleCartClick = () => {
        history.push('/cart');
    };
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                className={classes.appBar}
            >
                <Toolbar>
                    <Link to='/' className={classes.title}>
                        <img src={logo} alt='Logo' style={{ height: 40, marginRight: 10 }} />
                        <Typography variant='h6' component='div'>
                            Font-end
                        </Typography>
                    </Link>
                    <div style={{ flexGrow: 1 }}></div>
                    <Link to='/products' className={classes.link}>
                        <Button>Products</Button>
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <IconButton
                                size='large'
                                color='inherit'
                                onClick={handleCartClick}
                                className={classes.iconButton}
                            >
                                <Badge badgeContent={cartItemsCount} color='error'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size='large'
                                color='inherit'
                                className={classes.iconButton}
                            >
                                <Badge badgeContent={17} color='error'>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                color='inherit'
                                onClick={handleUserClick}
                                className={classes.iconButton}
                            >
                                <AccountCircle />
                            </IconButton>
                        </>
                    ) : (
                        <Button color='inherit' onClick={handleClickOpen}>
                            Login
                        </Button>
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
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
