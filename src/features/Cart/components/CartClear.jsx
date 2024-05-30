import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Grid, Typography } from '@material-ui/core'

function CartClear(props) {
  return (
    <Box>
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Box style={{
                        paddingBottom: '8px',   
                    }}>
                        <Typography variant="h4" style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                margin: '0px',
                                color: 'rgb(0, 0, 0)',
                                lineHeight: '28px',
                                textTransform: 'uppercase',
                                flex: '1 1 0%',
                        }}>
                            Giỏ hàng 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box style={{
                        backgroundColor: 'white',
                        height: '255px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '4px',
                    }}>
                       <img src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png" alt="empty" class="empty__img" width="160" height="160"/>
                       <Typography variant="h6">Giỏ hàng trống</Typography>
                       <Typography variant="h7">Vui lòng thêm sản phẩm vào giỏ hàng</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

CartClear.propTypes = {}

export default CartClear
