import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Container,Row,Nav,Form } from 'react-bootstrap';

function addresse() {
  return (
    <div>
    
     <Container style={{backgroundColor:"pink"}}>
      <Row>
        
        <Col >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label><h2>Signup Form</h2></Form.Label>
        <br/>
        <Form.Label><h4>Addresse</h4></Form.Label>
        <br/>
       

        
        <Form.Control type="email" placeholder="addresse" />
        
      </Form.Group>
      
     <Nav.Link href='/addresse'>
     <Button>Next</Button>

     </Nav.Link>
   

        </Form>
        
        </Col>
      </Row>
    </Container>
        
      
    </div>
  )
}

export default addresse
