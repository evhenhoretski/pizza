import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Cart/actions/cart.actions';
import {
  Container, Tab, Nav, Row, Col
} from 'react-bootstrap';
import MenuItem from '../Components/MenuItem';

import data from '../data.json';

const Menu = () => {
    const dispatch = useDispatch();
    const categories = Object.keys(data);
    const [categoryActive, setCategoryActive] = useState(categories[0]);
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey={categoryActive}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            {categories.map(item => (
                             <Nav.Item key={item}>
                                <Nav.Link 
                                    eventKey={item}
                                    onClick={() => setCategoryActive(item)}
                                >
                                    {item}
                                </Nav.Link>
                            </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            {categories.map(item => (
                                 <Tab.Pane eventKey={item}>
                                 <Container className="1">
                                     <h2 className="text-center m-4">{item}</h2>
                                    <div className="flex">
                                        {data[item].map(product => (
                                            <MenuItem item={product} onClick={handleAddToCart}/>
                                        ))}
                                    </div>
                                 </Container>
                             </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default Menu;