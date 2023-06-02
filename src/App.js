import React from "react";
import Layout from "./Components/Layout";
// import Menu from "./Components/TreeView/Menu";
import Content from "./Components/Content/Content";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/content/:id" element={<Content />}/>
        </Route>
          

            {/* <Route path="session1" element={<Content/>}/> */}
      </Routes>
      </>
  );
}

export default App;
