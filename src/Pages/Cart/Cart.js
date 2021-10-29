import React, { useState } from 'react';

import {useSelector} from 'react-redux';
import {Nav, Row, Col, Card, Tab, Container} from 'react-bootstrap';
import CartItem from '../../Components/CartItem';


const Cart = () => {
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
          {/*{item.name}*/}
        </div>
      ))}
      Total - {totalPrice}
    </>
  )
};

export default Cart;