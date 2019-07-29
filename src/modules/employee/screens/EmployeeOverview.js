import React, { Component, Fragment } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployee } from '../actions';
import { getSubOrdinatesList } from '../utils';

var functionCalls = 0;
class EmployeeOverview extends Component {
  componentDidMount(){
    const { employee, fetchEmployee } = this.props;
    const subordinates = employee['direct-subordinates'];
    subordinates && subordinates.forEach((subordinate) => {
      fetchEmployee(subordinate);
    })
  }
  // renderEmployeeSubordinateList = (empName)=>{
  //   const { employees } = this.props;
  //   const employee = employees[empName.toLowerCase()];
  //   if(employee){
  //     return (
  //     <Fragment key={functionCalls++}>
  //       <b>{empName}</b>
  //       {
  //         employee["direct-subordinates"] ?
  //           employee["direct-subordinates"].forEach((subordinate, index) => {
  //              this.renderEmployeeSubordinateList(subordinate)
  //           })
  //           :
  //           <h5 style={{ color: 'red' }}>No SubOrdinates</h5>
  //       }
  //     </Fragment>
  //     )
  //   }
    
  // }


  render() {
    const { employee, name, employees } = this.props;
    var SubOrdinateList = [];
    var subordinateHtml = "";
    getSubOrdinatesList(SubOrdinateList, name, employees, subordinateHtml);

    if (!employee) {
      return <h2> Employee Not Found </h2>
    }
    return(
      <Card className="text-center">
        <Card.Header>Employee Overview</Card.Header>
        <Card.Body>
          <b>{name}</b>
          {SubOrdinateList.map((name, index)=>{ return <h4 key={index}>{name}</h4>})}
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
