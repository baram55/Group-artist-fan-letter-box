import React from "react";
import styled from "styled-components";

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

function InputForm() {
  return (
    <StyledInputForm method="post">
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
        <StyledSelect>
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
