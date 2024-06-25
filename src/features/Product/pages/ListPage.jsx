import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import { Pagination } from '@mui/material';
import productsApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FilterViewer from '../components/FilterViewer';
import MenuSkeletonList from '../components/MenuSkeletonList';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import SlideShow from 'components/SlideShow';
const useStyles = makeStyles((theme) => ({
    root: {
        whiteSpace: 'nowrap',
    },
    left: {
        width: '18.6%',
        margin: '0 20px',
    },
    right: {
        // flex: '1 1 0',
        width: '72%'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'center',
        marginTop: '30px',
        paddingBottom: '20px',
    },
}));

function ListPage(props) {
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 9,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        };
    }, [location.search]);

    // const [productFilters,setProductFilters] = useState([])
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    // const [filters,setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page ) || 1,
    //     _limit: Number.parseInt(queryParams._limit)  || 9,
    //     _sort:queryParams._sort || 'salePrice:ASC',
    // }))

    // useEffect(() =>{
    //     // Sync filters to URL
    //     history.push({
    //         pathName: history.location.pathName,
    //         search: queryString.stringify(filters),
    //     })
    // },[history,filters])

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productsApi.getAll(queryParams);

// ==========================================================================================================================================

                // Khi call Api tự viết , Api trả về không như mong đợi cần được fix phía Back-end liên quan đến dữ liệu trả về {data,pagination}

                // console.log("ket qua call API ",{data , pagination});
                console.log("data",data);
                console.log("pagination",pagination);
                
                //API model
                setProductList(data);
                setPagination(pagination);

                //API custom 
                // setProductList(data.data);
                // setPagination(data.pagination);


// ==========================================================================================================================================


            } catch (error) {
                console.log('Failed to get all products:', error);
            }
            setLoading(false);
        })();
    }, [queryParams]);
    const handlePageChange = (e, page) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _page: page
        // }))

        const filters = {
            ...queryParams,
            _page: page,
        };

        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(filters),
        });
    };
    const handleSortChange = (newSortValue) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _sort: newSortValue,
        // }))

        const filters = {
            ...queryParams,
            _sort: newSortValue,
        };

        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(filters),
        });
    };
    const handleFiltersChange = (newFilters) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     ...newFilters,
        // }))

        const filters = {
            ...queryParams,
            ...newFilters,
        };

        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(filters),
        });
    };
    const setNewFilters = (newFilters) => {
        // setFilters(newFilters);
        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(newFilters),
        });
    };
    return (
        <Box style={{ marginTop: '20px' }}>
            <Container>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid
                        item
                        className={classes.left}
                    >
                        <Paper elevation={0}>
                            {/* <ProductFilters filters={filters} onChange={handleFiltersChange}/> */}
                            {loading ? (
                                <MenuSkeletonList length={6} />
                            ) : (
                                <ProductFilters
                                    filters={queryParams}
                                    onChange={handleFiltersChange}
                                />
                            )}
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        className={classes.right}
                    >
                        <Paper elevation={0}>
                            <Box style={{marginBottom:'20px'}} borderBottom={1} borderColor="black">
                                <SlideShow/>
                            </Box>
                            <ProductSort
                                currentSort={queryParams._sort}
                                onChange={handleSortChange}
                            />
                            <FilterViewer
                                filters={queryParams}
                                onChange={setNewFilters}
                            />
                            {loading ? (
                                <ProductSkeletonList length={9} />
                            ) : (
                                <ProductList data={productList} />
                            )}
                            <Box className={classes.pagination}>
                                <Pagination
                                    color='primary'
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
