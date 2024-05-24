import { Box, Link, makeStyles } from '@material-ui/core'
import { NavLink, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

ProductMenu.propTypes = {}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'center',
        flexFlow: 'nowrap',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        '& > li': {
            padding: theme.spacing(2,4),
            borderBottom: `1px solid ${theme.palette.divider} `,
            '& > a': {
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                '&.active': {
                    color: theme.palette.primary.main,
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                },
            },
        },
    },
}))


function ProductMenu(props) {
    const classes = useStyles();
    const {url } = useRouteMatch();
  return (
    <Box component='ul' className={classes.root}>
        <li>
            <Link component={NavLink} to ={url} exact>Description</Link>
        </li>
        <li>
            <Link component={NavLink} to ={`${url}/additional`} exact>Additional Infomation</Link>
        </li>
        <li>
            <Link component={NavLink} to ={`${url}/reviews`} exact>Reviews</Link>
        </li>
    </Box>
  )
}


export default ProductMenu
