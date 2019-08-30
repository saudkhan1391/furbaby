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
    `}
    

    </style>
) 