import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
