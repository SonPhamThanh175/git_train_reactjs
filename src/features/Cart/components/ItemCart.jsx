import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Checkbox, IconButton, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuantityField from 'components/form-controls/QuantityField';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import * as yup from 'yup';
import { removeFromCart } from '../cartSlice';
import { cartItemsCountSelector } from '../selectors';
import { enqueueSnackbar } from 'notistack';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        backgroundColor:'white',
        borderRadius: theme.spacing(2)
    },
    thumbnail: {
        // marginRight: theme.spacing(2),
        height: '80px',
        width: '80px',
    },
    details: {
        // marginLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%'
    },
    productName: {
        width:'170px',
    },
    price: {
        fontWeight: 'bold',
    },
    quantity:{
        marginLeft: theme.spacing(2),
    },
    total:{
        fontWeight: 'bold',
        color: 'red',
    },
}));

function ItemCart({ data,onSubmit = null }) {
    const classes = useStyles();
    const schema = yup.object().shape({
        quantity : yup
         .number()
         .required('Please enter quantity')
         .min(1,'Please enter at least 1')
         .typeError('Please enter a number'),
     })
     const dispatch = useDispatch();

     console.log('data',data.quantity);
     const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
        enqueueSnackbar('Đã xóa khỏi giỏ hàng !',{variant:'error'})

    };

    const cartItemsCount = useSelector(cartItemsCountSelector);

 
    //  const form = useForm({
    //      defaultValues: {
    //          quantity: cartItemsCount,
    //      },
    //      resolver: yupResolver(schema),
    //      // shouldUnregister: true,
    //    })
 
    //    const handleSubmit = async (values) => {
    //      if (onSubmit) {
    //          await onSubmit(values);
    //      }
    //  };


    return (
        <Box>
            {data.map(item => {
                const thumbnailUrl = item.product.thumbnail && item.product.thumbnail.formats.thumbnail
                    ? `${STATIC_HOST}${item.product.thumbnail.formats.thumbnail.url}`
                    : THUMBNAIL_PLACEHOLDER;

                return (
                    <Box key={item.id} className={classes.root}>
                        <Checkbox color='primary' />
                        <Box className={classes.thumbnail}>
                            <img src={thumbnailUrl} alt={item.product.name} width="100%" />
                        </Box>
                        <Box className={classes.details}>
                            <Box className={classes.productName}>{item.product.name}</Box>
                            <Box className={classes.price}>{formatPrice(item.product.salePrice)}</Box>
                            {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <QuantityField
                                    name='quantity'
                                    label='Quantity'
                                    form={form}
                                />
                             </form> */}
                             <Box className={classes.quantity}>{item.quantity}</Box>
                             <Box className={classes.total}>{formatPrice(item.product.salePrice * item.quantity)}</Box>
                             <IconButton onClick={() => handleRemoveItem(item.id)}>
                                <DeleteForeverIcon />
                             </IconButton>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}

ItemCart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        product: PropTypes.shape({
            name: PropTypes.string.isRequired,
            thumbnail: PropTypes.shape({
                formats: PropTypes.shape({
                    thumbnail: PropTypes.shape({
                        url: PropTypes.string.isRequired,
                    }),
                }),
            }),
            // Các thông tin khác về sản phẩm
        }).isRequired,
    })).isRequired,
};

export default ItemCart;
