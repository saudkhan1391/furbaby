import React from 'react';
export default () => (
    <style>{`

      .clr{
          color:#afb0b1 !important;
      }
      .form input{
        width: 739px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #dcdddf;
        background-color: #ffffff;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #afb0b1;
        padding-left: 10px;
        
      }
      .img{
        width: 22px;
        margin-left: -31px;
        margin-top: 12px;
      }
      .forText{
        text-align: -webkit-center;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #444444;
      }
      .btnBlue1{
        width: 150px;
        height: 24px;
        border-radius: 4px;
        background-color: #32c5ff;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
      .btnWhite{
        width: 150px;
        height: 24px;
        border-radius: 4px;
        border: solid 1px #6d7278;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #6d7278;
      }
      .normal{
          font-weight:normal;
      }
      .img1{
        border: solid 9px #afb0b1;
        border-radius: 50%;
        overflow:hidden;
      }
      .middle{
          margin-left:34px;
      }
      .middle2{
          margin-right:52px;
      }
   
      .foursided-border{
        border: solid 1px #e5e5e4;
      }
      
      
    



      .calendar-div .react-calendar{
        background-color: rgba(229, 229, 228, 0.3);
        width:100%;
        border: none ;
        font-family:Lato;
        line-height: 1.125em;
      }
      abbr[title]{
        text-decoration:none;
      }
      .calendar-div .react-calendar__month-view__weekdays {
        font-family: Lato;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.17px;
        color: #899098;
    }
    .calendar-div .react-calendar__month-view__days__day--weekend {
      font-family: Lato;
      font-size: 20px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.17px;
      color: #5a5a5a;  
  }
  .calendar-div .react-calendar__month-view__days__day--neighboringMonth {
    font-family: Lato;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.17px;
    color: #afb0b1;
  }
  .react-calendar__tile{
    font-family: Lato;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.17px;
    color: #5a5a5a;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    font-family: Lato;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #444444;
  }
  // .react-calendar__navigation button:enabled:hover{
  //   background-color:none;
  // }
  .react-calendar__tile--active:enabled:focus{
    border: solid 1px #32c5ff!important;
    background-color: rgba(50, 197, 255, 0.23)!important;
    border-radius: 8%!important;
    height:65px!important;
    width:65px!important;
  
  }
  
  // .react-calendar__tile:enabled:hover{
  //   background-color:transparent!important;
  // }
  .react-calendar__tile{
    background-color:transparent!important;
    outline:none!important
  }
  .react-calendar__tile {
    max-width:100%!important;
    text-align: center;
    padding: 0px!important;
    background: none;
    flex-basis: 14.2857%;
    height:75px!important;
    width:65px!important;
    display: flex;
    justify-content: center;
  }
  .react-calendar__tile--active{
    width:10px !important;
  }









      .carousel {
        position: relative;
    }
    
    .carousel-inner {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    
    .carousel-open:checked + .carousel-item {
        position: static;
        opacity: 100;
    }
    .carousel-item {
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
    }
    .carousel-item img {
        display: block;
        height: auto;
        max-width: 100%;
    }
    .carousel-control {
      cursor: pointer;
      display: none;
      position: absolute;
      top: 34%;
      -webkit-transform: translate(0, -50%);
      cursor: pointer;
      -ms-transform: translate(0, -50%);
       width: 40px;
    }
    .carousel-control.prev {
        left: 1%;
    }
    .carousel-control.next {
        right: 1%;
    }
    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
        display: block;
    }
    #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
    #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
    #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet 
    `}
    `}

    </style>
) 