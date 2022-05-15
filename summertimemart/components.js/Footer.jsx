import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 KoboClicks All rights reserved</p>
      <p className='icons'>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
        <AiFillInstagram/>
        <a href='www.google.com' target='_blank'><AiFillLinkedin /></a>
      </p>
    </div>
  )
}
export default Footer