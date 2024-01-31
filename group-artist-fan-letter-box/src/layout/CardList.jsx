import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 10px;
  width: 500px;
  height: auto;
  margin: 10px auto 10px auto;
  padding: 10px;
`;

function CardList() {
  return (
    <StyledCardList>
      <Card />
    </StyledCardList>
  );
}

export default CardList;
