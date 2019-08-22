import React from 'react';

export default () => (
    <style>{`
        .container{
            max-width: 1591px;
        }    
        .heading{
            font-family: Lato;
            font-size: 24px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.58;
            letter-spacing: normal;
            color: #444444;
        }
        .hr {
            border-bottom: 2px solid #8080801c;
            width: 100%;
        }
        .heading-2{
            font-family: Lato;
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.67;
            letter-spacing: normal;
            color: #444444;
        }
        .input-field {
            width: 330px;
            height: 41px;
            border-radius: 4px;
            border: solid 1px #dcdddf;
            background-color: #ffffff;
        }
        .label-text{
            font-family: Lato;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #444444;
        }






        .label .checkbox1 span{
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #313541;
        }
        .forBg-clr{
            background-color: #fcfcfc;
            border:solid 1px #e5e5e4;
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
            height: 25px;
            width: 25px;
            background-color: #eee;
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
            height: 26px;
            width: 26px;
            border-radius: 4px;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
          }
          .check-mar {
            margin-right: 10%;
            width: 224px;
        }
        .heading-3{
            font-family: Lato;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.63;
            letter-spacing: normal;
            color: #444444;
        }
        .main-check{
            background-color:#fcfcfc;
            border:1px solid #e2e8f0;
        }
        .btn-chk1{
            width: 153px;
            height: 41px;
            border-radius: 3px;
            background-color: #32c5ff;
            font-family: Lato;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
        }
        .btn-chk2{
            width: 147px;
            height: 41px;
            border-radius: 4px;
            background-color: #6d7278;
            font-family: Lato;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
        }
        .inline.pl-10 {
            font-family: Lato;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #313541;
            padding-top: 3px;
        }
        .action-btn1{
            width: 72px;
            height: 24px;
            border-radius: 4px;
            background-color: #32c5ff;
            border-radius: 4px;
            border: solid 1px #e5e5e4;
            font-family: Lato;
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
        }
        .action-btn2{
            width: 118px;
            height: 24px;
            border-radius: 4px;
            background-color: #6d7278;
            font-family: Lato;
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
        }
        .data-back-g{
            background-color:#f1f1f1;
        }
        .data-back{
            background-color:#ffff;
        }
        .table-data{
            width:100%;
        }
        .img {
            width: 60px;
        }
        .oval-g{
            height: 10px;
            width: 10px;
            background-color: #56bd5b;
            border: 1px solid #56bd5b;
            margin-top: 5px;
            border-radius: 50%;
        }
        .oval-r{
            height: 10px;
            width: 10px;
            background-color: #e34c4c;
            border: 1px solid #e34c4c;
            margin-top: 5px;
            border-radius: 50%;
        }
        .last{
            width: 15%;
        }
        .email {
            width: 28%;
        }
        .text{
            font-family: Lato;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #444444;
        }
        .head-text{
            font-family: Lato;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #444444;
        }
    `}</style>
)