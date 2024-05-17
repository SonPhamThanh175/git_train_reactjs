import { Box, Typography, makeStyles } from '@material-ui/core'
import categoryApi from 'api/categoryApi'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

FilterByCategory.propTypes = {
    onChange: PropTypes.func
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType:'none',
        '& > li' : {
            marginTop: theme.spacing(1),
            transitions: 'all .25s',
            '&:hover':{
                color: theme.palette.primary.main,
                cursor: 'pointer'
            }
        }
    },
}))

function FilterByCategory({onChange}) {
    const [categoryList,setCategoryList] = useState([]) 
    // console.log(categoryList);
    const classes = useStyles()

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
    <Box className={classes.root}>
        <Typography variant='subtitle2'>DANH MỤC SẢN PHẨM </Typography>
        <ul className={classes.menu}>
            {
                categoryList.map((category) => {
                    return <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant='body2'>
                            {category.name}
                        </Typography>
                    </li>
                })
            }
        </ul>
    </Box>
  )
}


export default FilterByCategory
