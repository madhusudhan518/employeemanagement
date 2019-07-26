import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

class EmployeeOverview extends Component {
  render() {
    const { employee, name } = this.props;
    return(
      <div>
        <h1>Employee Overview</h1>
        <p>Subordinates of employee {name}</p>
        <ListGroup>
        {employee["direct-subordinates"].map( (subordinate, index) => {
          return(<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
        }
        )

        }

        </ListGroup>
      </div>
    )
  }
}
const mapStateToProps = ({employeeReducer}, {match}) => {
  console.log(match)
  console.log(employeeReducer.employees[match.params.employeeName.toLowerCase()]);
  return {
    employee: employeeReducer.employees[match.params.employeeName.toLowerCase()],
    name: match.params.employeeName
  }
}

export default connect(mapStateToProps)(EmployeeOverview);
