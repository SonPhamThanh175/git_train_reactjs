import { Tab, Tabs } from '@material-ui/core'
import PropTypes from 'prop-types'

ProductSort.propTypes = {
    currentSort : PropTypes.string.isRequired,
    onChange : PropTypes.func,
}

function ProductSort({ currentSort,onChange }) {
    
    const handleSortChange = (event , newValue) => {
        if (onChange) onChange(newValue)
    }

  return (
    <Tabs
        value={currentSort}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleSortChange}
        aria-label='disabled tabs exemple'
    >
        <Tab label=" Gia thap den cao " value="salePrice:ASC"></Tab>
        <Tab label=" Gia cao den thap " value="salePrice:DESC"></Tab>

    </Tabs>
  )
}

export default ProductSort
