import React, { useEffect } from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAll } from '@/redux/shopSlice';
import CartBox from '@/component/CartBox';


function cart() {
 
    const dispatch = useDispatch()
    const shopCart = useSelector((state) => state.shop)
    const {cart,total} = useSelector((state) => state.shop)
    useEffect(() =>{
        dispatch(calculateAll())
        

    },[])
  return (
    <>
    <Container>
        <Row>
           
            <Col style={{display:"flex",justifyContent:"center",marginTop:"10%"}}>
            {shopCart.cart.length === 0 ? (
                <div><p>Your Bag is Currently empty</p>
               
                </div>
              

            ):(
                <>
                <Container>
                    <Row>
                    <Col style={{backgroundColor:"pink"}} >
                      <h2>Items in Your Cart</h2>
                     
                    </Col>
                    <Col>
                       
                    <CartBox />
                            

                      
                        </Col>

                    </Row>
                </Container>
        
                </>


            )}
            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default cart
