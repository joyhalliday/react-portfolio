import React from "react";

function Header(props) {
  return (
    <div>
      <h1>Joy Halliday</h1>
      {props.children}
    </div>
  );
}

export default Header