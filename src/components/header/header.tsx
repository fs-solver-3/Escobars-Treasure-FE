import React, { useState, useEffect } from "react";
import DiscordIcon from "../../assets/discord.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import LogoMP4 from "../../assets/logo.mp4";
import { useSelector } from "react-redux";
import wallet from "../../utils/wallet";
import { RootState } from "../../utils/types";

interface Props {
  isConnected: boolean;
}

const Header = (props: Props) => {
  const { isConnected } = props;
  const [walletAddr, setWalletAddr] = useState("");

  const userAddress = useSelector<RootState, string>(
    (state) => state.user.userAddress
  );

  const walletConnect = async () => {
    await wallet.setProvider("metamask");
    await wallet.login("metamask");
  };

  useEffect(() => {
    if (userAddress) {
      setWalletAddr(userAddress);
    } else {
      setWalletAddr("");
    }
  }, [isConnected, userAddress]);

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo-video-field">
            {/* <video ref={video} loop src='/src/assets/logo.mp4' /> */}
            <video autoPlay loop muted width="150" height="150">
              <source src={LogoMP4} type="video/mp4" />
            </video>
          </div>
          <div className="loginBtn">
            <a
              className="social-link"
              href="https://discord.gg/escobarstreasure"
              target="_blank"
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
