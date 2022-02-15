import React, { createRef, useRef, useState, useEffect } from 'react'
import wallet from '../../utils/wallet'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.scss'

import Slide1 from '../../assets/slideshow/slide1.gif'
import Slide2 from '../../assets/slideshow/slide2.gif'
import Slide3 from '../../assets/slideshow/slide3.gif'
import Slide4 from '../../assets/slideshow/slide4.gif'
import Slide5 from '../../assets/slideshow/slide5.gif'
import Slide6 from '../../assets/slideshow/slide6.gif'
import Slide7 from '../../assets/slideshow/slide7.gif'
import Slide8 from '../../assets/slideshow/slide8.gif'
import Slide9 from '../../assets/slideshow/slide9.gif'
import Slide10 from '../../assets/slideshow/slide10.gif'
import Slide11 from '../../assets/slideshow/slide11.gif'
import Slide12 from '../../assets/slideshow/slide12.gif'

interface Props {
  isConnected: boolean;
}

const Slideshow = (props: Props) => {
  const { isConnected } = props;

  const connectWallet = async () => {
    await wallet.setProvider('metamask');
    await wallet.login('metamask');
  }

  const carousel = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    easing: "linear",
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: true,
    vertical: true
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-content">
        <Slider {...settings} ref={carousel}>
          <img src={Slide1} />
          <img src={Slide2} />
          <img src={Slide3} />
          <img src={Slide4} />
          <img src={Slide5} />
          <img src={Slide6} />
          <img src={Slide7} />
          <img src={Slide8} />
          <img src={Slide9} />
          <img src={Slide10} />
          <img src={Slide11} />
          <img src={Slide12} />
        </Slider>
        );
      </div>
    </div>
  )
}

export default Slideshow