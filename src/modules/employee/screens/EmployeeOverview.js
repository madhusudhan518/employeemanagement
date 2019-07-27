import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Card className="text-center">
        <Card.Header>Employee Overview</Card.Header>
        <Card.Body>
          <Card.Text style={{ width: '30rem' }}>
            <ListGroup>
            <Card.Title>Subordinates of employee <b>{name}</b></Card.Title>
            {
              employee["direct-subordinates"] ?
              employee["direct-subordinates"].map( (subordinate, index) => {
                return(<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
              })
              :
              <h5 style={{ color: 'red' }}>No Sub SubOrdinates</h5>
            }
            </ListGroup>
            <ListGroup>
              <Card.Title> Sub-Subordinates of employee <b>{name}</b></Card.Title>
              {subSubOrdinateList.length ?
                subSubOrdinateList.map((subordinate, index) => {
                  return (<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
                })
                :
                <h5 style={{color: 'red'}}>No Sub SubOrdinates</h5>
              }
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Link to={`/`}>Back</Link>
      </Card>
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
