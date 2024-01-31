import React from "react";
import Header from "../layout/Header";
import Body from "../layout/Body";
import InputForm from "../components/InputForm";
import CardList from "../layout/CardList";

function Home() {
  return (
    <>
      <Header />
      <Body>
        <InputForm />
        <CardList />
      </Body>
    </>
  );
}

export default Home;
