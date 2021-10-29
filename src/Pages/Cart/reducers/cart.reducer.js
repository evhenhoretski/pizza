import {  
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY
} from '../actionTypes/cart.actionTypes';


const initState = {
  items: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_TO_CART: {
      const inCart = state.items.some(item => item.id === action.item.id);
      if (inCart) {
        const newItems = state.items.map(item => item.id === action.item.id ? {
          ...item,
          quantity: item.quantity + 1,
        } : item);
        const newTotal = newItems.reduce(
          (totalAmount, { price, quantity }) => totalAmount + quantity * price,
          0,
        );
        const newState = {
          items: newItems,
          total: newTotal
        }
        localStorage.setItem('cartItems', JSON.stringify(newState))
        return newState;
      } else {
        const newState = {
          items: [
            ...state.items,
            {
              ...action.item,
              quantity: 1
            }
          ],
          total: state.total + action.item.price
        }
        localStorage.setItem('cartItems', JSON.stringify(newState))
        return newState;
      }
    }
  case REMOVE_FROM_CART: {
    let itemToRemove= state.items.find(item => action.item.id === item.id)
    let new_items = state.items.filter(item => action.item.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    const newState = {
      items: new_items,
      total: newTotal
    }
    localStorage.setItem('cartItems', JSON.stringify(newState))
    return newState;
  }
  case ADD_QUANTITY: {
    const newItems = state.items.map(item => item.id === action.item.id ? {
      ...item,
      quantity: item.quantity + 1,
    } : item);
    const newTotal = newItems.reduce(
      (totalAmount, { price, quantity }) => totalAmount + quantity * price,
      0,
    );
    const newState = {
      items: newItems,
      total: newTotal
    }
    localStorage.setItem('cartItems', JSON.stringify(newState))
    return newState;
  }
  case SUB_QUANTITY: {
    const newItems = state.items.map(item => item.id === action.item.id ? {
      ...item,
      quantity: item.quantity - 1,
    } : item).filter(product => product.quantity > 0);
    const newTotal = newItems.reduce(
      (totalAmount, { price, quantity }) => totalAmount + quantity * price,
      0,
    );
    const newState = {
      items: newItems,
      total: newTotal
    }
    localStorage.setItem('cartItems', JSON.stringify(newState))
    return newState;
  }
  default:
    return state;
  }
}

export default cartReducer;