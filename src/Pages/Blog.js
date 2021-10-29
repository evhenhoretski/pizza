import React, {Component} from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        {/*<Media className="m-5">*/}
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%91%D0%BB%D1%8E%D0%B7_300dpi-thumbnail-960x960-70.jpg"

                            />
                            {/*<Media.Body>*/}
                                <h5>Blog post</h5>
                                <p>text e xtex t tex tet xtexttext e xtex t tex tet xtexttext e xtex t tex tet xtext
                                    text e xtex t tex tet xtexttext e xtex t tex tet xtexttext e xtex t tex tet xtext</p>
                            {/*</Media.Body>*/}
                        {/*</Media>*/}
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Pizza</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Chizz</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text> xtexttext e xtex t tex tet xtexttext e xtex t tex tet xtext
                                    text e xtex t tex tet xtexttext e xte</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
