import React from 'react'
import styles from '@/styles/Home.module.scss'
import {Container,Col,Row,Button} from 'react-bootstrap'

function Cards() {
  return (
    <>
    <Container  style={{marginTop:"7%",backgroundColor:'#ebe6e6'}}>
        <Row >
          
            <Col lg={4} data-aos='fade-up' className={styles.cardBox} >
                <div className={styles.bigCard}>
                <h2>
                Why Choose Yummy?  
                </h2>
                <div style={{width:"80%",display:"flex",textAlign:"center"}}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>

                </div>
               
                <Button>Learn More</Button>

                </div>
              

            </Col>
      
            <Col lg={2} data-aos='zoom-out' >
               <div className={styles.smallCards} >
                <div style={{width:'90%'}}> 
                <h4>Corporis voluptates</h4>
                <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip


                </p>

                </div>

           
               </div>
         
            </Col>
           

            <Col lg={2} data-aos='zoom-out'>
                <div  className={styles.smallCards}>

               <h4>Corporis voluptates</h4>
                <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip


                </p>
                </div>
         
            </Col>

            <Col lg={2}data-aos='zoom-out' >
                <div className={styles.smallCards} >
                <h4>Corporis voluptates</h4>
                <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip


                </p>

                </div>
           
            </Col>


          <Col lg={2}data-aos='zoom-out' >
                <div className={styles.smallCards} >
                <h4>Corporis voluptates</h4>
                <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip


                </p>

                </div>
           
            </Col>
         
          



           
       
        </Row>
    </Container>
      
    </>
  )
}

export default Cards
