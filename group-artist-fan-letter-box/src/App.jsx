import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      {/*NOTE - 이렇게 해도 전역 적용이 돼나요?*/}
      <Header />
    </>
  );
}
export default App;
