import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems.items);
  const totalPrice = useSelector(state => state.cartItems.total);
  return (
    <>
      <div>
        Cart
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {/* виведи тут компоненту карт айтема */}
          {item.name}
        </div>
      ))}

      Total - {totalPrice}
    </>
  )
};

export default Cart;