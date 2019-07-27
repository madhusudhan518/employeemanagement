import React, { Component } from 'react';
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

class EmployeeOverview extends Component {
  render() {
    const { employee, name } = this.props;
    return(
      <Card className="text-center">
        <Card.Header>Employee Overview</Card.Header>
        <Card.Body>
          <Card.Text style={{ width: '30rem' }}>
            <ListGroup>
            <Card.Title>Subordinates of employee <b>{name}</b></Card.Title>
            {
              employee["direct-subordinates"].map( (subordinate, index) => {
                return(<ListGroup.Item key={index}>{subordinate}</ListGroup.Item>)
              })
            }
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
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
