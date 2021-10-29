import { combineReducers } from 'redux';

import cartItemsReducer from '../../Pages/Cart/reducers';

const createRootReducer = () =>
  combineReducers({
    cartItems: cartItemsReducer,
  });

export default createRootReducer;