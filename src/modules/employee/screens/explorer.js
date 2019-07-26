import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { fetchEmployee } from '../actions';

class Explorer extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeeName: undefined
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchString = document.getElementById("EmployeeName").value;
    this.setState({ employeeName: searchString });
    const { fetchEmployee } = this.props;
    fetchEmployee(searchString);
  }

  render() {
    const {employeeName} = this.state;
    const { employees } = this.props;
    return (
      <Row>
        <Row style={{marginBottom: "20px"}}>
          <Col md={{ span: 6, offset: 4 }} sm={{ span: 6, offset: 4 }} xs={{ span: 6, offset: 4 }}>
            <h2>Employee Explorer</h2>
          </Col>
        </Row>
        <Col md={{offset: 3, span: 9}} xs={{offset: 3, span: 9}}>
          <Form onSubmit={ this.handleSubmit }>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Enter Employee Name" id="EmployeeName" />
              </Col>
              <Col>
                <Button type="submit">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
          <Col md={{offset: 3, span: 6}}>
            {employees.keys && employees[employeeName].keys &&
              <Link to={`/overview/${employeeName}`}>
                <h2>`Please click here to overview ${employeeName}`</h2>
              </Link>
            }
          </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({employeeReducer})=>({
  employees: employeeReducer.employees
})
const mapDispatchToProps = { fetchEmployee };
export default  connect(mapStateToProps, mapDispatchToProps)(Explorer);
