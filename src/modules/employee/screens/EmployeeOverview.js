import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEmployee } from '../actions';
import { getTreeData } from '../utils';
import TreeMenu from 'react-simple-tree-menu';
import '../components/rstMain.css';

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
    const treeData = getTreeData(name, employees);
    if (!employee) {
      return <h2> Employee Not Found </h2>
    }
    return(
      <Fragment>
        <h4>Employee Overview</h4>
        <TreeMenu data={treeData} />
        <Link to={`/`}>Back</Link>
      </Fragment>
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

// <Card className="text-center">
      //   <Card.Header>Employee Overview</Card.Header>
      //   <Card.Body>
      //     <h4>{name}</h4>
      //     {SubOrdinateList.map((name, index)=>{ return <h6 key={index}>{name}</h6>})}
      //   </Card.Body>
      //   <Link to={`/`}>Back</Link>
      // </Card>