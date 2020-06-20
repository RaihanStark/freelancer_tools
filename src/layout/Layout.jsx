import React from "react";
import Header from "../UI/Header/Header";
const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  );
};
export default Layout;
