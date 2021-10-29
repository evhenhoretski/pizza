import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={ img1 }
                        alt="Pizza"
                    />
                    <Carousel.Caption>
                        <h3>Pizza image</h3>
                        <p>textextextetxtext</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={ img2 }
                        alt="Pizza"
                    />
                    <Carousel.Caption>
                        <h3>Pizza image</h3>
                        <p>textextextetxtext</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselBox;