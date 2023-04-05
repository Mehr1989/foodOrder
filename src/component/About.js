import React, { useEffect } from 'react'
import { delay, motion } from 'framer-motion'
import styles from '@/styles/Home.module.scss'
import { Container,Row,Col } from 'react-bootstrap'




function About() {


  return (
   <>
   <section style={{marginTop:"10%"}}  >
  <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
  <h5>About Us</h5>
  <h3>Learn More About US</h3>

  </div>
  
      <Container style={{marginTop:"5%"}} data-aos='fade-up'>
       <Row >
        <Col lg={6} style={{marginTop:'10%'}} >
          <div className={styles.photoBox} style={{display:"flex",justifyContent:"center",alignItems:'center'}} >
            
            <div className={styles.numberBox} style={{backgroundColor:"white"}}>
              <h4>Book a Table</h4>
              <h5 style={{color:"red"}}>+1 5589 55488 55</h5>

            

            </div>

          </div>

     
        </Col>
        <Col  >
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
       <p>
  Ullamco laboris nisi ut aliquip ex ea commodo consequat.

  </p>
  <p>
  Duis aute irure dolor in reprehenderit in voluptate velit.
  </p>
  <p>
  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident

  </p>

       <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident

      </p>
        <div className={styles.videoBox} style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
          <div>
          <h4 style={{color:"red"}}>icon</h4>

          </div>
     
           
        </div>
        </Col>
    </Row>
   </Container>
   </section>

   </>
    
      

  )
}

export default About
