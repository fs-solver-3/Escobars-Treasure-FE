import React from 'react'
import { useState, useEffect } from 'react';
import { NFTtype } from '../../utils/types'
import PriceImage from '../../assets/mintshow.gif'

import './style.scss'

interface Props {
  isConnected: boolean;
}

const Mint = (props: Props) => {
  const { isConnected } = props;
  const [amount, setAmount] = useState(1);
  const increaseHandle = () => {
    console.log("Plus Click")
    // amount++;
    // setAmount();
  }
  const decreaseHandle = () => {
    console.log("Minus Click")
    // amount++;
    // setAmount();
  }
  return (
    <div className="mint-wrapper">
      <div className='mint-header'>
        <div className='limited-date'>
          <p className='title'> Limited Mint Date</p>
          <p className='data'> April 30 - 12PM EST</p>
        </div>
        <div className="header_flex">
          <div className="detail-two-sides">
            <div className="text-block-title">Supply</div>
            <div className="text-block">1000</div>
          </div>
          <div className="detail-two-sides">
            <div className="text-block-title">Price</div>

            <div className="text-block">0.07 ETH</div>
          </div>
          <div className="detail-two-sides">

            <div className="text-block-title">Max</div>

            <div className="text-block">10 per Wallet</div>

          </div>
        </div>
      </div>
      <div className="mint-content">
        <h2 className='sale-title'> LIMITED SALE</h2>
        <div className='mint-price-wrapper'>
          <img className="mint-price-img" src={PriceImage} alt="Price Image" />
          <div className='mint-price-field'>
            <p> Price Per NFT</p>
            <h3> 0.07 ETH Each</h3>
          </div>
        </div>
        <div className='amount-wrapper'>
          <div className='amount-field'>
            <div className='minus-btn' onClick={e => decreaseHandle()}>
              <svg width="12" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z" fill="white"></path>
              </svg>
            </div>
            <h2>1</h2>
            <div className='plus-btn' onClick={e => increaseHandle()}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"></path>
              </svg>
            </div>
          </div>
          <p className='set-max-btn'>SET MAX</p>
        </div>
        <div className='total-wrapper'>
          <p>Total</p>
          <h3>0.07ETH</h3>
        </div>
      </div>
      <div className="mint-bottom">
        <div className='mint-btn'>MINT</div>
        <div className="sold-amount">963/1000</div>
      </div>
    </div>
  )
}

export default Mint