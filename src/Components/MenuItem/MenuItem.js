import React from 'react';
import {
  Card, Button
} from 'react-bootstrap'

const MenuItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <Card className="mt-4 mb-4 flexItem">
      <Card.Img
          variant="top"
          src={item.img}
      />
      <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
             {item.description}
          </Card.Text>
          <Card.Text>
             {item.price}
          </Card.Text>
          <Button variant="secondary" onClick={handleClick}>Add to cart</Button>
      </Card.Body>
  </Card>
  )
}

export default MenuItem;