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
                height: 45px;
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
          .activityBtn-popup-small{
            border-radius: 4px;
            background-color: #9c1f60;
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            padding: 10px 20px;
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
          .fotText-area p {
            text-align: end;
            padding-right: 10px;
            font-size: 13px;
        }
        .notes-content{
            background-color:#f5f5f5;
            margin:7% auto;
            padding:40px;
            width:588px;
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
            height: 800px;
            overflow: scroll;
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
        .customInput{
            height: 45px;
            padding: 10px;
            width: 98%;
        }
        .gallery-images img{
            border-radius: 50%;
        }
        .food-popup-heading img{
            border-radius: 50%;
            width: 43px;
            height: 43px;
            margin-right: 10px;
        }
        .gallery-image {
             padding: 10px;
        }
        .gallery-image .pic{
            width: 100px;
            height: 98px;
            border-radius: 50%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .staffnotes .act-top {
            background-color: #32c5ff;
        }
        .staffnotes .act-2 button {
            border-color: #fff;
            color: #fff;
        }
        .staffnotes .act-1 h3 {
            color: #fff;
        }
    
    .singAct{
margin: 20px 0;
    }
        .singAct .flex {
           align-items: baseline;
   
          
        }
  
    `}</style>
)