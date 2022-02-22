import React from "react";
import MetamaskImg from "../../assets/metamask.jpeg";

export const MetamaskModal = () => {
  return (
    <div className="modal-body">
      <div className="wallet-image-field">
        <a href="https://metamask.io/download.html" target="_blank">
          <img src={MetamaskImg} alt="Metamask Image" />
          <p className="wallet-title">MetaMask</p>
        </a>
      </div>
      <div className="wallet-text">
        You need to install Metamask, a virtual Ethereum wallet, in your
        browser.
      </div>
    </div>
  );
};
