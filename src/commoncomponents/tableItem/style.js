import React from 'react';

export default () => (
    <style>{`
    .coverPhoto {
        position: absolute;
        width: 46px;
        height: 46px;
        margin-top: 0;
        margin-left: 0px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        top: 22px;
        left: 22px;
    }
    .completed{
        position: absolute;
        top: 13px;
        left: 14px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }
    .CircularProgressbar {
        width: 54px !important;
        margin-left: 13px;
    }
    .carousel-container button{
        padding: 7px 20px;
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
    `}</style>
)