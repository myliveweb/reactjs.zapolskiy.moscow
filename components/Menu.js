import React, { useState, useEffect } from 'react';
import topMenu from '../util/menuList';
import scrollHandlerMenu from '../util/scroll';
import MenuItem from './MenuItem';

export default function TopMenu() {

useEffect(() => {
  document.addEventListener('scroll', scrollHandlerMenu);
  scrollHandlerMenu()
  return () => {
    document.removeEventListener('scroll', scrollHandlerMenu);
  };
}, []);

  return (
    <ul className="nav navbar-nav navbar-right" style={{ position: 'relative', top: '1px'}}>
      {topMenu.map((item) => <MenuItem key={item.id} item={item} />)}
    </ul>
  )
}