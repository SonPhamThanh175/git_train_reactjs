import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { Skeleton } from '@mui/material'


ProductSkeletonList.propTypes = {
    length: PropTypes.number,
}

ProductSkeletonList.defaultProps = {
    length: 6,
}
function ProductSkeletonList({length}) {
  return (
    <Box sx={{maxWidth: 300, height: 400}}>
        <Grid container
            spacing={2}
        >
            {Array.from(new Array(length)).map((x,index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Box padding={1} >
                        <Skeleton  variant='rect' width="100%" height={215}/>
                        <Skeleton />
                        <Skeleton  width="60%"/>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}



export default ProductSkeletonList
