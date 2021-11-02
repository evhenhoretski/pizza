import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem, Button} from "react-bootstrap";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

const CarouselBox = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/menu');
    }
    
    return (
        <Carousel>
            <CarouselItem>
                <img
                    className="d-block w-100 brightness carousel-img"
                    src={ img1 }
                    alt="Pizza"
                />
                <Carousel.Caption>
                    <h3 className="about-text">Хелловінські знижки</h3>
                    <p className="about-desc">-50%</p>
                    <Button className="button mb-4" onClick={handleClick}>Перейти в меню</Button>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100 brightness carousel-img"
                    src={ img2 }
                    alt="Pizza"
                />
                <Carousel.Caption>
                    <h3 className="about-text">1 + 1 = 3</h3>
                    <p className="about-desc">Тільки 1.07-14.07 при замовленні 2 піц, 3 отримуй в подарунок!</p>
                    <Button className="button mb-4" onClick={handleClick}>Перейти в меню</Button>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    );
};

export default CarouselBox;