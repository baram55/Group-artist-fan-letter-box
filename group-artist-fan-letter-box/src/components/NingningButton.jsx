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
`;

function NingningButton(props) {
  return (
    <StyledButton
      onClick={() => {
        props.selectMember("ningning");
      }}
    >
      닝닝
    </StyledButton>
  );
}

export default NingningButton;
