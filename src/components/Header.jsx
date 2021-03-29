import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        <span style={{color: "red"}}>M</span><span style={{color: "blue"}}>i</span><span style={{color: "yellow"}}>n</span><span style={{color: "blue"}}>d</span><span style={{color: ""}}>e</span><span style={{color: "red"}}>r</span>
      </h1>
    </header>
  );
}

export default Header;
