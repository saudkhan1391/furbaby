import React from 'react';
import Style from './style';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../commoncomponents/card"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


const CarouselTwo=(props) => {
    let { appointments, dispatch } = props;
    return(
        <div>
            <div className="carousel-container">
                <Carousel responsive={responsive}>
                    {
                        appointments.map((item, index) => {
                            return <Card key={index} src={require('../../assets/images/img1-placeholder.png')} dispatch={dispatch} item={item} />
                        })
                    }
                </Carousel>
            </div>
            <Style />
        </div>

    );
}

export default CarouselTwo;