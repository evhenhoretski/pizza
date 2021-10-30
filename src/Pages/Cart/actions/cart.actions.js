import { 
  ADD_QUANTITY, 
  REMOVE_FROM_CART, 
  ADD_TO_CART, 
  SUB_QUANTITY, 
  RESET_CART
} from '../actionTypes/cart.actionTypes';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}


export const resetCart = () => {
  return {
    type: RESET_CART
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_FROM_CART,
    item
  }
}

export const subtractQuantity = (item) =>{
  return {
    type: SUB_QUANTITY,
    item
  }
}

export const addQuantity = (item) => {
  return {
    type: ADD_QUANTITY,
    item
  }
}