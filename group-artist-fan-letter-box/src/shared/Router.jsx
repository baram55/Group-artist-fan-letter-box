import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function Router() {
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState([
    {
      id: "0",
      nickName: "닉네임0",
      date: "날짜0",
      content: "내용0",
      member: "카리나",
    },
    {
      id: "1",
      nickName: "닉네임1",
      date: "날짜1",
      content: "내용1",
      member: "윈터",
    },
    {
      id: "2",
      nickName: "닉네임2",
      date: "날짜2",
      content: "내용2",
      member: "닝닝",
    },
    {
      id: "3",
      nickName: "닉네임3",
      date: "날짜3",
      content: "내용3",
      member: "지젤",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              member={member}
              setMember={setMember}
              comments={comments}
              setComments={setComments}
            />
          }
        />
        <Route
          path="detail/:id"
          element={<Detail setComments={setComments} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
