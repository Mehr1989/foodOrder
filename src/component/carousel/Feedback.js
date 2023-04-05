import React from 'react'
import { Carousel, CarouselItem, Container ,Row,Col} from 'react-bootstrap'
import { data } from './dataFeedback'


function FeedBack() {
  return (
    <div style={{marginTop:"10%"}}>
      <Container  >
        <Row>
          <Col>
          <h2 style={{color:"#c21111"}}>What Experts Thinking About Us</h2>
          </Col>
        </Row>

    <Carousel>
    {data.map((list =>{
      return(
        <CarouselItem>
          <div style={{display:"flex",justifyContent:'start',flexDirection:'row'}}>
          <div style={{width:"300px"}}>

        <img  style={{width:"100%",height:"100%",borderRadius:"50%"}} src={list.source}/> 
         </div>

          <div style={{marginLeft:"10%",display:"flex",flexDirection:"column",justifyContent:"center"}} >

          <h3>{list.name}</h3>
          <div style={{width:'90%'}}>

           <p>{list.text}</p>
          </div>
     

          </div>
    
      
    
        
      
         
       


          </div>



   
       
      
     

    
   


        
       

        </CarouselItem>

      )
    }))}
    </Carousel>
         

 

    
    
   
  
       
    </Container>
    </div>
  
  )
}

export default FeedBack
