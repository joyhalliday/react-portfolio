import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>Joy Halliday- Full Stack Developer</h1>
      {props.children}
    </div>
  );
}

export default Header