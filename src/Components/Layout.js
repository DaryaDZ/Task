import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./SideBar/Sidebar";
import Menu from "./TreeView/Menu";
import Content from "./Content/Content";
const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Sidebar />
      </div>
      <div className="layout">
        <Menu />
        <Content />
      </div>
    </>
  );
};

export default Layout;
