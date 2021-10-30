import React from 'react';
import { Card } from 'react-bootstrap'

const CartItem = ({ item }) => {

    return (
        <Card className="mt-4 mb-4 flex-sm-row">
            <Card.Img
                height="150"
                weight="150"
                variant="card-img-sm-left"
                src={item.img}
            />
            <Card.Body className="card-block px-2">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.price}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default CartItem;