import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants'


ProductThumnail.propTypes = {
    product : PropTypes.object
}


function ProductThumnail({product}) {
    const thumbnailUrl = product.thumbnail 
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER
  return (
    <Box>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  )
}

export default ProductThumnail
