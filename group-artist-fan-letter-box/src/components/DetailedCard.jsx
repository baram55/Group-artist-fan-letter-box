import React, { useRef, useState } from "react";
import styled from "styled-components";
import userImg from "assets/user.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteComment as deleteReduxComment,
  editComment as editReduxComment,
} from "store/modules/comments";

function DetailedCard({ comment }) {
  const dispatch = useDispatch();
  const deleteComment = (newComment) =>
    dispatch(deleteReduxComment(newComment));
  const editComment = (newComment) => dispatch(editReduxComment(newComment));
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const prevComment = useRef("");

  const editHandler = (event) => {
    {//NOTE - 이렇게 하는게 맞나요? }
    const editButton = event.target.edit;
    const deleteButton = event.target.delete;
    const editDoneButton = event.target.editDone;
    const contentTextArea = event.target.content;

    contentTextArea.disabled = false;
    prevComment.current = contentTextArea.value;
    editButton.style.setProperty("display", "none");
    deleteButton.style.setProperty("display", "none");
    editDoneButton.style.setProperty("display", "none");

    setEditMode(true);
  };

  const deleteHandler = () => {
    const deleteFlag = window.confirm("정말로 삭제하시겠습니까?");
    if (deleteFlag) {
      deleteComment(comment.id);
      navigate("/");
    } else {
      return;
    }
  };

  const editDoneHandler = (event) => {
    let currentContentTextArea = event.target.content.value;
    if (currentContentTextArea === prevComment.current) {
      alert("수정된 부분이 없습니다.");
    } else {
      const changeFlag = window.confirm("이대로 수정하시겠습니까?");

      if (changeFlag) {
        editComment(comment);
        navigate("/");
      } else {
        currentContentTextArea = prevComment.current;
      }
    }
  };

  return (
    <StyledDetailedCardForm>
      <box>
        <StyledUserInfo>
          <StyledUserImg src={userImg} alt="이미지 없음" />
          <StyledNickName name="nickName">{comment.nickName}</StyledNickName>

          <p>{comment.date}</p>
        </StyledUserInfo>
      </box>
      <StyledToMember>TO : {comment.member}</StyledToMember>
      <StyledContent name="content" maxLength={100} disabled>
        {comment.content}
      </StyledContent>
      <box>
        <StyledDelete type="button" name="delete" onClick={deleteHandler}>
          삭제
        </StyledDelete>
        <StyledEdit
          type="button"
          name="edit"
          onClick={(event) => editHandler(event)}
        >
          수정
        </StyledEdit>
        <StyledEditDone type="button" name="editDone" onClick={editDoneHandler}>
          수정완료
        </StyledEditDone>
      </box>
    </StyledDetailedCardForm>
  );
}

const StyledDetailedCardForm = styled.form`
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

const StyledEdit = styled.input`
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

const StyledDelete = styled.input`
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

const StyledEditDone = styled.input`
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

export default DetailedCard;
