
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import productsApi from './api/productApi';
// import Footer from './components/Footer';
import ProductFeature from 'features/Product';
import Header from './components/Header';
import LoginFeature from './components/LoginFeature';
import ErrorFeature from './components/PageError';
import AlbumFeature from './features/Album/pages';
// import LoginFeature from './features/Auth/components/Login';
import TodoFeature from './features/Todo/pages';
import CartFeatures from 'features/Cart';
import NotFound from './components/PageError';

function App() {

    return (
        <div className='App'>
            <Header/>
                <Switch>
                    <Redirect from = '/home' to = '/' exact />
                     <Redirect from = '/post-list/:postId' to = '/posts/:postId' exact />
                     <Route
                        path='/'
                        component={LoginFeature}
                        exact
                    />
                    <Route
                        path='/error'
                        component={NotFound}
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
                        path='/products'
                        component={ProductFeature} 
                    />
                    <Route 
                        path='/cart'
                        component={CartFeatures} 
                    />
                </Switch>   
        </div>
    );
}

export default App;