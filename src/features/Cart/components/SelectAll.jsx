import { Box, Checkbox, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../selectors'; 

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

function SelectAll(props) {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector); // Sử dụng selector để lấy tổng giá trị giỏ hàng
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <Box className={classes.selectAll}>
            <Checkbox
                color='primary'
                size='small'
                style={{ height: '100%' }}
            />
            <Box className={classes.checkBox}>{`Tất cả (${cartItems.length} sản phẩm )`}</Box>
            <Box className={classes.price}>Đơn giá</Box>
            <Box className={classes.quantity}>Số lượng</Box>
            <Box className={classes.priceTotal}>Thành tiền</Box>
        </Box>
    );
}

SelectAll.propTypes = {};

export default SelectAll;
