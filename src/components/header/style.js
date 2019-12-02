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
.mob-nav{
  min-height:56px;
  background:#32c5ff;
  padding: 0 15px;
}
.mob-nav img{
  width: 30px;
}
.overlay-back{
  background: #0000003d;
  width:100vw;
  height:100vh;
  left: 0;
    z-index: 1001;
    top: 0;
    position: fixed;
}
.mob-hid{
  position: absolute;
  background: #32c5ff;
  width: 80vw;
  height: 100vh;
  right: 0;
  top: 0;
  padding: 18vh 50px;
  border: 1px solid #eee;
  left: 0;
}
.mob-nav{
  position: relative;
 }
 navigation-mob{
   display: none;
 }
 .mob-hid a{
   font-size: 18px;
   color: #fff;
   margin-right: 0;
   text-align: center;
   margin: 20px 0;
 }
 .mob-hid hr{
  background: #fff;
  height: 1px;
 }
 .mob-hid .mob-logo{
   display: flex;
   justify-content: center;
 }
 .mob-hid .mob-logo img{
   width: 75px !important;
 }
 
    `}</style>
)