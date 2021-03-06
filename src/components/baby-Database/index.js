import React, {useState, useEffect} from 'react';
import Style from './style';
import axios from "axios";
import {searchPath, apiPath} from "../../config";
import {Link} from 'react-router-dom';
import Layout from '../layout/container';
// import {imageExists} from '../functions/index';
import {placeholderPet} from "../../config";
// import Carousel from "react-multi-carousel";
import AddFurBaby from './addFurbaby'
import AddSchedule from './scheduleFurbaby'
import UpdatePetOwner from './updatePetOwner'
import "react-multi-carousel/lib/styles.css";
import Loader from '../../commoncomponents/smallLoader';
import {NotificationManager} from 'react-notifications';
import ShowSingle from "./showSingle";


const Schedule = (props) => {
    let {appointments, clinicId, dispatch, clinic} = props;
    const [showForm, setForm] = useState(false);
    const [detail, setDetail] = useState(false);
    const [addedPopup, setAddedPopup] = useState(false);
    const [updateRecord, setUpdateRecord] = useState(false);
    const [schedulePopup, setSchedulelPopup] = useState(false);
    const [current, setCurrent] = useState("");
    const [searchResult, setSearchResult] = useState("null");
    const [currentPetId, setCurrentPet] = useState(null);
    const [search, setSearch] = useState("");
    const [buttonText, setButton] = useState("SEND FUR BABY TRACKER INVITE");

    const sendOwnerInvite = () => {
        setButton("SENDING...");
        axios.post(apiPath+"/sendOwnerInvite", {
            id: current.id
        }).then(res => {
            setButton("SENT!");
            setTimeout(() => {
                setButton("SEND FUR BABY TRACKER INVITE");
            }, 5000);
            NotificationManager.success('Invite has been sent to user.');
        });
    };


    const addBackFurbaby = (data) => {
        let main = {...current};
        main.pets.push(data);
        setCurrent(main);
    };

    const searchPets = () => {
        setForm(false);
        setDetail(false);
        setSearchResult([]);
        axios.post(searchPath+"/search", {
            keyword: search
        }).then(res => {
            if (res.data.length === 0) {
                setSearchResult("notnull")
            } else {
                setSearchResult(res.data);
            }
        });
    };

    const openDetail = (item) => {
        setCurrent(item);
        setDetail(true);
        setTimeout(() => {
            // scrollToDetail();
        });
    };

    const updateCurrentValue = (item) => {
        let data = [...searchResult];
        data.forEach(main => {
            if(main.id === item.id){
                main.firstName = item.firstName;
                main.lastName = item.lastName;
                main.workPhone = item.workPhone;
                main.email = item.email;
            }
        });
        setSearchResult(data);
        setCurrent(item);
    }



    return (
        <Layout>
            <div className="container mainDb mx-auto" style={{"padding":"0 15px"}}>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="flex upperCon justify-between mt-12">
                        <div className="massMessage-heading">
                            <h1>EXISTING FUR BABY RECORDS</h1>
                        </div>
                        <div>
                            <Link to="/create-new">
                                <button className="mr-4 manuallyBtn">MANUALLY ADD A FUR BABY</button>
                            </Link>
                            {/*<button className="sync-Btn mr-4">SYNC TO PRACTICE MANAGEMENT SOFTWARE</button>*/}
                        </div>
                    </div>
                    <div className="mt-2 forline-again1"/>
                </div>
            </div>
            <div className="container sMainDb mx-auto" style={{"padding":"0 15px"}}>
                <div className="px-2 asda mt-10">
                    <div className="flex -mx-2">
                        <div className="w-1/2">
                            <div className="h-12">
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    searchPets();
                                }}>
                                    <div className="flex h-12 form1">
                                        <input type="text" name="fname" placeholder=" SEARCH..."
                                               onChange={(event) => {
                                                   if (event.target.value.length === 0) {
                                                       setSearchResult("null");
                                                   }
                                                   setSearch(event.target.value)
                                               }
                                               }/>
                                        <div className=" img">
                                            <img src={require('../../assets/images/search.png')}
                                                 onClick={() => searchPets()}/>
                                        </div>
                                    </div>
                                </form>
                                <div style={{"padding":"0 15px"}}>
                                    <div className="databaseParagraph">
                                        <p>Search by the pet???s name, pet owner???s name, email, or phone, or scroll
                                            through the database below.<br/>Records are listed by pet owner last
                                            name and first name.</p>
                                    </div>

                                    {
                                        searchResult !== "null" && searchResult !== "notnull" && searchResult && searchResult.length !== 0 ? searchResult.map((item, index) => {
                                            return (
                                                <div key={index} className="mt-4 forCard-border1">
                                                    <div className="p-4">
                                                        <div className="flex justify-between">
                                                            <div>
                                                                <img className="mb-1 ml-1 inline"
                                                                     src={require('../../assets/images/avatar.png')}/>
                                                                <span
                                                                    className="ml-1 amanda">{item.lastName}, {item.firstName} | {item.workPhone}</span>
                                                            </div>
                                                            <div>
                                                                <button className="viewRecordsBtn"
                                                                        onClick={() => openDetail(item)}>VIEW RECORDS
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.pets.map((single, ind) => {
                                                            return (
                                                                <div key={ind} className="pl-4 mt-1">
                                                                    <img className="inline"
                                                                         src={require('../../assets/images/pawprint.png')}/>
                                                                    <span
                                                                        className="ml-1 amanda1">{single.name}</span>
                                                                </div>
                                                            )
                                                        })}
                                                </div>)
                                        }) : searchResult !== "null" && searchResult !== "notnull" && searchResult.length === 0 ?
                                            <Loader /> : searchResult === "notnull" ?
                                                <div><h1>No Result Found</h1></div> : <div/>}
                                </div>
                            </div>

                        </div>
                        {detail &&
                        <div className="w-1/2 px-2 pl-16">
                            <div className="holtHeading">
                                <h1>{current.lastName}, {current.firstName} | {current.workPhone}</h1>
                            </div>
                            <div className="flex mt-4">
                                <button className="btn1 ml-2" onClick={() => setAddedPopup(true)}>ADD ADDITIONAL FUR
                                    BABY
                                </button>
                                <button className="btn1 ml-2" disabled={buttonText === "SENDING..."} onClick={() => sendOwnerInvite()}>
                                    {buttonText}
                                </button>
                                <button className="btn1 ml-2" onClick={() => setUpdateRecord(true)}>
                                    UPDATE PET OWNER RECORD
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="carousel-container flex flex-wrap flex-row">
                                    {/*<Carousel responsive={responsive}>*/}
                                        {
                                            current.pets.map((item, index) => {
                                                return (
                                                    <ShowSingle key={index} item={item} placeholder={placeholderPet} setCurrentPet={setCurrentPet} setSchedulelPopup={setSchedulelPopup}/>
                                                )
                                            })}
                                    {/*</Carousel>*/}
                                </div>
                            </div>
                            {addedPopup && <AddFurBaby setAddedPopup={setAddedPopup} current={current}
                                                       addBackFurbaby={addBackFurbaby}/>}
                            {schedulePopup &&
                            <AddSchedule current={current} clinicId={clinicId} setAddedPopup={setSchedulelPopup}
                                         petId={currentPetId} appointments={appointments} dispatch={dispatch} clinic={clinic}/>}
                            {updateRecord &&
                            <UpdatePetOwner updateCurrentValue={updateCurrentValue} setAddedPopup={setUpdateRecord} current={current}/>}
                        </div>}
                    </div>

                </div>
            </div>
            <Style/>
        </Layout>
    );
}
export default Schedule;