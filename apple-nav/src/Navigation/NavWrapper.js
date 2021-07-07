import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const NavWrapper = props => {
  return (
    <header>
      <NavLink to="/">
        <img src="/images/logo/image_large.svg" />
      </NavLink>
      {props.navData.map(nav => (
        <NavLink to={`/${nav.toLowerCase()}`}>
          <Nav nav={nav} selectNav={props.selectNav} />
        </NavLink>
      ))}
      <NavLink to="/search">
        <img src="/images/search/image_large.svg" />
      </NavLink>
      <NavLink to="/shop">
        <img src="/images/bag/image_large.svg" />
      </NavLink>
    </header>
  );
}

export default NavWrapper;
