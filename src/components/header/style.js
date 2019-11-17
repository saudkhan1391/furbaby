import React from "react";
export default () => (
    <style>{`
   .headerPart{
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #6d7278;
   }
   .borderline{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #e5e5e4;
    background-color: #ffffff;
    padding:0px;
   }
   .oval{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #9c1f60;
   }
   .span1{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin-left: 3px
   }
   .pad{
       padding:14px;
   }
   .active{
    border-bottom: 2px solid #32c5ff;
    padding: 30px 0px 26px 0px;
}
    `}</style>
)