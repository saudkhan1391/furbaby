import React from 'react';
import Style from './style';

const Carousel = () => {
    return(
        <div>
                        
        <div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
        <div class="carousel-item">
        <div class="flex mt-12 justify-center mb-12">

<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheckcomp">
<div class="img1">
<img src={require('../../assets/images/img1-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Todd Capitanio

<br></br>
<span class="normal"> Day 2/2</span>
</p>
</div>
</div>
</div>

<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img7">
<img src={require('../../assets/images/img2-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Daisy Stevens

<br></br>
<span class="normal"> Day 1/5</span>
</p>
</div>
</div>
</div>


<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img3">
<img src={require('../../assets/images/img3-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Toby Torres

<br></br>
<span class="normal"> Day 1/2</span>
</p>
</div>
</div>
</div>



<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img4">
<img src={require('../../assets/images/img4-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Todd Capitanio

<br></br>
<span class="normal"> Day 2/2</span>
</p>
</div>
</div>
</div>

</div>

        </div>
        <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
        <div class="carousel-item">
        <div class="flex mt-12 justify-center mb-12">

<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheckcomp">
<div class="img1">
<img src={require('../../assets/images/img4-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Todd Capitanio

<br></br>
<span class="normal"> Day 2/2</span>
</p>
</div>
</div>
</div>

<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img7">
<img src={require('../../assets/images/img3-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Daisy Stevens

<br></br>
<span class="normal"> Day 1/5</span>
</p>
</div>
</div>
</div>


<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img3">
<img src={require('../../assets/images/img2-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Toby Torres

<br></br>
<span class="normal"> Day 1/2</span>
</p>
</div>
</div>
</div>



<div class="flex-1 h-12 ml-4 max-w-sm">
<div class="max-w-sm rounded overflow-hidden shadow-bord">

<div class="px-6 py-4 flex justify-center m-auto pt-8">
<div class="bordercheck">
<div class="img4">
<img src={require('../../assets/images/img1-placeholder.png')} alt = "pic"/>
</div>
</div>
</div>
<div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
<p>
Todd Capitanio

<br></br>
<span class="normal"> Day 2/2</span>
</p>
</div>
</div>
</div>

</div>

        </div>

        {/*<label for="carousel-3" class="carousel-control prev control-1"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>*/}
        <label for="carousel-2" class="carousel-control next control-1"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>
        <label for="carousel-2" class="carousel-control prev control-1"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>
        {/*<label for="carousel-3" class="carousel-control next control-2"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>*/}
        <label for="carousel-1" class="carousel-control prev control-2"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>
        <label for="carousel-1" class="carousel-control next control-2"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>

    </div>
</div>
<Style />
        </div>
        
    );
}

export default Carousel;