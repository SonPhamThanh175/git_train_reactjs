import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import { NavLink,Redirect,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Page
          <p>
            <NavLink to = "/todos" activeClassName = "active-menu">Todos</NavLink>
          </p>
          <p>
            <NavLink to = "/albums" activeClassName = "active-menu">Albums</NavLink>
          </p>

          <Switch>
            <Route path="/" component = {TodoFeature} exact/>
            <Route path="/todos" component = {TodoFeature}/>
            <Route path="/albums" component = {AlbumFeature}/>
          </Switch>
        </p>
      </header>
    </div>
  );
}

export default App;
