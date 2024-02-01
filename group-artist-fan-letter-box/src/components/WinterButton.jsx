import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 10px;
  &:hover {
    background-color: yellow;
    color: black;
  }
  &:active {
    transform: scale(1.05);
  }
  &:visited {
    transform: scale(1);
  }
`;

function WinterButton(props) {
  return (
    <StyledButton
      onClick={() => {
        props.selectMember("winter");
      }}
    >
      윈터
    </StyledButton>
  );
}

export default WinterButton;
