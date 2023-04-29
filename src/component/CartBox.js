import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function CartBox() {
    const dispatch = useDispatch()
    const shopCart = useSelector((state) => state.shop)
    
  return (
    <div>
        {shopCart.cart?.map((item) =>{
            const{id,title,price} = item
            return (
                <>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <h3>{price}</h3>
                </>
            )

        })}
       
      
    </div>
  )
}

export default CartBox
