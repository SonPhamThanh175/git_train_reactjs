import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { formatPrice } from 'utils';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        padding: 0,
        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(1),
            margin: 0,
        },
    },
}));

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${formatPrice(filters.salePrice_gte)} đến ${formatPrice(filters.salePrice_lte)}`,
        isActive: () => true,
        isVisible: (filters) =>
            Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 4,
        getLabel: () => 'Danh mục', // Trả về nhãn của bộ lọc
        isActive: (filters) => filters.category, // Kiểm tra xem bộ lọc category có tồn tại hay không
        isVisible: (filters) => filters.category, // Kiểm tra xem bộ lọc category có hiển thị hay không
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.category;
            return newFilters;
        },
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.category) {
                delete newFilters.category;
            } else {
                newFilters.category = { id: 1, name: 'Default' }; // Giá trị mặc định ví dụ
            }
            return newFilters;
        }
    },
];

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
    const classes = useStyles();

    const visibleFilters = useMemo(()=>{
        return FILTER_LIST.filter((x) => x.isVisible(filters))
    },[filters])
    return (
        <Box component="ul" className={classes.root}>
            {visibleFilters.map((x) => (
                <li key={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        size='small'
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                      if (!onChange) return;

                                      const newFilters = x.onToggle(filters);
                                      onChange(newFilters);
                                  }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                      if (!onChange) return;

                                      const newFilters = x.onRemove(filters);
                                      onChange(newFilters);
                                  }
                                : null
                        }
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;
