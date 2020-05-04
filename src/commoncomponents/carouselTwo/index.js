import React, { useEffect, useState } from 'react';
import Style from './style';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../commoncomponents/card";
import { restructorData } from "../../components/functions";
import ReactPaginate from "react-paginate";

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

    let { appointments } = props;
    const [allAppointments, setAllAppointments] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        let final = restructorData(appointments, 10);
        if(!current){
            setCurrent(final[0]);
        }
        setAllAppointments(final);
    }, [appointments]);

    const handlePageClick = (page) => {
        setCurrent(allAppointments[page.selected]);
    };

    return(
        <div>
            <div className="carousel-container">
                <Carousel responsive={responsive}>
                    {
                        current && current.map((item, index) => {
                            return <Card key={index} item={item} />
                        })
                    }
                </Carousel>

                <ReactPaginate previousLabel={<i className="fa fa-chevron-left "> </i>}
                               nextLabel={<i className="fa fa-chevron-right "> </i>}
                               breakLabel={". . ."}
                               breakClassName={"break-me"}
                               pageCount={allAppointments.length}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               containerClassName={"digit-icons main"}
                               subContainerClassName={"container column"}
                               onPageChange={event => handlePageClick(event)}
                               activeClassName={"p-one"}/>
            </div>
            <Style />
        </div>

    );
}

export default CarouselTwo;