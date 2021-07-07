import React from 'react';

const SubNav = props => {
  return(
    <div className="subnav">
    <img src={props.subnav.img} alt={props.subnav.subname}/>
    <span className="subnav-text">{props.subnav.subname}</span>
    <span className="subnav-new">{props.subnav.new ? `New` : null}</span>
    </div>
  );
}

export default SubNav;
