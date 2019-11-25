import React from 'react';

export default ()=>(
    <style>{`
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
              width:588px;
              height:510px;

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
    `}</style>
)