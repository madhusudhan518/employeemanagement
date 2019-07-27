import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchEmployee } from '../actions';
import { getSubSubOrdinatesList } from '../utils';

class EmployeeOverview extends Component {

  componentDidMount(){
    const { employee, fetchEmployee } = this.props;
    const subordinates = employee['direct-subordinates'];
    subordinates && subordinates.forEach((subordinate) => {
      fetchEmployee(subordinate);
    })
  }

  render() {
    const { employee, name, employees } = this.props;
    const subSubOrdinateList = getSubSubOrdinatesList(employee['direct-subordinates'], employees);

    if (!employee) {
      return <h2> Employee Not Found </h2>
    }
    return(
      <div>
        <h1>Employee Overview</h1>
        <h3>Subordinates of employee {name}</h3>
        <ListGroup>
        {employee["direct-subordinates"].map( (subordinate, index) => {
          return(<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
        }
        )
        }
        </ListGroup>
          <h4>Sub Subordinates</h4>
          <ListGroup>
          {subSubOrdinateList.length ? 
           subSubOrdinateList.map((subordinate,index) => {
              return (<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
            })
            :
            "No Sub SubOrdinates"
          }
        </ListGroup>
      </div>
    )
  }
}
const mapStateToProps = ({employeeReducer}, {match}) => {
  const employeeName = match.params.employeeName;
  const employees = employeeReducer.employees;
  return {
    employees,
    employee: employees[employeeName.toLowerCase()],
    name: employeeName
  }
}

const mapDispatchToProps = { fetchEmployee };

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeOverview);
