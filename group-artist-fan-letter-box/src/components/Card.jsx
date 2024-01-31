import React from "react";
import styled from "styled-components";
import userImg from "../assets/user.png";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  padding: 5px;
  line-height: 20px;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledUserImg = styled.img`
  width: 50px;
  height: 70%;
  background-color: black;
`;

const StyledContent = styled.p`
  width: auto;
  height: auto;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
`;

function Card(props) {
  const { id, nickName, content, date } = props.comment;
  console.log("카드", props.comment);
  return (
    <StyledCard key={id}>
      <box>
        <StyledUserImg src={userImg} alt="이미지 없음" />
      </box>
      <box>
        <p>{nickName}</p>
        <br />
        <p>{date}</p>
        <br />
        <StyledContent>{content}</StyledContent>
      </box>
    </StyledCard>
  );
}

export default Card;
