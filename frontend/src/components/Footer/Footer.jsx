/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="Logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo qui nemo aliquid ratione tempore veniam ex, impedit eaque quo odio itaque reprehenderit fugiat culpa cumque iure nam. Perferendis laborum id necessitatibus doloribus inventore iusto tempora consequatur et labore facere.Lorem ipsum dolor sit amet consectetur</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+45 12-34-56-78</li>
                <li>contact@sejspizza.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Sejspizza.one - All Right Reserved.</p>
    </div>
  )
}

export default Footer
