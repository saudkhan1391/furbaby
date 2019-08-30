import React from 'react';
export default () => (
    <style>{`
 
    .label .checkbox1 span{
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #313541;
  }
  .label{
    width:70%;
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
   
 
    `}

    </style>
) 