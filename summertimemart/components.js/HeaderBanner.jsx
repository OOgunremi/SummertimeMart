import React from 'react';
import Link from 'next/link';

const HeaderBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>HELLO SUMMERTIME MART</p>
        <h3>BE BOLD</h3>
        <img src='' alt='Mobilephones' className='hero-banner-image'/>
      </div>
      <div>
        <Link href="/product/:id">
          <button type='button'>Button</button>
        </Link>
      </div>
      <div className='desc'>
        <h5>Description</h5>
        <p>Description</p>
      </div>
    </div>
  )
}

export default HeaderBanner