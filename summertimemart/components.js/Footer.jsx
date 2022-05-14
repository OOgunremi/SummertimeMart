import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 KoboClicks All rights reserved</p>
      <p className='icons'>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
        <AiFillInstagram/>
      </p>
    </div>
  )
}
export default Footer