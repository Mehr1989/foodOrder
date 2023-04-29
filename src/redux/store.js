import { combineReducers } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "./shopSlice"
const reducer = combineReducers({
    shop: shopReducer

})
const store = configureStore({

reducer
})

export default store