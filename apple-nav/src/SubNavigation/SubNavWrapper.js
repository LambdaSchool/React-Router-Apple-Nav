import React from 'react';
import SubNav from './SubNav';

const SubNavWrapper = props => {
  return (
    <div className="subnav-container">
      {props.subnav.map(subnav => <SubNav subnav={subnav} />)}
    </div>
  );
}

export default SubNavWrapper;
