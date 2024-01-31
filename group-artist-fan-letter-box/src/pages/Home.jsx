import React, { useState } from "react";
import Header from "../layout/Header";
import Body from "../layout/Body";
import InputForm from "../components/InputForm";
import CardList from "../layout/CardList";

function Home() {
  const [member, setMember] = useState("karina");
  const [comments, setComments] = useState([
    {
      id: "0",
      nickName: "닉네임0",
      date: "날짜0",
      content: "내용0",
      member: "karina",
    },
    {
      id: "1",
      nickName: "닉네임1",
      date: "날짜1",
      content: "내용1",
      member: "winter",
    },
    {
      id: "2",
      nickName: "닉네임2",
      date: "날짜2",
      content: "내용2",
      member: "ningning",
    },
    {
      id: "3",
      nickName: "닉네임3",
      date: "날짜3",
      content: "내용3",
      member: "giselle",
    },
  ]);

  return (
    <>
      <Header selectMember={setMember} />
      <Body>
        <InputForm addComment={setComments} />
        <CardList member={member} comments={comments} />
      </Body>
    </>
  );
}

export default Home;
