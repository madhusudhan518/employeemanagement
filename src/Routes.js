import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Explorer from './modules/employee/screens/explorer.js';

export default function Routes(){
 return (
    <Switch>
      <Route path="/" component={Explorer} />
    </Switch>
 )
}

