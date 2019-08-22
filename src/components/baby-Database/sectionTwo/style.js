import React from 'react';
export default () => (
    <style>{`
    .container {
        max-width: 1591px;
    }
    .databaseParagraph{
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #6d7278;
    }
    .forCard-border{
        border: solid 1px #e5e5e4;
        background-color: #ffffff;
        width:93%;
        height:128px;
    }
    .forCard-border1{
        border: solid 1px #e5e5e4;
        background-color: #ffffff;
        width:93%;
        height:152px;
    }
    .forCard-border2{
        border: solid 1px #e5e5e4;
        background-color: #ffffff;
        width:93%;
        height:100px;
    }
    .amanda{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .amanda1{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .viewRecordsBtn{
        border-radius: 4px;
        border: solid 1px #32c5ff;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #32c5ff;
        padding: 7px 22px;

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
      .img1{
        border: solid 9px #afb0b1;
        border-radius: 50%;
        overflow:hidden;
      }
      .ovalGreen{
        width: 16px;
        height: 16px;
        background: #8bc53f;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3px;
        color: white;
        font-size: 9px;
        top: -8px;
        left: 67px;
      }
      .newVisitButton button{
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
        padding:6px 12px;
      }
      .holtHeading{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
      }
      .btn1{
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
        padding: 5px 18px;
      }
      .schedule-Repeat-Visit-Heading h1{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        margin-left: -8px;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
      }
      .schedule-Repeat-Visit-Paragraph p{
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        margin-left: -8px;
        letter-spacing: normal;
        color: #6d7278;
      }
       .h-screen1{
         height:600px;
       }
      .style2{
        border-top: 2px solid #e5e5e4;
        width: 100%;
        margin-top: -22px;
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
       
        font-size:15px;
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
        height: 23px;
        width: 25px;
        border-radius: 4px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
      }
      .schedule-Selected-Button button{
        border-radius: 4px;
        background-color: #9c1f60;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        margin-left: -8px;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        padding: 12px 24px;
      }
    
    `}

    </style>
) 