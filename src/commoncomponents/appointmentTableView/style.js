import React from 'react';

export default () => (
    <style>{`

.carousel {
    position: relative;
    margin-top: 26px;
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
    left: 5%;
}

.carousel-control.next {
    right: 5%;
}

.carousel-control:hover {
    color: #aaaaaa;
}

#carousel-4:checked ~ .control-4,
#carousel-5:checked ~ .control-5,
#carousel-6:checked ~ .control-6 {
    display: block;
}


.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}

#carousel-4:checked ~ .control-4 ~ .carousel-indicators li:nth-child(4) .carousel-bullet,
#carousel-5:checked ~ .control-5 ~ .carousel-indicators li:nth-child(5) .carousel-bullet,
#carousel-6:checked ~ .control-6 ~ .carousel-indicators li:nth-child(6) .carousel-bullet {
    color: #428bca;
}


#title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}
.digit-icons.main {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    margin-top: 19px;

}
.digit-icons.main li {
    padding: 9px;
    font-family: Montserrat, sans-serif;
}
.digit-icons.main li.p-one {
    width: 45px;
    height: 45px;
    border-radius: 8px;
    background-color: #0095cf;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.digit-icons.main li.p-one a {
    color: #fff;
    outline: none;
}
.digit-icons li a {
    color: #0095cf;
    font-size: 14px;
    cursor: pointer;
}
    `}</style>
)