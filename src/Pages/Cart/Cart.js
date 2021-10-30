import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Row, Col, Tab, Container, Button } from 'react-bootstrap';
import CartItem from '../../Components/CartItem';
import OrderModal from '../../Components/OrderModal';


const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector(state => state.cartItems.items);
  const totalPrice = useSelector(state => state.cartItems.total);
  return (
    <>
      <div className="mb-4 ">
        Cart
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {/* виведи тут компоненту карт айтема */}
            <Container>
                <Tab.Container id="left-tabs-example">
                    <Row>
                        <Col sm={5}>
                            <Tab.Content className="mt-3">
                                <Container className="1">
                                    <div className="flex">
                                        {cartItems.map(item => (
                                            <CartItem item={item}/>
                                        ))}
                                    </div>
                                </Container>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>      
        </div>
      ))}
      Total - {totalPrice}
      <Button variant="primary" onClick={handleShow}>Order</Button>
      <OrderModal show={show} onClose={handleClose}/>
    </>
  )
};

export default Cart;