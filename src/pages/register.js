import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col,Row,Container, Button,Nav } from 'react-bootstrap';

function Register() {
  return (
    <>
    <Container style={{backgroundColor:"pink"}}>
      <Row>
        <Col >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label><h2>Signup Form</h2></Form.Label>
        <br/>
        <p>
        You can simpley signup to our website and enjoy your options

        </p>

        
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
      
     <Nav.Link href='/addresse'>
     <Button>Next</Button>

     </Nav.Link>
   

        </Form>
        
        </Col>
      </Row>
    </Container>
        
      
    </>
  )
}

export default Register
