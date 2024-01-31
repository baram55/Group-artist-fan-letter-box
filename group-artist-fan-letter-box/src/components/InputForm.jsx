import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: gray;
  border-radius: 10px;
  width: 500px;
  height: auto;
  margin: 10px auto 10px auto;
  padding: 10px;
`;

const StyledInputNickName = styled.input`
  margin: 10px;
  width: 80%;
`;

const StyledContentInfo = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
`;

const StyledTextareaContent = styled.textarea`
  margin: 10px;
  width: 80%;
  height: 50px;
`;

const StyledSelect = styled.select`
  text-align: center;
  margin: 10px;
  width: auto;
`;

const StyledInputSubmit = styled.input`
  width: auto;
  height: auto;
  background-color: black;
  color: white;
  border: none;
  padding: 5px;
  margin: 10px 0px 10px auto;
  float: right;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().substring(2, 4);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  const day = date.getDate();

  const result = `${year}. ${month}. ${day}. `;
  console.log(result);
};

const submitHandler = (event) => {
  event.preventDefault();
  const nickName = event.target.nickName.value;
  const content = event.target.content.value;
  const member = event.target.member.value;
  const id = uuidv4(); // 아이디 메서드 이용
  const date = getFormattedDate();

  if (nickName === "" || content === "") {
    alert("닉네임과 내용은 필수 입력값입니다.");
    return;
  }

  console.log(nickName, content, member, id, date);
};

function InputForm(props) {
  const addComment = props.addComment;
  const nickName = "";
  const content = "";
  const member = "";
  const date = "";
  return (
    <StyledInputForm method="post" onSubmit={submitHandler}>
      <box>
        닉네임 :{" "}
        <StyledInputNickName
          type="text"
          name="nickName"
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength="20"
        />
      </box>
      <StyledContentInfo>
        <p>내용 : </p>
        <StyledTextareaContent
          type="text"
          name="content"
          placeholder="최대 100자까지만 작성할 수 있습니다."
          maxLength="100"
          rows="5"
        />
      </StyledContentInfo>
      <box>
        누구에게 보내실 건가요?
        <StyledSelect name="member">
          <option value="karina" selected>
            카리나
          </option>
          <option value="winter">윈터</option>
          <option value="ningning">닝닝</option>
          <option value="giselle">지젤</option>
        </StyledSelect>
      </box>
      <box>
        <StyledInputSubmit type="submit" value="펜레터 등록" />
      </box>
    </StyledInputForm>
  );
}

export default InputForm;
