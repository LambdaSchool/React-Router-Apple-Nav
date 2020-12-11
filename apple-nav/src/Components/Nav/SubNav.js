import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: black;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const SubNav = props => {
  return (
    <DivWrapper>
      <h1>This is the SubNav Component</h1>
    </DivWrapper>
  );
};

// SubNav.propTypes = {
//   propertyName: PropTypes.string
// }

export default SubNav;
