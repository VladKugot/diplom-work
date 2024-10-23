import React from 'react';
import './Footer.scss';
import logo from '../../icon/footer-logo.svg';
import { NavLink } from 'react-router-dom';
import arrowTop from '../../icon/arrow-top.svg'

export const Footer = () => {

  return (
    <div className='footer'>
      <img className='footer__img' src={logo} alt="logo" />
      <div className="footer__content">
        <ul className='footer__nav'>
          <li className='nav__obj'>
            <NavLink className='nav__link' to={`/`}>
              Github
            </NavLink>
          </li>
          <li className='nav__obj'>
            <NavLink className='nav__link' to={`/`}>
              Contacts
            </NavLink>
          </li>
          <li className='nav__obj'>
            <NavLink className='nav__link' to={`/cart`}>
              Rights
            </NavLink>
          </li>
        </ul>
        <div className="back-top">
          <p className="back-top__title">Back to top</p>
          <img className='back-top__img' src={arrowTop} alt="" />
        </div>
      </div>
    </div>
  );
}