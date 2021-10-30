import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const OrderModal = ({ onClose, show }) => {
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
      toast.error('Please, fill into ALL fields!');
      return;
    }
    toast.success('Thank you! Manager will contact with you soon:)');
    onClose();
  }

  return (
    <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Contact Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your name</Form.Label>
          <Form.Control 
            type="text" 
            name="name"
            placeholder="Enter name" 
            value={values.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="text" 
            name="phone"
            placeholder="Enter phone"
            value={values.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="shipping">
          <Row>
            <Col> 
              <Form.Label>Street</Form.Label>
              <Form.Control 
                type="text" 
                name="street"
                placeholder="Enter street"
                value={values.street}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>House number</Form.Label>
              <Form.Control 
                type="text" 
                name="house"
                placeholder="Enter house number"
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
        Cancel
      </Button>
      <Button variant="primary" onClick={onSaveClick}>
        Order
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default OrderModal;
