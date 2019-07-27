import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { fetchEmployee } from '../actions';
import './newStyles.css';

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
    const { employees, searches } = this.props;
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs="auto" md="auto" lg="auto">
              <h2>Employee Explorer</h2>
            </Col>
          </Row>
          <Row>
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
          </Row>
          <Row>
          <Col xs={4} md={4} lg={3}></Col>
            <Col xs={6} md={6} lg={8} style={{textAlign: "left"}}>
              {employeeName && employees[employeeName.toLowerCase()] ?
                  <h2>
                    <Link to={`/overview/${employeeName}`}>
                      Please click here to {employeeName} overview 
                    </Link>
                  </h2>
                :
                (employeeName && !employees[employeeName.toLowerCase()] && <h4 id="no-employee"> Employee Not Found </h4>)
              }
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col sm={4} md={4} lg={4} >
              <h4>History of search</h4>
            </Col>
            <Col sm={4} md={4} lg={4} >
              <ListGroup>
              {searches.map( (name, index) => {
                return(
                  <ListGroup.Item key={index}>
                    <Link to={`/overview/${name}`}>{name}</Link>
                  </ListGroup.Item>
                );
              }
              )}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({employeeReducer})=>({
  employees: employeeReducer.employees,
  searches: employeeReducer.searches
})
const mapDispatchToProps = { fetchEmployee };
export default  connect(mapStateToProps, mapDispatchToProps)(Explorer);
