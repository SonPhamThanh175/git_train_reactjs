import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { Skeleton } from '@mui/material'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByService from './Filters/FilterByService'

MenuSkeletonList.propTypes = {
    length: PropTypes.number
}

MenuSkeletonList.defaultProps = {
    length: 1
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    item: {
    }
}))


function MenuSkeletonList({length}) {
    const classes = useStyles()
  return (
    <Box className={classes.item}>
        {/* <Grid container> */}
             {/* <Skeleton variant="text" sx={{ fontSize: '2rem' }}width="55%" /> */}
            <Typography variant='subtitle2'>DANH MỤC SẢN PHẨM </Typography>

             {/* Change length to 1 ( ngay 16/5/2024) */}
            {Array.from(new Array(1)).map((x,index) => (
                <Grid item key={index}>
                    {/* <Skeleton variant='60%'/> */}
                    <Skeleton  width="35%"/>
                    <Skeleton  width="20%"/>
                    <Skeleton  width="30%"/>
                    <Skeleton  width="25%"/>
                    <Skeleton  width="20%"/>
                    <Skeleton  width="30%"/>

                </Grid>
            ))}
        {/* </Grid> */}
        <FilterByPrice/>
        <FilterByService/>
    </Box>
  )
}


export default MenuSkeletonList
