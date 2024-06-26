import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Product from './Product'


ProductList.propTypes = {
    data: PropTypes.array,
}

ProductList.defaultProps = {
    data: [],
}
function ProductList({data}) {
  return (
    <Box>
        <Grid container
            spacing={2}
        >
            {data.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product  product={product}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}



export default ProductList
