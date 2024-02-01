import React from "react";
import styled from "styled-components";
import userImg from "../assets/user.svg";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  margin: 10px;
  padding: 5px;
  line-height: 20px;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledUserImg = styled.img`
  width: 50px;
  height: 70%;
  margin: 10px;
  background-color: black;
`;

const StyledInfoBox = styled.div`
  width: 100%;
  height: auto;
`;

const StyledContent = styled.p`
  width: 80%;
  height: auto;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function Card(props) {
  const { id, nickName, content, date } = props.comment;
  const navigate = useNavigate();

  return (
    <StyledCard
      key={id}
      onClick={() => {
        navigate(`detail/${id}`, {
          state: { comment: props.comment },
        });
      }}
    >
      <box>
        <StyledUserImg src={userImg} alt="이미지 없음" />
      </box>
      <StyledInfoBox>
        <p>{nickName}</p>
        <br />
        <p>{date}</p>
        <br />
        <StyledContent>{content}</StyledContent>
      </StyledInfoBox>
    </StyledCard>
  );
}

export default Card;
