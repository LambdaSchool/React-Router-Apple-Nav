import React from 'react';

const Nav = props => {
  return (
    <div className="nav" onClick={() => props.selectNav(props.nav)}>
      {props.nav}
    </div>
  );
}

export default Nav;
