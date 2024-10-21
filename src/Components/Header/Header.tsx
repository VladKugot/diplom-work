import './Header.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import logo from '../../icon/logo.png';
import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div
      className="header"
      onMouseLeave={handleMouseLeave}
    >
      <div className="header__nav">
        <NavLink className='nav__link' to={`/`}>
          <img className='header__logo' src={logo} alt="" />
        </NavLink>
        {windowWidth > 639 && (
          <ul className='nav'>
            <li className='nav__obj'>
              <NavLink className='nav__link' to={`/`}>
                Catalog
              </NavLink>
            </li>
            <li className='nav__obj'>
              <NavLink className='nav__link' to={`/`}>
                Recipes
              </NavLink>
            </li>
            <li className='nav__obj'>
              <NavLink className='nav__link' to={`/cart`}>
                Cart
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="swithes__main">
        {windowWidth < 639 && (
          <div className="swithes__block">
            <button
              className={cn('button', {
                'button--menu': !isMenuVisible,
                'button--menu-active': isMenuVisible,
              })}
              onMouseEnter={handleMouseEnter}
            >
              {isMenuVisible && <Menu />}
            </button>
          </div>
        )}
        <div className="swithes__block">
          <button className='button button--language'></button>
          <button className='button button--them'></button>
        </div>
        {windowWidth > 639 && (
          <div className="swithes__block">
            <NavLink className='button button--search' to={`/search`}></NavLink>
            <NavLink className='button button--cart' to={`/cart`}></NavLink>
            <NavLink className='button button--user' to={`/user`}></NavLink>
          </div>
        )}
      </div>
    </div>
  );
}