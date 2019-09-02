import React,{useState,useEffect} from 'react';
import Style from './style';
import Profile from '../../../commoncomponents/profile';
import response from "../tracker.json";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
  } from 'react-circular-progressbar';
  import 'react-circular-progressbar/dist/styles.css';
const SectionOne = () => {
    let [count,setCount] = useState(0);
    let [count2,setCount2] = useState(0);
    let [count3,setCount3] = useState(0);
    let [count4,setCount4] = useState(0);
    let [count5,setCount5] = useState(0);
    let [count6,setCount6] = useState(0);
    let [count7,setCount7] = useState(0);
    let [count8,setCount8] = useState(0);

    let [counts,setCounts] = useState(0);

    const img1="fill-1";
    const img2="fill-3";
    const img3="stroke-3";
    let [image,setImage] = useState(img1);
    let [image2,setImage2] = useState(img1);
    let [image3,setImage3] = useState(img1);
    let [image4,setImage4] = useState(img1);
    let [image5,setImage5] = useState(img1);
    let [image6,setImage6] = useState(img1);
    let [image7,setImage7] = useState(img1);
    let [image8,setImage8] = useState(img1);
      
 
      const bgColor = (val) =>{
       
        // console.log(count);
        
          switch(val){
           
              case 1 :
                    setCount(count+1);
                    if(count===0){
                        setImage(img3);
                       }else if (count===1){
                           setImage(img2);
                       }else if(count===2){
                           setImage(img1);
                           setCount(0);
                           }
                           break;
                           case 2 :
                                setCount2(count2+1);
                                if(count2===0){
                                    setImage2(img3);
                                   }else if (count2===1){
                                       setImage2(img2);
                                   }else if(count2===2){
                                       setImage2(img1);
                                       setCount2(0);
                                       }
                            break;
                            case 3 :
                            setCount3(count3+1);
                            if(count3===0){
                            setImage3(img3);
                            }else if (count3===1){
                            setImage3(img2);
                            }else if(count3===2){
                            setImage3(img1);
                            setCount3(0);
                            }
                            break;
                            case 4 :
                            setCount4(count4+1);
                            if(count4===0){
                            setImage4(img3);
                            }else if (count4===1){
                            setImage4(img2);
                            }else if(count4===2){
                            setImage4(img1);
                            setCount4(0);
                            }
                            break;
                            case 5 :
                            setCount5(count5+1);
                            if(count5===0){
                            setImage5(img3);
                            }else if (count5===1){
                            setImage5(img2);
                            }else if(count5===2){
                            setImage5(img1);
                            setCount5(0);
                            }
                            break;
                            case 6 :
                            setCount6(count6+1);
                            if(count6===0){
                            setImage6(img3);
                            }else if (count6===1){
                            setImage6(img2);
                            }else if(count6===2){
                            setImage6(img1);
                            setCount6(0);
                            }
                            break;
                            case 7 :
                            setCount7(count7+1);
                            if(count7===0){
                            setImage7(img3);
                            }else if (count7===1){
                            setImage7(img2);
                            }else if(count7===2){
                            setImage7(img1);
                            setCount7(0);
                            }
                            break;
                            case 8 :
                            setCount8(count8+1);
                            if(count8===0){
                            setImage8(img3);
                            }else if (count8===1){
                            setImage8(img2);
                            }else if(count8===2){
                            setImage8(img1);
                            setCount8(0);
                            }
                            break;
                            default:;

          }
      
        
    }

    const profileProgress = () => {
        setCounts(count+count2+count3+count4+count5+count6+count7+count8);
    }
    
    console.log("response",response && response.data[0]);
    return(
        <div class="container mx-auto">
            <div>
                <div style={{display:"flex;justify-content:space-around"}} class="mt-12">
                    <label class="font-bold lbl-2">FUR BABY TRACKER RECORD - TREATMENT</label>
                    <button class="btn-background  font-bold float-right">RETURN TO IN PROGRESS DASHBOARD</button>
                </div>
            </div>
            <div class="hr mt-4"></div>

            <div class="main flex mt-12">
                <div class="profile mt-8 ml-8 flex mb-12">
                    <div class="flex-1 h-12 ml-4 max-w-sm">
                        <div class="max-w-sm rounded overflow-hidden shadow-bord">
                             <div class="px-6 py-4 flex justify-center m-auto pt-8">

                             <CircularProgressbarWithChildren value={counts*6.25}
                              styles={buildStyles({
                                rotation: 0,
                                strokeLinecap: 'rounded',
                                pathTransitionDuration: 0.5,
                                
                              })}>
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                
                                   {counts*6.25===100 ?  <img style={{ width: 120 }}
                                   src={require('../../../assets/images/img-placeholder12.png')} alt="abcc" /> : 
                               
                                <img
                                style={{ width: 120 }}
                                src={require('../../../assets/images/img3-placeholder.png')}
                                alt="doge"
                                />}
                                {/* <div style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>66%</strong> mate
                                </div> */}
                            </CircularProgressbarWithChildren>
                                {/* <div class="bordercheck" id="immbb">
                                    <div class="img3" id="immm">
                                    <img src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                    </div>
                                </div> */}
                            </div>
                                <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                    <p>
                                        Toby Torres
                                        <br></br>
                                        <span class="normal">Todays Visit <br /> Neuter</span>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <Profile />

                    <div class="flex-1 ml-12 pl-12">
                        <div class="heading"><h3>FUR BABY TRACKER</h3></div>
                        <div>
                            <div class="flex tracks justify-between mt-5">
                                <div>
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image + '.png')} alt = "pic" onClick={() => bgColor(1)}/>
                                    <label class="inline track-txt">Diagnostics</label>
                                </div>
                                <div class="mr-10 pr-2">
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image2 + '.png')} alt = "pic" onClick={() => bgColor(2)}/>
                                    <label class="inline track-txt">Medicated</label>
                                </div>
                            </div>  

                            <div class="flex tracks justify-between mt-6">
                                <div>
                        
                                    <img class="inline mr-6" src={require('../../../assets/images/'+ image3 + '.png')} alt = "pic" onClick={() => bgColor(3)}/>
                                    <label class="inline track-txt">Surgical Preparation</label>
                                </div>
                                <div class="mr-10 pr-5">
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image4 + '.png')} alt = "pic" onClick={() => bgColor(4)} />
                                    <label class="inline track-txt">Nail Trim</label>
                                </div>
                            </div>

                            <div class="flex tracks justify-between mt-6">
                                <div>
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image5 + '.png')} alt = "pic" onClick={() => bgColor(5)} />
                                    <label class="inline track-txt">Surgery</label>
                                </div>
                                <div class="mr-12 pr-2">
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image6 + '.png')} alt = "pic" onClick={() => bgColor(6)} />
                                    <label class="inline track-txt">Recovery</label>
                                </div>
                            </div>

                            <div class="flex tracks justify-between mt-6">
                                <div>
                                <img class="inline mr-6" src={require('../../../assets/images/'+ image7 + '.png')} alt = "pic" onClick={() => bgColor(7)} />
                                    <label class="inline track-txt">Laser Therapy</label>
                                </div>
                                <div>
                                <img class="inline mr-5" src={require('../../../assets/images/'+ image8 + '.png')} alt = "pic" onClick={() => bgColor(8)} />
                                    <label class="inline track-txt">Ready for Pick-Up</label>
                                </div>
                            </div> 
                        </div>


                        <div>
                        <div class="flex tracks-comp justify-between mt-10">
                                <div class="track-txt-comp">
                                    <img class="inline mr-3" src={require('../../../assets/images/stroke-2.png')} alt = "pic"/>
                                    <label class="inline">In Progress - Click once.</label>
                                </div>
                                <div class="track-txt-comp">
                                    <img class="inline mr-3" src={require('../../../assets/images/fill-2.png')} alt = "pic"/>
                                    <label class="inline">Complete - Click twice.</label>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12">
                            <button class="update-btn" onClick={()=>profileProgress()}>UPDATE</button>
                        </div>
                    </div>{/*Pointed*/}
                </div>{/*profile*/}
            </div>{/*main*/}
            <Style />
        </div>  /*container*/
    );
     
}

export default SectionOne;