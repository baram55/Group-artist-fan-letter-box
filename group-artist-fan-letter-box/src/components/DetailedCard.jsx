import React, { useRef } from "react";
import styled from "styled-components";
import userImg from "../assets/user.svg";

const StyledDetailedCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  border-radius: 10px;
  width: 800px;
  height: auto;
  margin: 10px auto 10px auto;
  padding: 10px;
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const StyledUserImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const StyledNickName = styled.p`
  color: white;
  font-size: 30px;
`;

const StyledToMember = styled.p`
  color: white;
  font-size: 20px;
  margin: 10px;
`;

const StyledContent = styled.textarea`
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  padding: 20px;
  height: 300px;
  width: auto;
  border: none;
  resize: none;
`;

const StyledEdit = styled.button`
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 10px;
  float: right;
  padding: 5px;
`;
const StyledDelete = styled.button`
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 10px;
  float: right;
  padding: 5px;
`;

function DetailedCard(props) {
  const { date, nickName, member, content } = props.comment;
  const contentRef = useRef("");

  const editHandler = () => {
    contentRef.current.disabled = false;
  };

  return (
    <StyledDetailedCard>
      <box>
        <StyledUserInfo>
          <StyledUserImg src={userImg} alt="이미지 없음" />
          <StyledNickName>{nickName}</StyledNickName>

          <p>{date}</p>
        </StyledUserInfo>
      </box>
      <StyledToMember>TO : {member}</StyledToMember>
      <StyledContent maxLength={100} disabled ref={contentRef}>
        {content}
      </StyledContent>
      <box>
        <StyledDelete>삭제</StyledDelete>
        <StyledEdit onClick={editHandler}>수정</StyledEdit>
      </box>
    </StyledDetailedCard>
  );
}

export default DetailedCard;
