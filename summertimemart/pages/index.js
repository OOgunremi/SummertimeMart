import React from 'react'
import { Cart, Product, Layout, Navbar, Footer, FooterBanner, HeaderBanner } from '../components.js'

const Home = () => {
  return (
    <>
    <HeaderBanner/>
      <div  className='products-heading'>
        <h2>Best Selling Mobiles</h2>
        <p>Showing the top rated Mobiles</p>
      </div>
      <div className='products-container'>
        {['product 1', 'product 2'].map((each) => each)}
      </div>
    <FooterBanner/>
    </>
  )
}

export default Home