import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import CartItem from '../../Components/CartItem';
import OrderModal from '../../Components/OrderModal';


const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector(state => state.cartItems.items);
  const totalPrice = useSelector(state => state.cartItems.total);
  return (
    <Container>
      <div className="mb-4 mt-4 cart-title">
        Cart
      </div>
      {!cartItems.length && <p>Sorrt, your cart is empty. Try to add something.</p>}
      {!!cartItems.length && (
        <>
        <div>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id}/> 
          ))}
        </div>
        <div className="cart-button-wrapper">
          <p className="cart-total">
            Total - {totalPrice} uah
          </p>
          <Button className="button cart-button" onClick={handleShow}>Order</Button>
        </div>
        <OrderModal show={show} onClose={handleClose}/>
        </>
      )}
    </Container>
  )
};

export default Cart;