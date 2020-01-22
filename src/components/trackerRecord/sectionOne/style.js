import React from 'react';

export default () => (
    <style>{`
    .petName {
        width: 170px;
        // border-width:2px;
        // text-overflow: ellipsis;
        // word-wrap: break-word;
        // overflow: hidden;
        // height: 30px;
    }
    .container {
        max-width: 1591px;
    }
    .coverPhoto{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
    }
    .lbl-2 {
        width: 494px;
        height: 38px;
        font-family: Lato;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.58;
        letter-spacing: normal;
        color: #444444;
    }
    .btn-background{
        width: 273px;
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
    .hr {
        border-bottom: 2px solid #8080801c;
        width: 100%;
    }
    .CircularProgressbar .CircularProgressbar-path {
        stroke: #00c6ff;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease 0s;
            transition-duration: 0.5s;
    }
    .CircularProgressbar .CircularProgressbar-trail {

        stroke: #d6d6d65c;
        stroke-linecap: round;
    
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
    .max-w-sm {
        max-width: 190px;
    }
    .shadow-bord {

        border: 1px solid #8080801c;
    
    }
    .img3{
        border:12px solid #ffff;
        border-radius: 50%;
        overflow: hidden;

      }
      .bordercheck{
        border: solid 1px #32c5ff;
        border-radius: 50%;
        overflow:hidden;
      }
      .main {
          border:1px solid #e2e8f0;
      }

    .heading{
        font-family: Lato;
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 100%;
    }
    .tracks {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .tracks div{
        width: 50%;
        padding-top: 27px;
    }
    .tracks-comp {
      width: 100%;
    }
    .track-txt{
        width: 82px;
        height: 24px;
        font-family: Lato;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .track-txt-comp{
        font-family: Lato;
        font-size: 12px;
        font-weight: normal;
        font-style: italic;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .update-btn{
        width: 117px;
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
    button:disabled,
    button[disabled]{
        opacity: 0.5;
    }
    #cll {
        background-image:url('../../../assets/images/fill-3.png');
    }
    .inline.markers{
        width: 26px;
        margin-right: 15px;
    
    }
    .data-div p{
        width: 236px;
        height: 30px;
        font-family: Lato;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #6d7278;
    }
    .text-area {
        height: 122px;
        border: 1px solid #e2e8f0;
        width: 100%;
        resize: none;
    }
    .data-div {
        width: 520px;
    }
    .data-div label {
        width: 107px;
        height: 30px;
        font-family: Lato;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #6d7278;
    }
    .head-img{
        width:24px;
        height:24px;
    }
    .completed{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 109px;
      height: 109px;
      border-radius: 50%;
  }
    .checkbox{
        width: 50%;
        padding: 10px 0px 10px 0;
    }
    .checkbox span{
        padding-left: 8px;
    }
    .main-check-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .activity-popup-small {
        border-radius: 4px;
        border: solid 1px #9c1f60;
        font-family: Lato;
        font-size: 10px;
        font-weight: bold;
        color: #9c1f60;
        padding: 7px 20px;
    }

    `}</style>
)