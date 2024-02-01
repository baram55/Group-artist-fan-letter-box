import React from "react";
import styled from "styled-components";
import DetailedCard from "components/DetailedCard";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const comment = location.state.comment;

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
        <DetailedCard comment={comment} />
      </box>
    </>
  );
}

export default Detail;
