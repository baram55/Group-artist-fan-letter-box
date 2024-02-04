import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addComment } from "store/modules/comments";
import members from "data/members";
import getFormattedDate from "util/getFormattedDate";

const submitHandler = (event, plusComment) => {
  event.preventDefault();
  let { nickName, content, member, id, date } = {
    nickName: event.target.nickName.value,
    content: event.target.content.value,
    member: event.target.member.value,
    id: uuidv4(),
    date: getFormattedDate(),
  };

  if (nickName === "" || content === "") {
    alert("닉네임과 내용은 필수 입력값입니다.");
    return;
  }

  plusComment({ nickName, content, member, id, date });
  event.target.reset();
};

function InputForm() {
  const dispatch = useDispatch();
  const plusComment = (newComments) => {
    dispatch(addComment(newComments));
  };

  return (
    <StyledInputForm
      method="post"
      onSubmit={(event) => submitHandler(event, plusComment)}
    >
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
          <option value={members.KARINA} selected>
            {members.KARINA}
          </option>
          <option value={members.WINTER}>{members.WINTER}</option>
          <option value={members.NINGNING}>{members.NINGNING}</option>
          <option value={members.GISELLE}>{members.GISELLE}</option>
        </StyledSelect>
      </box>
      <box>
        <StyledInputSubmit type="submit" value="펜레터 등록" />
      </box>
    </StyledInputForm>
  );
}

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
  height: 70px;
  resize: none;
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
  &:active {
    transform: scale(1.05);
  }
  &:visited {
    transform: scale(1);
  }
`;

export default InputForm;
