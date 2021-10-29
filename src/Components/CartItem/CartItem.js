import React from 'react';
import { Card } from 'react-bootstrap'

const CartItem = ({ item }) => {

    return (
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
            </Card.Body>
        </Card>
    )
}

export default CartItem;