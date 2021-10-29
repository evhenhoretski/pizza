import { createStore } from 'redux';

import createRootReducer from './reducers';

const cartItems = localStorage.getItem('cartItems');

const initialState = {};

if (cartItems) {
  initialState.cartItems = JSON.parse(cartItems);
}

const store = createStore(
  createRootReducer(),
  initialState,
);

export default store;