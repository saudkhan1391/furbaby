import React from 'react';
export default () => (
    <style>{`
    
  
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
        background: rgba(0, 0, 0, 0.28);
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        display: none;
        font-size: 40px;
        height: 40px;
        line-height: 35px;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        cursor: pointer;
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        text-align: center;
        width: 40px;
        z-index: 10;
    }
    
    .carousel-control.prev {
        left: 2%;
    }
    
    .carousel-control.next {
        right: 2%;
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