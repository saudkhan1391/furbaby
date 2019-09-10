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
      .select-Furbaby-Schedule{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
      }
      .refreshBtn{
        background-color: #6d7278;
        padding: 12px 20px 12px 20px;
        border-radius: 3px;
        outline: none;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
      .manually h1{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
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
      .inputvision input{
        width: 84%;
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
      .reviewBtn{
      padding:10px 40px 10px 40px;
      border-radius: 4px;
      border: solid 1px #9c1f60;
      font-size: 10px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #9c1f60;
      }
      .allButtons{
        margin-bottom: 0px;
        padding-top: 16px;
        }
        .addBtn{
          font-size: 12px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
          border-radius: 3px;
          background-color: #32c5ff;
          padding:15px 34px;
        }
        .cnclBtn{
          font-size: 12px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
          border-radius: 3px;
          background-color: #6d7278;
          padding:15px 55px;
        }
        
        .inputvision select{
          width: 84%;
          padding: 4px padding: 8px;
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
    
    `}
    

    </style>
) 