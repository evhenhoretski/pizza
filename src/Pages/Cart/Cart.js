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
      <div className="mb-4 ">
        Cart
      </div>
      {!cartItems.length && <p>Sorrt, your cart is empty. Try to add something.</p>}
      {!!cartItems.length && (
        <>
        <div className="flex flex-start">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id}/> 
          ))}
        </div>
       
        Total - {totalPrice}
        <Button variant="primary" onClick={handleShow}>Order</Button>
        <OrderModal show={show} onClose={handleClose}/>
        </>
      )}
    </Container>
  )
};

export default Cart;