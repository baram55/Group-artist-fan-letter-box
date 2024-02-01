import React, { useRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 25px;
  background-color: ${(props) => {
    return props.member === props.name ? "yellow" : "black";
  }};

  color: ${(props) => {
    return props.member === props.name ? "black" : "white";
  }};
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

function MenuButton(props) {
  const name = props.name;
  const setMember = props.setMember;
  const buttonRef = useRef("");

  return (
    <StyledButton
      onClick={() => {
        setMember(name);
      }}
      ref={buttonRef}
      name={props.name}
      member={props.member}
    >
      {props.name}
    </StyledButton>
  );
}

export default MenuButton;
