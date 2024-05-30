import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ItemCart from './components/ItemCart';
import SelectAll from './components/SelectAll';
import { cartTotalSelector } from './selectors';
import CartClear from './components/CartClear';
import { Button } from 'bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    left: {
        width: '80%',
        height: '223px',
        whiteSpace: 'nowrap',
        marginRight: theme.spacing(2),
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
        backgroundColor: 'white',
    },
    selectAll: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        height: '36px',
        marginBottom: '12px',
        padding: '8px 6px',
        display: 'flex',
    },
    checkBox: {},
    price: {
        marginLeft: '195px',
    },
    box: {
        width: '196px',
    },
    quantity: {
        marginLeft: '135px',
    },
    priceTotal: {
        marginLeft: '135px',
    },
}));

function CartFeatures(props) {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector); // Sử dụng selector để lấy tổng giá trị giỏ hàng

    // Lấy danh sách các mặt hàng trong giỏ hàng từ Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems.length);

    return (
        <Box className={classes.root}>
            {cartItems.length === 0 ? (
                <CartClear />
            ) : (
                <Container>
                    <Grid container>
                        <Grid
                            item
                            className={classes.left}
                        >
                            <SelectAll />
                            <ItemCart data={cartItems} />
                        </Grid>
                        <Grid
                            item
                            className={classes.right}
                        >
                            Tiki Khuyến Mãi
                            {/* <Button
                                type='submit'
                                color='primary'
                                size='large'
                                variant='contained'
                                style={{ width: '250px' }}
                            >
                                ADD TO CART
                            </Button> */}
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    );
}

export default CartFeatures;
