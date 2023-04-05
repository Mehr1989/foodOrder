import React from 'react'
import { Col,Row,Nav,Container } from 'react-bootstrap'
function Footer() {
  return (
    <>
    <Container fluid className='bg-dark mt-5'>
        <Row>
            <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className='text-light' href="/home">Active</Nav.Link>
      <Nav.Link className='text-light' eventKey="link-1">Link</Nav.Link>
      <Nav.Link  className='text-light' eventKey="link-2">Link</Nav.Link>
      <Nav.Link  className='text-light' eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
            </Col>
  
            <Col>

          <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className='text-light' href="/home">Active</Nav.Link>
      <Nav.Link className='text-light' eventKey="link-1">Link</Nav.Link>
      <Nav.Link className='text-light' eventKey="link-2">Link</Nav.Link>
      <Nav.Link className='text-light' eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
            </Col>
            <Col>

<Nav defaultActiveKey="/home" className="flex-column">
<Nav.Link className='text-light' href="/home">Active</Nav.Link>
<Nav.Link className='text-light' eventKey="link-1">Link</Nav.Link>
<Nav.Link className='text-light' eventKey="link-2">Link</Nav.Link>
<Nav.Link className='text-light' eventKey="disabled" disabled>
Disabled
</Nav.Link>
</Nav>
  </Col>
<Col lg={12} style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
<h5 style={{color:"aliceblue"}}>@All Right Reserved</h5>
</Col>

 
        </Row>
   
   
    


       
        
    </Container>
  

      
    </>
  )
}

export default Footer
