import { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import productsApi from './api/productApi';
import Footer from './components/Footer';
import Header from './components/Header';
import AlbumFeature from './features/Album/pages';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productsApi.getAll();
            // console.log(productList);
        };
        fetchProducts();
    }, []);
    return (
        <div className='App'>
            <Header/>
            <p  style={{
                margin: 20
            }}>
                <Switch>
                    {/* <Redirect from = '/home' to = '/' exact /> */}
                     {/* <Redirect from = '/post-list/:postId' to = '/posts/:postId' exact /> */}
                    <Route
                        path='/'
                        component={CounterFeature}
                        exact
                    />
                    <Route
                        path='/todos'
                        component={TodoFeature}
                    />
                    <Route
                        path='/albums'
                        component={AlbumFeature}
                    />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </p>

            <Footer/>
        </div>
    );
}

export default App;
