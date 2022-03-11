import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Sliderwrap {...settings}>
  <Wrap>
    <img src = "./images/slider-badag.jpg" alt="hey" />
  </Wrap>
  <Wrap>
    <img src = "./images/slider-badging.jpg" alt="hey" />
  </Wrap>
  <Wrap>
    <img src = "./images/slider-scale.jpg" alt="hey" />
  </Wrap>
  <Wrap>
    <img src = "./images/slider-scales.jpg" alt="hey" />
  </Wrap>

    </Sliderwrap>
  )
}

export default ImgSlider

const Sliderwrap = styled(Slider)`
/* height: 150px; */
/* margin-top:10px; */
ul li button{
  &:before{
    font-size: 10px;
    color:rgb(150,158,171)
  }
}
li.slick-active button:before{
  color:white;
}
.slick-list{
  overflow: visible;
  /* margin: 0px 5px; */
}
button{
  z-index: 1;
}

`

const Wrap = styled.div`
cursor: pointer;
/* margin: 0px 15px; */
img{
  border: 4px solid transparent;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: 300ms;

  &:hover{
    border: 4px solid rgba(249,249,249,0.8);
  }
}

`