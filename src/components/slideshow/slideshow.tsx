import React, { createRef, useRef, useState, useEffect } from "react";
import wallet from "../../utils/wallet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

// import Slide1 from "../../assets/party.png";
import Slide1 from "../../assets/slideshow/1.gif";
import Slide2 from "../../assets/slideshow/2.gif";
import Slide3 from "../../assets/slideshow/3.gif";
import Slide4 from "../../assets/slideshow/4.gif";
import Slide5 from "../../assets/slideshow/5.gif";
import Slide6 from "../../assets/slideshow/6.gif";
import Slide7 from "../../assets/slideshow/7.gif";
import Slide8 from "../../assets/slideshow/8.gif";
import Slide9 from "../../assets/slideshow/9.gif";
import Slide10 from "../../assets/slideshow/10.gif";
import Slide11 from "../../assets/slideshow/11.gif";
import Slide12 from "../../assets/slideshow/12.gif";

interface Props {
  isConnected: boolean;
}

const Slideshow = (props: Props) => {
  const { isConnected } = props;

  const connectWallet = async () => {
    await wallet.setProvider("metamask");
    await wallet.login("metamask");
  };

  const carousel = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: true,
    arrows: false,
    dots: false,
    vertical: true,
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-content">
        <Slider {...settings} ref={carousel}>
          <img src={Slide1} alt="Slide 1" />
          <img src={Slide2} alt="Slide 2" />
          <img src={Slide3} alt="Slide 3" />
          <img src={Slide4} alt="Slide 4" />
          <img src={Slide5} alt="Slide 5" />
          <img src={Slide6} alt="Slide 6" />
          <img src={Slide7} alt="Slide 7" />
          <img src={Slide8} alt="Slide 8" />
          <img src={Slide9} alt="Slide 9" />
          <img src={Slide10} alt="Slide 10" />
          <img src={Slide11} alt="Slide 11" />
          <img src={Slide12} alt="Slide 12" />
          <img src={Slide1} alt="Slide 1" />
          <img src={Slide2} alt="Slide 2" />
          <img src={Slide3} alt="Slide 3" />
          <img src={Slide4} alt="Slide 4" />
          <img src={Slide5} alt="Slide 5" />
          <img src={Slide6} alt="Slide 6" />
          <img src={Slide7} alt="Slide 7" />
          <img src={Slide8} alt="Slide 8" />
          <img src={Slide9} alt="Slide 9" />
          <img src={Slide10} alt="Slide 10" />
          <img src={Slide11} alt="Slide 11" />
          <img src={Slide12} alt="Slide 12" />
        </Slider>
        );
      </div>
    </div>
  );
};

export default Slideshow;
