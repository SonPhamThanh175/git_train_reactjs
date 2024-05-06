
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import productsApi from './api/productApi';
// import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ErrorFeature from './components/PageError';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';
import CounterFeature from 'features/Counter';
import LoginFeature from './features/Auth/components/Login';

function App() {
    //Test API
    useEffect(() => {
        const fetchProducts = async () => {
            // const productList = await productsApi.getAll();
            // console.log(productList);
        };
        fetchProducts();
    }, []);

    return (
        <div className='App'>
            <Header/>
                <Switch>
                    <Redirect from = '/home' to = '/' exact />
                     <Redirect from = '/post-list/:postId' to = '/posts/:postId' exact />
                     <Route
                        path='/'
                        component={NotFound}
                        exact
                    />
                    <Route
                        path='/login'
                        component={LoginFeature}
                    />
                    <Route
                        path='/todos'
                        component={TodoFeature}
                    />
                    <Route
                        path='/albums'
                        component={AlbumFeature}
                    />
                    <Route
                        path='/error'
                        component={ErrorFeature}
                    />
                    <Route 
                        path='/NotFound'
                        component={NotFound} />
                </Switch>   
        </div>
    );
}

export default App;