import React from 'react';
import { toast } from 'react-toastify';
import {
  Card, Button
} from 'react-bootstrap'

const MenuItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
    toast.success(`${item.name} добавлено в корзину!`)
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
                {item.wallet}
            </Card.Text>
        </div>
        <Button onClick={handleClick} className="mt-2 button">Добавити в корзину</Button>
      </Card.Body>
  </Card>
  )
}

export default MenuItem;