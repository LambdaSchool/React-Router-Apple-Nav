import React from "react";
import styled from "styled-components";

const SubNavContainer = styled.div`
  background: #f6f6f6;
  padding: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & > img {
    padding: 0 15px;
    height: 55px;
  }

  & > p {
    font-size: 10px;
  }
`;

export default function SubNav(props) {
  console.log("subnav props", props);
  const itemName = props.match.params.name;

  return (
    <SubNavContainer>
      <ItemContainer>
        {props.names.length > 0 &&
          props.names
            .find(name => name.name === itemName)
            .subLinks.map((link, i) => {
              return (
                <ProductContainer key={i}>
                  <img src={link.img} alt={link.name} />
                  <p>{link.name}</p>
                </ProductContainer>
              );
            })}
      </ItemContainer>
    </SubNavContainer>
  );
}
