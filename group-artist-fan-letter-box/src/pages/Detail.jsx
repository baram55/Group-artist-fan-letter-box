import React from "react";
import styled from "styled-components";
import DetailedCard from "components/DetailedCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledButton = styled.button`
  width: auto;
  height: auto;
  font-size: 30px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 10px;
`;

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const comments = useSelector((state) => state.comments.comments);
  const comment = comments.filter((item) => item.id === params.id);

  return (
    <>
      <box>
        <StyledButton
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </StyledButton>
      </box>
      <box>
        <DetailedCard comment={comment[0]} />
      </box>
    </>
  );
}

export default Detail;
