import {SET_PRODUCT_DATA} from '../action/types'
import product from "../services/dataService";

const ProductReducer = (state = product, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return action.data ;
    default:
      return state;
  }
};

export default ProductReducer;