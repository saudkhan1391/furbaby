import React from 'react';
export default () => (
    <style>{`
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
     
      .style2{
        border-top: 2px solid #e5e5e4;
        width: 100%;
        margin-top: 0px;
      }  
      .visit{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.63;
        letter-spacing: normal;
        text-align: center;
        color: #444444;
      }
      .again-border{
        border:1px solid #e5e5e4;
      }
      .inputvision input.border{
        padding: 4px
        padding: 8px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #6d7278;
        border-radius: 4px;
        border: solid 1px #dcdddf;
      
      }
      .inputvision label{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #444444;
      
      }
      
      .rmvBtn{
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #6d7278;
        border-radius: 4px;
        border: solid 1px #6d7278;
        padding: 6px 21px;
      }
      .saveBtn{
        border-radius: 4px;
        background-color: #8bc53f;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        padding: 6px 21px;
      }
      .cancelBtn{
        border-radius: 4px;
        background-color: #6d7278;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        padding: 6px 21px;
      }
      .saveButton{
        margin-left: -14px;
      }
      .cancelButton{
        margin-left: 17px;
      }
      .allButtons{margin-bottom: 0px;
      padding-top: 16px;
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
    .calendar-item{
        position: absolute;
        background-color: #8bc53f;
        border-radius: 50%;
        top: 0;
        right: 0px;
        width: 24px;
    }
    .calendar-item p{
        color: white;
        font-size: 12px;
        padding: 5px;
    }
    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
        display: block;
    }
    .react-calendar button{
        position: relative;
    }
    .single-tile{

    }
    .react-calendar__tile--active{
        border: solid 1px #32c5ff!important;
        background-color: #32c5ff!important;
        height: 65px!important;
        width: 65px!important;
    }
    .react-calendar__tile--active:enabled:focus{
        border: solid 1px #32c5ff!important;
        background-color: #32c5ff!important;
        height: 65px!important;
        width: 65px!important;
    }
    .coverPhoto {
      width: 91px;
      height: 91px;
      margin-top: 0;
      margin-left: 0px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
  }
  .completed{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 109px;
    height: 109px;
    border-radius: 50%;
}
    .carousel-cont .shadow-bord-main{
        border: 1px solid #8080801c;
        padding: 27px 13px 17px 13px;
        width: 158px;
        position: relative;
    }
    .forText {
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #444444;
        padding-top: 34px;
    }
    .mainWrapper{
        margin-right: 40px;
        position: relative
    }
    .mainWrapper:hover .extension {
        height: 49px;
    }
    .mainWrapper:hover .extension p {
        display: block;
    }
    .extension{
        display: block;
        height: 0;
        transition: height 0.3s;
        align-items: center;
        justify-content: center;
        border: 1px solid #8080801c;
        width: 158px;
    }
    .extension p{
        font-family: Lato;
        display: none;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        color: #444444;
        padding-top: 15px;
    }
    .extension p span{
        color: #32c5ff;
        cursor: pointer;
    }
    .forText p.normal {
        min-height: 26px;
    }
    .react-datetime-picker__wrapper{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #6d7278;
        border-radius: 4px;
        border: solid 1px #dcdddf;
        width: 100%;
        height: 38px;
    }
    .phone-message{
        background-color: red;
    }
    .phone-message p{
        margin-top: 16px;
        padding-left: 12px;
        color: white;
    }
    .phone-message p span{
        color: #32c5ff;
        cursor: pointer;
    }
    .greenPress{
       color: #8bc53f;
       cursor: pointer;
    }
    .blueWithOut{
        color: #32c5ff;
    }
    .bluePress{
       color: #32c5ff;
       cursor: pointer;
    }
    .greenWithOut{
        color: #8bc53f;
    }
    .mt-0imp{
        margin-top: 0!important;
    }
    `}

    </style>
) 