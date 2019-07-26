import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';

class Explorer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const searchString = document.getElementById("EmployeeName").value;
    var transitionTo = Router.transitionTo;
    transitionTo(`/overview/${searchString}`);
  }
  render() {
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
      </Row>
    )
  }
}

export default Explorer;
