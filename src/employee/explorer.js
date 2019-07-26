import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class Explorer extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="employeeName">
          <Form.Control type="name" placeholder="empolyee name" id="inputName" />
          <Button size="lg" variant="info" block type="submit" >
            Search
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Explorer;
