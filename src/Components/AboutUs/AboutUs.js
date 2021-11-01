import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Clients from '../../assets/clients.jpeg';
import Interier from '../../assets/interier.jpeg';
import Personal from '../../assets/personal.jpeg';
import Pizza from '../../assets/pizza.jpeg';

const aboutUsData = [
  {
    title: `текст про дуже вкусну піцу текст про дуже вкусну піцу
    текст про дуже вкусну піцу текст про дуже вкусну піцу
    текст про дуже вкусну піцу текст про дуже вкусну піцу`,
    image: Pizza
  },
  {
    title: `текст про персонал текст про персонал текст 
    про персонал текст про персонал текст про персонал
    текст про персонал текст про персонал текст про персонал`,
    image: Personal
  },
  {
    title: `текст про незвичайний інтерєр текст про незвичайний інтерєр
    текст про незвичайний інтерєр текст про незвичайний інтерєр
    текст про незвичайний інтерєр текст про незвичайний інтерєр`,
    image: Interier
  },
  {
    title: `текст про задоволених клієнтів текст про задоволених клієнтів
    текст про задоволених клієнтів текст про задоволених клієнтів
    текст про задоволених клієнтів текст про задоволених клієнтів`,
    image: Clients
  }
]

const AboutUs = () => {
  return (
    <>
      <Container className="about">
        <h3 className="about-title">Про нас</h3>
        {aboutUsData.map((item, index) => (
          <Row key={item.title} className={`mt-5 pb-5 border-bott ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <Col xs={4}>
              <Image src={item.image} className="img"/>
            </Col>
            <Col xs={8}>
              <p>
              {item.title}
              </p>
            </Col>
        </Row>
        ))}
      </Container>
    </>
  )
}

export default AboutUs;
