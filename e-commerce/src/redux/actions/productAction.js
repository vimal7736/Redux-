import { ActionTypes } from "../constants/action-types"

export  const setProducts = (products)=>{ //2
    return { //type is the type of action you wanna perform  ..do we have created action- types 
        type :ActionTypes.SET_PRODUCTS,
        payload :products,             //payload is the data which is products which we are getting

    };
};
export  const selectedProducts = (product)=>{ //3
    return { //Type is the type of action you wanna perform  ..do we have created action- types 
        type :ActionTypes.SELECTED_PRODUCT,
        payload :product,             //payload is the data which is products which we are getting

    };
};
export  const removeSelectedProducts = ()=>{ //3
    return { //Type is the type of action you wanna perform  ..do we have created action- types 
        type :ActionTypes.REMOVE_SELECTED_PRODUCT,
                 //payload is the data which is products which we are getting

    };
};