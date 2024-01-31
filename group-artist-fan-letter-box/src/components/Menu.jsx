import React from "react";
import styled from "styled-components";

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

function Menu({ children }) {
  //매개변수에 children 헷갈림
  return <Div>{children}</Div>;
}
export default Menu;
