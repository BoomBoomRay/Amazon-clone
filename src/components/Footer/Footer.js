import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='back_to_top'></div>
      <div className='info__container'>
        <div className='col-1'>
          <ul className='col-1-list'>
            <li>Get to Know us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Amazon Tours</li>
            <li>About Amazon</li>
          </ul>
        </div>
        <div className='col-2'>
          <ul className='col-2-list'>
            <li>Make Money with Us</li>
            <li>Sell Products on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Sell Apps on Amazon</li>
          </ul>
        </div>
        <div className='col-3'>
          <ul className='col-3-list'>
            <li>Let Us Help you</li>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
          </ul>
        </div>
        <div className='col-3'>
          <ul className='col-3-list'>
            <li>Amazon Payment Products</li>
            <li>Amazon Business Card</li>
            <li>Reload your Balance</li>
            <li>Your Orders</li>
          </ul>
        </div>
      </div>
      <div className='amazon__logo'>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='#'
          />
        </Link>{' '}
      </div>
    </div>
  );
}
