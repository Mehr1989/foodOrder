import React from 'react'
import { Container,Row,Col, Button, Link,Form,Nav} from 'react-bootstrap'
import styles from '@/styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function signup() {
  return (
    <>
    <Container  style={{display:"flex",justifyContent:"center",marginTop:"8vh"}}>
    
      <Row>
        <Col lg={12} style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"8%",backgroundColor:"#f5a9a6"}}>
      
          <h3>Login</h3>
         

        

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
      <Nav.Link href='/register'>Signup Now</Nav.Link>
   
   
    </Form>
    
        </Col>
      </Row>
      
   

    </Container>
     
       
             
   
          
           
            
              
    
        
                
         
           

    </>
  )
}

export default signup
