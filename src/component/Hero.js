import React from 'react'

import { Container,Row,Col, Button } from 'react-bootstrap';





function Hero() {
    
      
  return (
   <>
   <Container className='mt-5' >
    <Row >
    <Col lg={6} md={12} sm={12} style={{height:"100%",marginTop:"15%"}}data-aos='fade-up' >
      <div style={{position:"relative",top:"30%",height:"100%"}}>
      <h3>Enjoy Your Healthy</h3>
        <h3>Deliciouse Food</h3>
        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
             Eum quas beatae cumque eum quaerat.</p>
        <Button variant='danger' >Book a Table</Button>
        <Button style={{marginLeft:"3%"}}>Watch Video</Button>


      </div>
     
    
      
        </Col>
        <Col lg={6} md={12} sm={12} data-aos='zoom-out' >
            <img src='./image/hero.png' style={{width:"100%",height:"100%"}} />
         
        </Col>
     
       
    </Row>

  
  
   </Container>

    
   
    


   </>
  )
}

export default Hero
