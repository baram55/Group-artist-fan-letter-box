import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/banner.jpg";
import Menu from "../components/Menu";
import KarinaButton from "../components/KarinaButton";
import WinterButton from "../components/WinterButton";
import NingningButton from "../components/NingningButton";
import GiselleButton from "../components/GiselleButton";

const Banner = styled.div`
  // img로 변경해보기
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
          <KarinaButton />
          <WinterButton />
          <NingningButton />
          <GiselleButton />
        </Menu>
      </Banner>
    </>
  );
}

export default Header;
