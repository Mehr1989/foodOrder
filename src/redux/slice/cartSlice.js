import { createSlice } from "@reduxjs/toolkit"

const initialState = ({
    cartItems : [],
    amount : 0,
    total:0

})
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart :(state)=>{
            state.cartItems = []
        },
        removeItem :(state,{payload}) =>{
            state.cartItems = state.cartItems.filter((item) => item.id !== payload);

        },
        increase:(state,{payload})=>{
            const cardItem = state.cartItems.find((item) => item.id === payload);
            cardItem.amount = cardItem.amount + 1;
        },
        decrease:(state,{payload})=>{
            const cardItem = state.cartItems.find((item)=>item.id===payload);
            cardItem.amount = cardItem.amount -1
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
          },

   
        

        
    }

})

export const
 {clearCart,increase,decrease,removeItem,calculateTotals} = cartSlice.actions
export default cartSlice.reducer;