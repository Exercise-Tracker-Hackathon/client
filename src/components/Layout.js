import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children, setIsLoggedIn, isLoggedIn }) => {
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
