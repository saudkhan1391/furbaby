import React, { useEffect, useState } from 'react';
import Style from './style';
import "react-multi-carousel/lib/styles.css";
import Card from "../../commoncomponents/tableItem";
import { restructorData } from "../../components/functions";
import ReactPaginate from "react-paginate";
import sortArray from "array-sort";


const CarouselTwo=(props) => {

    let { appointments } = props;
    const [allAppointments, setAllAppointments] = useState([]);
    const [current, setCurrent] = useState("");
    const [selectedPage, setSelectedPage] = useState(0);
    const [order, setOrder] = useState(true);
    const [currentType, setType] = useState("");
    useEffect(() => {
        let final = sortArray(appointments, "startTime", {reverse: true});
        rearrangeData(final, true);
    }, [appointments.length]);

    const rearrangeData = (appointments, flag) => {
        let final = restructorData(appointments, 2);
        if(flag){
            setCurrent(final[selectedPage]);
        }
        setAllAppointments(final);
    };

    const handlePageClick = (page) => {
        setSelectedPage(page.selected);
        setCurrent(allAppointments[page.selected]);
    };

    const sort = (type, order) => {
        switch (type){
            case "date":
                let data = sortArray(appointments, "startTime", {reverse: order});
                rearrangeData(data, true);
                break;
            case "type":
                data = sortArray(appointments, "pet.species", {reverse: order});
                rearrangeData(data, true);
                break;
            case "name":
                data = sortArray(appointments, "pet.name", {reverse: order});
                rearrangeData(data, true);
                break;
            default:
                break;
        }
        setOrder(order);
        setType(type);
    };

    const sortOrder = (current) => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="ml-4 w-4 h-4">
            {
                (currentType === current && order) ?
                    <path className="heroicon-ui" d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"/>:
                    <path className="heroicon-ui" d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z"/>
            }
        </svg>
    );

    const searchVal = (val) => {
        let newData = appointments.filter(item => (item.pet.name+" "+item.petOwner.lastName).toLowerCase().indexOf(val.toLowerCase()) !== -1);
        if(val){
            rearrangeData(newData, true);
        } else {
            rearrangeData(appointments, true);
        }
    };

    return(
        <div>
            <div className="carousel-container">
                <form className="flex justify-end">
                    <input className="border mb-3 h-8 rounded-sm p-2 outline-none" placeholder="Search" onChange={event => searchVal(event.target.value)} type="text"/>
                </form>
                <table className="table-fixed border border-gray-300 w-full">
                    <thead>
                    <tr>
                        <th className="w-1/12 px-4 py-5 text-left"/>
                        <th className="w-4/12 px-4 py-5 text-left cursor-pointer" onClick={() => sort("name", !order)}>
                            <div className="flex items-center">
                                <span>Name</span>
                                {
                                    sortOrder("name")
                                }
                            </div>
                        </th>
                        <th className="w-3/12 px-4 py-5 text-left cursor-pointer" onClick={() => sort("type", !order)}>
                            <div className="flex items-center">
                                <span>Type</span>
                                {
                                    sortOrder("type")
                                }
                            </div>
                        </th>
                        <th className="w-3/12 px-4 py-5 text-left cursor-pointer" onClick={() => sort("date", !order)}>
                            <div className="flex items-center">
                                <span>Scheduled Date</span>
                                {
                                    sortOrder("date")
                                }
                            </div>
                        </th>
                        <th className="w-1/12 px-4 py-5 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        current &&  current.length !== 0 ? current.map((item, index) => {
                            return <Card key={item.appointmentId} item={item} index={index} />
                        }) : <tr className="bg-gray-100"> <td colSpan={5} className="px-4 py-5 text-center">No appointment found</td></tr>
                    }
                    </tbody>
                </table>
                {
                    allAppointments.length > 1 &&
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
                }
            </div>
            <Style />
        </div>

    );
}

export default CarouselTwo;