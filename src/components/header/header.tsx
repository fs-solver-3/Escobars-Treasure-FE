import React, { useState, useEffect } from "react";
import DiscordIcon from "../../assets/discord.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import LogoMP4 from "../../assets/logo.mp4";
import MobileLogoMP4 from "../../assets/logomobile.mp4";

interface Props {
  isConnected: boolean;
}

const Header = (props: Props) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo-video-field">
            {width > 890 && (
              <video autoPlay loop muted playsInline width="150" height="150">
                <source src={LogoMP4} type="video/mp4" />
              </video>
            )}
            {width <= 890 && (
              <video autoPlay loop muted playsInline width="150" height="150">
                <source src={MobileLogoMP4} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="loginBtn">
            <a
              className="social-link"
              href="https://discord.gg/escobarstreasure"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DiscordIcon}
                className="social-icon"
                alt="Discord Icon"
              />
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/escobarstreasure"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={InstagramIcon}
                className="social-icon"
                alt="Instagram Icon"
              />
            </a>
            <a
              className="social-link"
              href="https://twitter.com/EscobarsTreasur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TwitterIcon}
                className="social-icon"
                alt="Twitter Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
