import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField, Typography, makeStyles } from '@material-ui/core'

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
}

const useStyles = makeStyles((theme)=>({
  root: {
    padding: theme.spacing(2),
    borderTop: `4px solid ${theme.palette.grey[300]}`,

  },
  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '& > span':{
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    }
  },
}))

function FilterByPrice({onChange}) {
  const classes = useStyles()
  const [values, setValues] = useState({
    salePrice_gte: '',
    salePrice_lte: '',
  })

  const handleChange = (e) => {
    setValues(prevValues => ({
      ...prevValues,
      [e.target.name] : e.target.value
    }))
  }
  const handleSubmit = () => {
    if (onChange) onChange(values)
    
      setValues({
        salePrice_gte: '',
        salePrice_lte: '',
      })
  }

  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'>
        CHỌN KHOẢNG GIÁ 
      </Typography>

      <Box className={classes.range}>
        <TextField name='salePrice_gte' label='Từ' value={values.salePrice_gte} onChange={handleChange}/>
        <span>-</span>
        <TextField name='salePrice_lte' label='Đến' value={values.salePrice_lte} onChange={handleChange}/>
      </Box>

      <Button variant='outlined' color='primary' onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  )
}


export default FilterByPrice
