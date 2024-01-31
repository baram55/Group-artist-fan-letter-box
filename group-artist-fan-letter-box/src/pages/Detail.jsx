import React from "react";
import styled from "styled-components";
import DetailedCard from "../components/DetailedCard";

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
  return (
    <>
      <box>
        <StyledButton>홈으로</StyledButton>
      </box>
      <box>
        <DetailedCard />
      </box>
    </>
  );
}

export default Detail;
