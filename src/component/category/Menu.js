import React, { useState } from 'react'
import { products } from './data'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import styles from '@/styles/Home.module.scss'




function Menu() {
 const [items,setItems] = useState(products)

 const filterItems = (filtering) =>{
  const updateList = products.filter((filterList)=>{
    return filterList.category === filtering
  })
  setItems(updateList)
}



  return (
    <>
    <Container>
    
    <h5>Our Menu</h5>
    <h3>Check Out Our Yummy Menu</h3>

          <Button variant="primary mx-2 my-1 " onClick={()=>setItems(products)}>All</Button>
          <Button variant="danger mx-2 my-1 " onClick={()=>filterItems("starter")}>Starter</Button>
          <Button variant="danger mx-2 my-1" onClick={()=>filterItems("Breakfast")} >Breakfast</Button>
         <Button variant="danger mx-2 my-1 " onClick={()=>filterItems("Launch")} >Launch</Button>
          <Button variant="danger mx-2 my-1 " onClick={()=>filterItems("Dinner")} >Dinner</Button>

      <Row>

    
    {items.map((list)=>{
      return(
        <>
      
        <Col key={list.title} lg={4} md={6} sm={12} style={{marginTop:"5%"}}>
          <Card  data-aos='zoom-out' className={styles.menuCard}>
            <div style={{height:"40vh"}}>

              <Card.Img src={list.source} style={{width:"100%",height:"100%"}}/>
            </div>
         
          <h3>{list.title}</h3>
  
           <p>{list.text}</p>

          <h2>{list.price}</h2>
   

          </Card>
          
        </Col>
        </>
      )
    })}

       </Row>
    </Container> 
    </>
  )
}

export default Menu
