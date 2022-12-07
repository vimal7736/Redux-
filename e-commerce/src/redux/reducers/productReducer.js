import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

// export const productReducer =(state , action ) and we gonna destructure
export const productReducer = (state = initialState, { type, payload }) => {
  //we update the state with payload that receive data from server
  //3
  switch (type) {
    //4 => here we are creating the reducer ==> now go to index,js  => when u are creating application
    //,there will be having multiple reducer
    //we gonna combine all reducer in index .js file

    //first action is type of SET_PRODUCTS
    case ActionTypes.SET_PRODUCTS:
      //*F
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
