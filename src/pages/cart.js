import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container ,Row} from 'react-bootstrap';

function cart() {
  return (
    <>
    <Container style={{backgroundColor:"pink"}}>
      <Row>
        <Col style={{display:"flex",justifyContent:"center"}}>
        <h2>Your Purchase</h2>

        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default cart
