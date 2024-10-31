import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header backgroundcolor="transparent" />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
