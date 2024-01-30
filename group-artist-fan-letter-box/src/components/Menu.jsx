import React from "react";
import styled from "styled-components";

const MenuStyle = styled.div`
  width: 500px;
  height: 50px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: gray;
  border-radius: 30px;
`;

function Menu() {
  return (
    <MenuStyle>
      <button>Menu</button>
      <button>Menu</button>
      <button>Menu</button>
      <button>Menu</button>
    </MenuStyle>
  );
}

export default Menu;
