import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Footer from './components/Footer';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productsApi from './api/productApi';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productsApi.getAll();
            // console.log(productList);
        };
        fetchProducts();
    }, []);
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <p>
        //       Home Page
        //       <p>
        //         <NavLink to = "/todos" activeClassName = "active-menu">Todos</NavLink>
        //       </p>
        //       <p>
        //         <NavLink to = "/albums" activeClassName = "active-menu">Albums</NavLink>
        //       </p>

        //       <Switch>
        //         <Route path="/" component = {TodoFeature} exact/>
        //         <Route path="/todos" component = {TodoFeature}/>
        //         <Route path="/albums" component = {AlbumFeature}/>

        //         <Route component={NotFound}/>
        //       </Switch>
        //     </p>
        //   </header>
        // </div>
        <div className='App'>
            <Header />
            <p>
                <p>
                    <NavLink
                        to='/todos'
                        activeClassName='active-menu'
                    >
                        Todos
                    </NavLink>
                </p>
                <p>
                    <NavLink
                        to='/albums'
                        activeClassName='active-menu'
                    >
                        Albums
                    </NavLink>
                </p>
                <Switch>
                    <Route
                        path='/todos'
                        component={TodoFeature}
                    />
                    <Route
                        path='/albums'
                        component={AlbumFeature}
                    />
                    <Route component={NotFound} />
                </Switch>
            </p>

            <Footer />
        </div>
    );
}

export default App;
