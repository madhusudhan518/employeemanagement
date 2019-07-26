import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class EmployeeOverview extends Component {
  render() {
    return(
      <div>
        <h1>Employee Overview</h1>
        <p>Subordinates of employee {this.props.currentEmployee.name}</p>
        <ListGroup>
          {this.props.subOrdinates.map((name, index) => {
            return(<ListGroup.Item>{name}</ListGroup.Item>)
          })}
        </ListGroup>
      </div>
    )
  }
}

export default EmployeeOverview;
