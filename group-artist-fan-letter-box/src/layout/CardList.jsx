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

function CardList(props) {
  const member = props.member;
  const comments = props.comments.filter((item) => item.member === member);

  return (
    <StyledCardList>
      {comments.map((item) => (
        <Card comment={item} />
      ))}
    </StyledCardList>
  );
}

export default CardList;
