import React from "react";
import "./index.css";
import history from "../../history";

export default function WrapperHeader({ text, marginLeft, hasSkipBtn }) {
  return(
    <header className="header-with-back-arrow">
      <button onClick={() => history.back()}><img src="/back.png" alt="back arrow"></img></button>
      <h5 style={{marginLeft: marginLeft, whiteSpace: "nowrap"}}><b>{text}</b></h5>
      {hasSkipBtn? 
       <p style={{marginLeft: "auto"}}><b>Skip</b></p>
       : ""
      }
    </header>
  );
}