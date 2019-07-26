import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Explorer from './modules/employee/screens/explorer';
import EmployeeOverview from './modules/employee/screens/EmployeeOverview';

export default function Routes(){
 return (
    <Switch>
      <Route from="/" exact to="/"  component={Explorer} />
      <Route path="/overview/:employeeName" component={EmployeeOverview} />
    </Switch>
 )
}
