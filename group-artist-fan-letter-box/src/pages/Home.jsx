import React from "react";
import Header from "../layout/Header";
import Body from "../layout/Body";
import InputForm from "../components/InputForm";
import CardList from "../layout/CardList";

function Home(props) {
  return (
    <>
      <Header selectMember={props.setMember} />
      <Body>
        <InputForm addComment={props.setComments} />
        <CardList
          member={props.member}
          comments={props.comments}
          setComments={props.setComments}
        />
      </Body>
    </>
  );
}

export default Home;
