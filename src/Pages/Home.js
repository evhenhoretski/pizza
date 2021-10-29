import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our pizza</h2>
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
                                <Button variant="primary">About pizza</Button>
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
                                <Button variant="primary">About pizza</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default Home;