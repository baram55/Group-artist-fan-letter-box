import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import commentJson from "../fakeData.json";

function Router() {
  const initialData = commentJson;
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState(initialData);

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
