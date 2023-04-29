import React, { useState } from 'react'
import { products } from './data'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import styles from '@/styles/Home.module.scss'
import { addToCart,incrementQuantity,decrementQuantity } from '@/redux/shopSlice'
import {useDispatch } from 'react-redux'
import {AiFillPlusCircle} from "react-icons/Ai"
import {AiFillMinusCircle} from "react-icons/Ai"



function Menu() {
  //related to the filter section:
 const [items,setItems] = useState(products)


 //related to the order section:
const dispatch = useDispatch()
const shop =(foodItem) =>{
  dispatch(addToCart(foodItem))
  
}

const increment =(foodItem) =>{
  dispatch(incrementQuantity(foodItem))
}

const decrement =(foodItem) =>{
  dispatch(decrementQuantity(foodItem))
}





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

    
    {items.map((foodItem)=>{
      return(
        <>
      
        <Col key={foodItem.title} lg={4} md={6} sm={12} style={{marginTop:"5%"}}>
          <Card  data-aos='zoom-out' className={styles.menuCard}>
            <div style={{height:"40vh"}}>

              <Card.Img src={foodItem.source} style={{width:"100%",height:"100%"}}/>
            </div>
          
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <h3>{foodItem.title}</h3>
                   <p>{foodItem.text}</p>
                   <h2>{foodItem.price}</h2>

                  </div>
       
        <Col>
        <div style={{display:"flex",justifyContent:"center",flexWrap:'wrap'}}>
          <Button variant='none' onClick={()=>increment(foodItem)}>
          <AiFillPlusCircle style={{width:"30px",height:'4vh'}}/>

          </Button>

        <Button variant='dark' style={{width:"60%"}} onClick={()=>shop(foodItem)}>
          Order
          </Button>
        <Button variant='none' onClick={()=>decrement(foodItem)}>
          <AiFillMinusCircle style={{width:"30px",height:'4vh'}}/>

          </Button>


        </div>
        </Col>
    
     
          
   

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
