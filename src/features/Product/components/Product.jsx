import StarIcon from '@mui/icons-material/Star';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import { formatPrice } from 'utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Product({ product }) {
    const history = useHistory();

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    const handleClick = () => {
        // Navigate to detail page: /products/:productId
        history.push(`/products/${product.id}`);
    };
    // console.log(product);

    return (
        <Box
            padding={1}
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
        >
            <Card sx={{ maxWidth: 300, height: 430, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component='img'
                    alt={product.name}
                    image={thumbnailUrl}
                    sx={{
                        height: 'fit-content',
                        // paddingTop: '100%', // 1:1 aspect ratio
                        objectFit: 'cover',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                        {product.name}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            my: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                            >
                                4.67
                            </Typography>
                            <StarIcon sx={{ fontSize: 12, color: 'rgb(255, 196, 0)' }} />
                        </Box>
                        <Typography
                            variant='body2'
                            color='text.secondary'
                        >
                            | Đã bán 1000+
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'col', alignItems: 'center' }}>
                        <Typography
                            variant='h6'
                            component='div'
                            style={{
                                fontWeight: 'bold',
                                color: 'rgb(255, 66, 78)',
                            }}
                        >
                            {formatPrice(product.salePrice)}
                        </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{ ml: 1 }}
                        >
                            {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
                        </Typography>
                        <Typography
                            variant='h7'
                            component='div'
                            style={{
                                color: '#808089',
                                textDecoration: 'line-through', // Gạch ngang
                                fontWeight: 'bold', // Font đậm
                            }}
                        >
                            {formatPrice(product.originalPrice)}
                        </Typography>
                    </Box>

                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Product;
