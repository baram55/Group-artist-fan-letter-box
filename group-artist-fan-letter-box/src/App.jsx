import React, { useState } from "react";
import GlobalStyle from "components/GlobalStyle";
import Router from "shared/Router";
import commentJson from "fakeData.json";
import { MemberContext } from "context/MemberContext";
import { CommentsContext } from "context/CommentsContext";

function App() {
  const initialData = commentJson;
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState(initialData);

  return (
    <>
      <MemberContext.Provider value={{ member, setMember }}>
        <CommentsContext.Provider value={{ comments, setComments }}>
          <GlobalStyle />
          <Router />
        </CommentsContext.Provider>
      </MemberContext.Provider>
    </>
  );
}
export default App;
