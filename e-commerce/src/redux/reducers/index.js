//here we are gonna combine all reducer 
import {combineReducers  } from "redux"; //5
import { productReducer ,selectedProductReducer } from "./productReducer";

//6
//!Now im going to make a constant of all reducer  will be equal to the combineReducer
const reducers = combineReducers({
   
    allProducts:productReducer,
    product: selectedProductReducer,
     //?here you can define any key ,here im going to define allProductss
    //*and this is equal to productReducer which i have created 
})
//?  //7 => we created the actions=> created Action types => we have also created reduccer and we have combine the reducer 
//*NOw its time to create the store   //8

export default reducers