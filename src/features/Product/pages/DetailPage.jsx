import { Box, Container, Grid, LinearProgress, Paper, makeStyles } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumnail from '../components/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';
import { useDispatch } from 'react-redux';
import { addToCart, showMiniCart } from 'features/Cart/cartSlice';
import AddToCart from '../components/AddToCart';
import { enqueueSnackbar } from 'notistack';


const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(3),
    },
    left: {
        width:'400px',
        padding: theme.spacing(1.5),
        borderRight: `4px solid ${theme.palette.grey[300]}`,
    },
    right:{
        flex: '1 1 0',
        padding: theme.spacing(1.5),

    },
    loading: {
        position: 'fixed',
        top: 0,
        left : 0,
        width: '100%',
    },
}))


function DetailPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        params : {productId},
        url,
    } = useRouteMatch()

    const {product , loading} = useProductDetail(productId)

    if(loading){
        return (
            <Box className={classes.loading}>
                <LinearProgress/>
            </Box>)
    }

    const handleAddToCartSubmit = (formValue) => {
        // console.log('formValue',formValue);
        const action = addToCart({
            id: product.id,
            product,
            quantity:formValue.quantity,
        })
        const actionShowMiniCart = showMiniCart()
        dispatch(action)
        dispatch(actionShowMiniCart)
        enqueueSnackbar('Đã thêm vào giỏ hàng !!!',{variant:'success'})

    }

  return (
    <Box className={classes.root}>
        <Container>
            <Paper elevation={0}>
                <Grid container>
                    <Grid item className={classes.left}>
                        <ProductThumnail product={product}/>
                    </Grid>
                    <Grid item className={classes.right}>
                        <ProductInfo product={product} />
                        <AddToCart onSubmit={handleAddToCartSubmit}/>
                    </Grid>
                </Grid>
            </Paper>

            <ProductMenu/>

            <Switch>
                <Route exact path={url}>
                    <ProductDescription product={product}/>
                </Route>

                <Route path={`${url}/additional`} component={ProductAdditional}/>
                <Route path={`${url}/reviews`} component={ProductReviews}/>
            </Switch>
        </Container>
    </Box>
)
}

export default DetailPage
