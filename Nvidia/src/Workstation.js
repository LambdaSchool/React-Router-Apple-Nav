import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Workstation = () => {
    return (
        <div className='splashPage'>
        <NavLink className='home' to="/">Home  </NavLink>
        <p>Workstation GPU's </p>
        </div>
    )
}

