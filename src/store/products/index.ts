import { IProductAction, IProductInitialState } from "./types"; 

const INITIAL_STATE: IProductInitialState = {
  products: []
};


//reducers 
function product(state = INITIAL_STATE,  action: IProductAction) {
  if (action.type === "TOGGLE_PRODUCT") {
    return {
      ...state,
      product: action.product, // setar estado de product
    };
  }
  if (action.type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.products, // setar estado de products
    };
  }

  return state;
}


export default product

