import React from 'react';
export default () => (
    <style>{`
    .month {
        padding: 70px 25px;
        width: 100%;
      background-color: rgba(229, 229, 228, 0.3);
        text-align: center;
      }
      
      .month ul {
        margin: 0;
        padding: 0;
      }
      
      .month ul li {
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        text-align: center;
        color: #444444;
      }
      
      .month .prev {
        float: left;
        padding-top: 10px;
      }
      
      .month .next {
        float: right;
        padding-top: 10px;
      }
      
      .weekdays {
        margin: 0;
        padding: 10px 0;
       background-color: rgba(229, 229, 228, 0.3);
      }
      
      .weekdays li {
        display: inline-block;
        width: 13.6%;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.17px;
        color: #899098;
        text-align: center;

      }
      
      .days {
        padding: 10px 0;
      background-color: rgba(229, 229, 228, 0.3);
        margin: 0;
      }
      
      .days li {
        list-style-type: none;
        display: inline-block;
        width: 13.6%;
        text-align: center;
        margin-bottom: 37px;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.17px;
        color: #5a5a5a;

      }
      
      .days li .active {
        padding: 5px;
       background-color: rgba(229, 229, 228, 0.3);
        color: white !important
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
      .inputvision select{
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
      .inputvision select{
          color:#afb0b1;
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
          padding:14px 26px;
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
          padding:14px 45px;
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
          .border-boxes{
            border: solid 1px #e5e5e4;
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
      top: 50%;
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

    </style>
) 