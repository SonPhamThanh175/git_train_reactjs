// import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartClear = () => {
    return (
        <Container>
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                height="80vh"
            >
                {/* <ShoppingCartIcon style={{ fontSize: 100, color: '#ccc' }} /> */}
                <img
                src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png"
                alt="empty"
                className="empty__img"
                width="160"
                height="160"
                />
                <Typography variant="h4" component="h1" gutterBottom>
                    Giỏ hàng của bạn trống
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    Thêm sản phẩm vào giỏ hàng để xem chúng ở đây.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    href="/products"
                >
                    Tiếp tục mua sắm
                </Button>
            </Box>
        </Container>
    );
};

export default CartClear;
