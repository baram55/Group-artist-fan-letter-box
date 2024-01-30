import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";

const Banner = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  text-align: center;
  padding: 100px 0;
  background-image: url("https://i.namu.wiki/i/k9x7Swbpc7z_Ch0OaYgpJYtThEkAwJ29kDImM1zEggw3xy-bsA014SDmnvW8QVsgXtIv3dqlRZXhmtK6-89SkpfLBDo1CD10teVBGfl4YyeQ_zJxd5ckKU46IjOgHUzfM0JhKw2lnmjdkLLRptw_EA.webp");
`; //NOTE - 경로문제 인가요? 인터넷 URL은 작동 잘 됩니다.

const Title = styled.h1`
  font-size: 50px;
`;

function Header() {
  return (
    <>
      <Banner>
        <Title>에스파 팬레터 콜렉션</Title>
        <Menu />
      </Banner>
    </>
  );
}

export default Header;
