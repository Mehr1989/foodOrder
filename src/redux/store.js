import { combineReducers } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slice/cartSlice'
const reducer = combineReducers({
    cart: cartReducer

})
const store = configureStore({

reducer
})

export default store