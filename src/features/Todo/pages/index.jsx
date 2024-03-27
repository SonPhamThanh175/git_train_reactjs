import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './DetailPage';
import ListPage from './ListPage';



function TodoFeature(props) {
  const match = useRouteMatch()
  // console.log(match);
  return (
      <Switch>
        <Route path = {match.path} component={ListPage} exact/>
        <Route path = {`${match.path}/:todoId`} component={DetailPage}/>
      </Switch>
  )
}

TodoFeature.propTypes = {}

export default TodoFeature

