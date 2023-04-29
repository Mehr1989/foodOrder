import { createSlice } from "@reduxjs/toolkit"





const shopSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    quantity:0,
    total: 0
    
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart.quantity === 1) {
        itemInCart.quantity = 1
      } else {
        itemInCart.quantity = itemInCart.quantity -1;
      }
   
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart.quantity === 1) {
        itemInCart.quantity = 1
      } else {
        itemInCart.quantity = itemInCart.quantity -1;
      }
    },
    
    removeItem: (state, action) => {
      const itemInCart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = itemInCart;
    },
    clearCart: (state) => {
      state.cart = [];
    },

    calculateAll:(state,action) =>{
      let{total,quantity}= state.cart.reduce((cartTotal, cartItem)=>{
        const{price,quantity} = cartItem
        const itemTotal = price * quantity
        cartTotal.total += itemTotal
        cartTotal.quantity += quantity
        return cartTotal
        

      },
      {total:0,quantity:0}
      );
      state.total = parseInt(total.toFixed(2))
      state.quantity = quantity
      
    }
    

  },
});
export default shopSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  calculateTotal,
  calculateAll

  
} = shopSlice.actions;