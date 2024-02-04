import React from "react";
import styled from "styled-components";

function Menu({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: gray;
  border-radius: 30px;
`;

export default Menu;
