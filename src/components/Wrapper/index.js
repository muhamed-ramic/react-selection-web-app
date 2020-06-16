import React from "react";
import "./index.css";

const Wrapper = ({children, style}) => (
  <div style={style} className="login-wrapper">
    {children}
  </div>
);

export default Wrapper;