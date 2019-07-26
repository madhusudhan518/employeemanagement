import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Explorer from './modules/employee/screens/explorer';
import Overview from './modules/employee/screens/overview';

export default function Routes(){
 return (
    <Switch>
      <Route path="/" component={Explorer} />
      <Route path="/overview/:EmployeeName" component={Overview} />
    </Switch>
 )
}

