import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CartClear from './components/CartClear';
import ItemCart from './components/ItemCart';
import PaymentForm from './components/PaymentForm';
import SelectAll from './components/SelectAll';
import { cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row',
    },
    left: {
        width: '75%',
        height: '1000px',
        whiteSpace: 'nowrap',
        marginRight: theme.spacing(2),
    },
    right: {
        // flex: '1 1 0',
        width: '20%',
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    discount: {
        width: '100%',
        height:'140px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: theme.spacing(2),
    },
    paymentForm:{
        width: '100%',
        height: '175px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        // alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: 'white',
        borderRadius: theme.spacing(2),
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
                            container
                            className={classes.right}
                        >
                            <Grid
                                item
                                className={classes.discount}
                            >
                                Tiki Khuyến Mãi
                            </Grid>
                            <Grid
                                item
                                className={classes.paymentForm}
                            >
                                <PaymentForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    );
}

export default CartFeatures;
