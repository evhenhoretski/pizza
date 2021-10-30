import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap'

const CartItem = ({ item }) => {
  return (
    <Card className="mt-4 mb-4 flex-row">
      <Row>
        <Col xs="3">
          <Image
            src={item.img}
            className="img"
          />
        </Col>
      <Col xs="6">
        <Card.Body className="card-block px-2">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
      </Col>
      <Col xs="1">
        <Card.Text>
            {item.price}
        </Card.Text>
      </Col>
      <Col xs="2">
        <Card.Text>
           _-
        </Card.Text>
      </Col>
      </Row>

    </Card>
  )
}

export default CartItem;