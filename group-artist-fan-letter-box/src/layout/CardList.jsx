import React, { useContext } from "react";
import styled from "styled-components";
import Card from "components/Card";
import { MemberContext } from "context/MemberContext";
import { CommentsContext } from "context/CommentsContext";

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

const StyledNoCard = styled.div`
  background-color: black;
  border-radius: 10px;
  line-height: 20px;
  color: white;
  width: 490px;
  height: auto;
  margin: 10px auto 10px auto;
  padding: 10px;
`;

function CardList() {
  const member = useContext(MemberContext).member;
  const comments = useContext(CommentsContext).comments.filter(
    (item) => item.member === member
  );

  return (
    <StyledCardList>
      {comments.length > 0 ? (
        comments.map((item) => {
          return <Card comment={item} />;
        })
      ) : (
        <StyledNoCard>
          {member}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
          되주세요!
        </StyledNoCard>
      )}
    </StyledCardList>
  );
}

export default CardList;
