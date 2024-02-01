import React from "react";
import styled from "styled-components";
import bannerImage from "assets/banner.jpg";
import Menu from "components/Menu";
import MenuButton from "components/MenuButton";

const Banner = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  text-align: center;
  padding: 100px 0;
  background-image: url(${bannerImage});
`;

const Title = styled.h1`
  font-size: 50px;
`;

function Header() {
  return (
    <>
      <Banner>
        <Title>에스파 팬레터 콜렉션</Title>
        <Menu>
          <MenuButton name="카리나" />
          <MenuButton name="윈터" />
          <MenuButton name="닝닝" />
          <MenuButton name="지젤" />
        </Menu>
      </Banner>
    </>
  );
}

export default Header;
