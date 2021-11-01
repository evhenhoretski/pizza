import React from 'react';
import { toast } from 'react-toastify';
import {
  Card, Button
} from 'react-bootstrap'

const MenuItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
    toast.success(`${item.name} was added to cart!`)
  };

  return (
    <Card className="mt-4 mb-4 flexItem">
      <Card.Img
        variant="top"
        src={item.img}
        className="menu-image"
      />
      <Card.Body className="justify-between">
        <div>
          <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Card.Text>
                {item.price}
            </Card.Text>
        </div>
        <Button onClick={handleClick} className="mt-2 button">Add to cart</Button>
      </Card.Body>
  </Card>
  )
}

export default MenuItem;