import React from 'react'
import { Container,Row,Col, Button, InputGroup } from 'react-bootstrap'
import styles from '@/styles/Home.module.scss'

function signup() {
  return (
    <>
        
        <Container >
         <Row>
          <Col style={{display:"flex",justifyContent:'center',marginTop:'5%'}}>
             <div className={styles.signBox}>
         
           <Container>
            <Row>
              <Col>
              <h5>Name</h5>
              <input placeholder='name' />

              <input placeholder='last' />
           
              </Col>
              <Col>
              <h5>Email</h5>
              <input placeholder="Email" />
              </Col>

             <Col>
              <h5>Address</h5>
              <input placeholder="Street Address" />
              
              </Col>
              <Col>
             
              <input placeholder="Street Address 2" />
              
              </Col>
          
            </Row>
           </Container>
           

              </div>
             
     
             
          
           
            
              
    
        
                
         
           

                
          </Col>
      
         </Row>

        </Container>
       
      
    </>
  )
}

export default signup
