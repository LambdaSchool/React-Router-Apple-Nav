import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return(
       <Link to={`/nav/${props.nav.subnav}`}>
       <button className="nav-btn">{`${props.nav.subnav}`}</button>
       </Link>
    )
}

export default Nav;