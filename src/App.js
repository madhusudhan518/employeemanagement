import React from 'react';
import logo from './logo.svg';
import './App.css';

import Explorer from './modules/employee/screens/explorer.js';
import EmployeeOverview from './modules/employee/screens/EmployeeOverview.js';

function App() {
  return (
    <div className="App">
      <Explorer />
      {/*<EmployeeOverview currentEmployee={{}} subOrdinates={[]} /> */}
    </div>
  );
}

export default App;
