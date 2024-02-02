import React, { useRef } from "react";
import styled from "styled-components";
import userImg from "assets/user.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "store/modules/comments";

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
  font-size: 30px;
  border-radius: 10px;
  padding: 20px;
  height: 300px;
  width: auto;
  border: none;
  resize: none;
`;

const StyledEdit = styled.button`
  display: inline;
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 10px;
  float: right;
  padding: 5px;
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

const StyledDelete = styled.button`
  display: inline;
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 10px;
  float: right;
  padding: 5px;
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

const StyledEditDone = styled.button`
  display: none;
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 10px;
  float: right;
  padding: 5px;
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

function DetailedCard(props) {
  const dispatch = useDispatch();
  const editComments = (newComments) => {
    dispatch(setComments(newComments));
  };
  const prevComments = useSelector((state) => state.comments.comments);
  const { id, date, nickName, member, content } = props.comment;
  const contentRef = useRef("");
  const prevContentRef = useRef("");
  const deleteButtonRef = useRef("");
  const editButtonRef = useRef("");
  const editDoneButtonRef = useRef("");
  const navigate = useNavigate("");

  const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substring(2, 4);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour =
      date.getHours() > 12
        ? (date.getHours() - 12).toString().padStart(2, "0")
        : date.getHours().toString().padStart(2, "0");
    const amPm = date.getHours() < 12 ? "오전" : "오후";
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");

    return `${year}. ${month}. ${day}. ${amPm} ${hour}:${minute}:${second}`;
  };

  const editHandler = () => {
    contentRef.current.disabled = false;
    prevContentRef.current = contentRef.current.value;
    editButtonRef.current.style.setProperty("display", "none");
    deleteButtonRef.current.style.setProperty("display", "none");
    editDoneButtonRef.current.style.setProperty("display", "inline");
  };

  const deleteHandler = () => {
    const deleteFlag = window.confirm("정말로 삭제하시겠습니까?");
    if (deleteFlag) {
      editComments(prevComments.filter((item) => item.id !== id));
      navigate("/");
    } else {
      return;
    }
  };

  const editDoneHandler = () => {
    if (prevContentRef.current === contentRef.current.value) {
      alert("수정된 부분이 없습니다.");
    } else {
      const changeFlag = window.confirm("이대로 수정하시겠습니까?");

      if (changeFlag) {
        editComments(
          prevComments.map((item) => {
            if (item.id === id) {
              item.content = contentRef.current.value;
              item.date = getFormattedDate();
            }
            return item;
          })
        );
        navigate("/");
      } else {
        contentRef.current = prevContentRef.current;
      }
    }
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
        <StyledDelete onClick={deleteHandler} ref={deleteButtonRef}>
          삭제
        </StyledDelete>
        <StyledEdit onClick={editHandler} ref={editButtonRef}>
          수정
        </StyledEdit>
        <StyledEditDone onClick={editDoneHandler} ref={editDoneButtonRef}>
          수정완료
        </StyledEditDone>
      </box>
    </StyledDetailedCard>
  );
}

export default DetailedCard;
