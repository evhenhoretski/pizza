import React, { useState } from 'react';
import {Nav, Row, Col} from 'react-bootstrap';
import CartItem from '../Components/CartItem';


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
            <Row>
                <Col sm={3}>
                    <Nav className="mr-3" >
                        <Card className="mt-4 mb-4 flexItem">
                            <Card.Img
                                variant="top"
                                src={item.img}
                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                {cartItems.map(item => (
                                    <CartItem item={item}/>
                                ))}
                            </Card.Body>
                        </Card>
                    </Nav>
                </Col>
            </Row>
          {/*{item.name}*/}
        </div>
      ))}

      Total - {totalPrice}
    </>
  )
};

export default Cart;