import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./layout/Header";
import Body from "./layout/Body";
import InputForm from "./components/InputForm";
import CardList from "./layout/CardList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>
        <InputForm />
        <CardList />
      </Body>
    </>
  );
}
export default App;
