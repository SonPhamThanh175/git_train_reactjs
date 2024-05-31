import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { cartTotalOriginalPriceSelector, cartTotalSalePriceSelector, cartTotalSelector } from '../selectors';
import { formatPrice } from 'utils';

const useStyles = makeStyles((theme) => ({
    root: {
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
    paymentForm:{

    },
    paymentForm_originalPrice:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor:'white',
    },
    paymentForm_promotionPercent:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: theme.spacing(0, 2, 0, 2),
        backgroundColor:'white',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    paymentForm_total:{
        marginTop:theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: theme.spacing(0, 2, 0, 2),
        backgroundColor:'white',
    },
}));
const PaymentForm = () => {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector); // Sử dụng selector để lấy tổng giá trị giỏ hàng
    const originalPrice = useSelector(cartTotalOriginalPriceSelector)
    const salePrice = useSelector(cartTotalSalePriceSelector)
    return (
        <Box className={classes.paymentForm}>
            <Box className={classes.paymentForm_originalPrice}>
                <Typography variant="caption" display="block" gutterBottom style={{ marginRight:'35px'}}>
                    Tạm tính 
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {formatPrice(originalPrice)}
                </Typography>
            </Box>
            <Box className={classes.paymentForm_promotionPercent}>
                <Typography variant="caption" display="block" gutterBottom style={{ marginRight:'15px'}}>
                    Giảm giá 
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    - {formatPrice((originalPrice) - (cartTotal))}
                </Typography>
            </Box>
            <Box className={classes.paymentForm_total}>
                <Typography variant="caption" display="block" gutterBottom style={{ marginRight:'15px'}}>
                    Tổng tiền 
                </Typography>
                <Typography variant="h5" display="block" gutterBottom style={{color:'red'}}>
                    {formatPrice(cartTotal)}
                </Typography>
            </Box>
            <Button
            >
                Mua ngay
            </Button>
        </Box>
    );
};

export default PaymentForm;
