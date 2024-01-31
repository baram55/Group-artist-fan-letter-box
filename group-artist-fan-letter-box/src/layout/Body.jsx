import React from "react";
import styled from "styled-components";

const StyledBody = styled.section`
  display: flex;
  direction: column;
`;

function Body({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

export default Body;
