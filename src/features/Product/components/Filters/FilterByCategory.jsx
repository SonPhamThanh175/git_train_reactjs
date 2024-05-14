import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import categoryApi from 'api/categoryApi'
import { useState } from 'react'

FilterByCategory.propTypes = {
    onChange: PropTypes.func
}

function FilterByCategory({onChange}) {
    const [categoryList,setCategoryList] = useState([]) 

    useEffect(() => {
        (async () =>{
            try {    
                const list = await categoryApi.getAll()
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name : x.name,
                })))
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        })()
    },[])
    

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }
  return (
    <Box>
        <Typography>Danh Muc San Pham </Typography>
        <ul>
            {
                categoryList.map((category) => {
                    return <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</li>
                })
            }
        </ul>
    </Box>
  )
}


export default FilterByCategory
