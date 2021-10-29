import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col, CardGroup, Card, Button} from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Піца</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="second">Салат</Nav.Link>
                               </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link eventKey="third">Напої</Nav.Link>
                               </Nav.Item>
                               {/* <Nav.Item>*/}
                               {/*    <Nav.Link eventKey="fourth">Fram</Nav.Link>*/}
                               {/*</Nav.Item>*/}
                               {/* <Nav.Item>*/}
                               {/*    <Nav.Link eventKey="fifth">Lib</Nav.Link>*/}
                               {/*</Nav.Item>*/}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <Container className="1">
                                        <h2 className="text-center m-4">Піца</h2>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">About pizza</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Container className="2">
                                        <h2 className="text-center m-4">Салати</h2>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">About pizza</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Container className="3">
                                        <h2 className="text-center m-4">Напої</h2>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">About pizza</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <CardGroup className="m-4">
                                            <Card className="m-4" bg="warning">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza1</Card.Title>
                                                    <Card.Text>
                                                        our pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza2</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card className="m-4">
                                                <Card.Img
                                                    variant="top"
                                                    src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Pizza3</Card.Title>
                                                    <Card.Text>
                                                        ouer pizza is the best world
                                                    </Card.Text>
                                                    <Button variant="primary">Замовити</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Menu;