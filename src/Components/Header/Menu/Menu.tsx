import React from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.scss'

export const Menu = () => {

  return (
    <div className="menu swithes__block">
      <NavLink className='button button--catalog' to={`/catalog`}></NavLink>
      <NavLink className='button button--recipes' to={`/recipes`}></NavLink>
      <NavLink className='button button--search' to={`/search`}></NavLink>
      <NavLink className='button button--cart' to={`/cart`}></NavLink>
      <NavLink className='button button--user' to={`/user`}></NavLink>
    </div>
  )
} 