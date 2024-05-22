import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductInfo from '../components/ProductInfo';
import ProductThumnail from '../components/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';
import AddToCart from '../components/AddToCart';
import ProductMenu from '../components/ProductMenu';


const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width:'400px',
        padding: theme.spacing(1.5),
        borderRight: `4px solid ${theme.palette.grey[300]}`,
    },
    right:{
        flex: '1 1 0',
        padding: theme.spacing(1.5),

    },
}))


function DetailPage() {
    const classes = useStyles();
    const {params : {productId}} = useRouteMatch()
    // console.log({params : {productId}});

    const {product , loading} = useProductDetail(productId)

    if(loading){
        return <Box>Loading </Box>
    }

    const handleAddToCartSubmit = (formValue) => {
        console.log('formValue',formValue);
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
        </Container>
    </Box>
)
}

export default DetailPage
