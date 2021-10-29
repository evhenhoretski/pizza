import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Design</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="second">Team</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="third">Programing</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="fourth">Fram</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="fifth">Lib</Nav.Link>
                               </Nav.Item>
                            </Nav>

                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0a619ixK-XYZHYo4NDpXlLHn0r6YnX-3Zbw&usqp=CAU"/>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvJeOlK2US83gCwblUhKW35huzmwKkxYejw&usqp=CAU"/>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/30/%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8E-thumbnail-2300x2300-70.jpg"/>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://media.dominos.ua/__sized__/menu/product_osg_image/2019/10/04/5_%D1%81%D1%8B%D1%80%D0%BE%D0%B2-min-thumbnail-2300x2300-70.jpg"/>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://media.dominos.ua/__sized__/menu/product_osg_image/2019/10/04/%D0%B3%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-min-thumbnail-2300x2300-70.jpg"/>
                                    <p>
                                        textetxtextetxtetxtextetxtextetxt
                                        textetxtetxetxtetx
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;