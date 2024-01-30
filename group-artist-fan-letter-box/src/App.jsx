import React from "react";
import GlobalStyle from "./components/GlobalStyle";
//import Header from "./layout/Header";
import styled from "styled-components";

const Header = styled.h1`
  height: 300px;
  text-align: center;
  background-image: url("https://i.namu.wiki/i/k9x7Swbpc7z_Ch0OaYgpJYtThEkAwJ29kDImM1zEggw3xy-bsA014SDmnvW8QVsgXtIv3dqlRZXhmtK6-89SkpfLBDo1CD10teVBGfl4YyeQ_zJxd5ckKU46IjOgHUzfM0JhKw2lnmjdkLLRptw_EA.webp");
`; // 로컬 경로 작동 안함
// css in js 쓰면 컴포넌트 분리 어떡해 함?

const Menu = styled.div`
  display: flex;
  margin: auto;
  height: 100px;
  width: 500px;
  border-radius: 10px;
  position: 100px;
  background-color: gray;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>에스파 컬렉션</Header>
      <Menu />
    </>
  );
}
export default App;
