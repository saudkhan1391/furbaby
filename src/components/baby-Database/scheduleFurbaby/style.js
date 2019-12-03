import React from 'react';
export default () => (
    <style>{`
.headingSchedule{
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.58;
        letter-spacing: normal;
        color: #444444;
        margin-left: 61px;
    }
    .date{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #6d7278;
        margin-top: 9px;
    }

      hr.style1{
        border-top: 2px solid #e5e5e4;
        width:93%;
        margin-top:0px;
    }
    .mb{
        margin-bottom:0px;
    }
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
          padding: 14px 16px;
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
          padding:14px 34px;
        }
        .inputvision select{
          font-size: 14px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #afb0b1;
          width:84%;
        }
        .treatment h1{
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #444444;

        }
        .treatment button{
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
            padding: 5px 16px;

        }
        .optional p{
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #6d7278;
        }
        .checkbox1{
            flex: 1;
        }
        label.container1{
          /* color: red; */
          font-size:18px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #313541;
          margin-bottom:35px;
      }

      .container1 {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Hide the browser's default checkbox */
        .container1 input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 26px;
          width: 26px;
          // background-color: #eee;
          border: 1px solid #dfe6ee;
        }

        /* On mouse-over, add a grey background color */
        .container1:hover input ~ .checkmark {
          background-color: #ccc;
        }

        /* When the checkbox is checked, add a blue background */
        .container1 input:checked ~ .checkmark {
          background-color: white;
          border:1px solid #0099fa
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
          color:red
        }

        /* Show the checkmark when checked */
        .container1 input:checked ~
        .checkmark:after {
          display: block;

        }

        /* Style the checkmark/indicator */
        .container1 .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid #0099fa;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 23px;
          width: 25px;
          border-radius: 4px;
          // box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
          border: 1px solid #dfe6ee;
        }
        .check-mar{
          margin-right:10%;
          width:224px;
        }
          .fotText-area textarea{
            resize:none;
            border-radius: 4px;
            border: solid 1px #dcdddf;
            background-color: #ffffff;
          }
          .addCustom p{
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #444444;
            padding-bottom: 5px;

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
      .reviewBtn {
        padding: 10px 40px 10px 40px;
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
.relatedimage{
    padding: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    }

    .corsswalaspan {
    position: absolute;
    right: 0px;
    top: 0px;
    color: red;
    display: flex;
    font-size: larger;
    font-weight: 900;
    cursor: pointer;
    }

    .w-80{
        width: 80%
    }

    input[type="file"]{
        height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
      }

    input[type="file"]::-webkit-file-upload-button{
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
    .container {
            max-width: 1591px;
        }
        .heading{
            height: 30px;
            font-family: Lato;
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #444444;
        }
        .activity{
            border:1px solid #e2e8f0;
            background-color: #fcfcfc;
        }
        .act-top{
            border-bottom:1px solid #e2e8f0;
        }
        .act-1 {
            width: 100px;
            font-family: Lato;
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #444444;
        }
        .act-2{
            width:111px;
        }
        .act-2 button{
            width: 111px;
            height: 24px;
            border-radius: 4px;
            border: solid 1px #9c1f60;
            font-family: Lato;
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #9c1f60;
        }
        .act-data {
            background-color: white;
        }
        .act-data h3{
            font-family: Lato;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.88;
            letter-spacing: normal;
            color: #444444;
        }
        .act-data p{
            font-family: Lato;
            font-size: 12px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #6d7278;
        }
        .act-data img{
            width:43px;
            height:43px;
        }
        .bin-img{
            width:12px !important;
            height:14px !important;
        }

        /////popup styling///////
        .food-popup-heading{
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #444444;
        }
        .food-popup-para{
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #6d7278;
        }
        .inputvision select{
            width: 98%;
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
          .inputvision label{
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #444444;
          }
          .modal{
              position:fixed;
              z-index:1;
              left:0;
              top:0;
              width:100%;
              height:100%;
              background-color:rgba(0,0,0,0.5);
          }
          .modal-content{
              background-color:#f5f5f5;
              margin:9% auto;
              padding:40px;
              width:700px;
              height:510px;
    overflow: auto;

          }
          .activityBtn-popup{
            border-radius: 4px;
            background-color: #9c1f60;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            padding:16px 30px;
          }
          .CnclBtn-popup{
            border-radius: 4px;
            background-color: #6d7278;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            padding: 16px 40px
          }
          .fotText-area textarea {
            resize: none;
            border-radius: 4px;
            border: solid 1px #dcdddf;
            background-color: #ffffff;
            width: 98%;
            padding: 14px;
        }
        .notes-content{
            background-color:#f5f5f5;
            margin:7% auto;
            padding:40px;
            width:588px;
            height:580px;
            margin-top: 0;
        }
        .pee-content{
            background-color:#f5f5f5;
            margin:11% auto;
            padding:40px;
            width:588px;
            height:412px;
        }
        .snapshots-content{
            background-color:#f5f5f5;
            margin:5% auto;
            padding:40px;
            width:588px;
            height:630px;
        }
        .library-heading{
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.88;
            letter-spacing: normal;
            text-align: center;
            margin-left: -29px;
            color: #444444;
        }
        .photo-heading{
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.88;
            letter-spacing: normal;
            text-align: center;
            color: #444444;
        }
        .imageCont{
            display: flex;
            flex-direction: row;
            padding-top: 5px;
        }
        .imageCont img {
            border-radius: 50%;
        }
    .note{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    }
    .fotText-area textarea {
      resize: none;
      border-radius: 4px;
      border: solid 1px #dcdddf;
      background-color: #ffffff;
  }
  .savebtnText button{
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
    padding: 15px 24px;
    width: 120px
  }
  .attachmentbtn button{
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
    padding: 15px 24px;
  }

    .customMedication{
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.67;
      letter-spacing: normal;
      color: #444444;
    }
    .noteTtle{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #444444;
     }
        .fotText-area textarea {
          resize: none;
          border-radius: 4px;
          border: solid 1px #dcdddf;
          background-color: #ffffff;
      }

 .calendar-div2 {
    border: none;
    font-family: Lato;
    line-height: 1.125em;
}

.calendar-div2 input {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: unset;
    border-radius: 4px;
    border: none;

}

.react-date-picker {
  width: 84% !important;
  height: 35px;
}


.react-date-picker__wrapper {
    display: flex;
    border: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}


.react-date-picker{
    width: 98%;
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