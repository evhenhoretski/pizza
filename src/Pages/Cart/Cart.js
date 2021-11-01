import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button, Image } from 'react-bootstrap';

import CartItem from '../../Components/CartItem';
import OrderModal from '../../Components/OrderModal';
import EmptyCart from '../../assets/empty-cart.png';


const Cart = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector(state => state.cartItems.items);
  const totalPrice = useSelector(state => state.cartItems.total);

  const handleClick = () => {
    history.push('/menu');
  }

  return (
    <Container>
      <div className="mb-4 mt-4 about-title">
        Cart
      </div>
      {!cartItems.length && (
        <>
        <p className="cart-center">Sorrt, your cart is empty. Try to add something.</p>
        <div className="cart-img-wrapper">
          <Image src={EmptyCart} className="cart-img"/>
          <Button className="button mt-3" onClick={handleClick}>Перейти в меню</Button>
        </div>
        </>
      )}
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