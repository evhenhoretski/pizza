import React, {Component} from 'react';
import AboutUs from '../Components/AboutUs';
import CarouselBox from "../Components/CarouselBox";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <AboutUs />
            </>
        );
    }
}

export default Home;