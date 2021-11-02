import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { resetCart } from '../../Pages/Cart/actions/cart.actions';

const OrderModal = ({ onClose, show }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    name: '',
    phone: '',
    street: '',
    house: ''
  });

  const handleChange = (event) => {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const isValid = Object.values(values).every(value => !!value);
  const onSaveClick = () => {
    if (!isValid) {
      toast.error('Будь ласка, заповність всі поля!');
      return;
    }
    toast.success('Дякуємо! Менеджер скоро зателефонує вам:)');
    dispatch(resetCart());
    onClose();
    history.push('/menu');
  }

  return (
    <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Контактна форма</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Ім'я</Form.Label>
          <Form.Control 
            type="text" 
            name="name"
            placeholder="Введіть ім'я"
            value={values.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Телефон</Form.Label>
          <Form.Control 
            type="text" 
            name="phone"
            placeholder="Введіть телефон"
            value={values.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="shipping">
          <Row>
            <Col> 
              <Form.Label>Вулиця</Form.Label>
              <Form.Control 
                type="text" 
                name="street"
                placeholder="Введіть вулицю"
                value={values.street}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>Номер будинку</Form.Label>
              <Form.Control 
                type="text" 
                name="house"
                placeholder="Введіть номер будинку"
                value={values.house}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Скасувати
      </Button>
      <Button className="button" onClick={onSaveClick}>
        Замовити
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default OrderModal;
