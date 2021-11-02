import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Row, Col, Image } from 'react-bootstrap'
import { subtractQuantity, addQuantity } from '../../Pages/Cart/actions/cart.actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addQuantity(item));
  }

  const handleSub = () => {
    dispatch(subtractQuantity(item));
  }

  return (
    <Card className="mt-4 mb-4 flex-row">
      <Row className="flex-center">
        <Col xs="3">
          <Image
            src={item.img}
            className="img"
          />
        </Col>
      <Col xs="5">
        <Card.Body className="card-block px-2">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
      </Col>
      <Col xs="2">
        <Card.Text>
            {item.price}
            {item.wallet}
        </Card.Text>
      </Col>
      <Col xs="2">
        <Card.Text className="flex flex-start flex-center">
           <div className="cart-action" onClick={handleSub}>-</div>
           <div className="cart-actions-text">{item.quantity}</div>
           <div className="cart-action" onClick={handleAdd}>+</div>
        </Card.Text>
      </Col>
      </Row>

    </Card>
  )
}

export default CartItem;