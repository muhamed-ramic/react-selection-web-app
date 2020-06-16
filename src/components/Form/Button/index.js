import React from "react";
import "./index.css";

export default function Button({ text, customClass, type, imgSrc, children }) {
  return (
    <>
    <button  className={customClass === ""? "custom-btn": customClass}>
      { type!==""? <img className="social-media-link" src={ imgSrc } alt="password"></img>:"" }
      { text }

      {children}
    </button>
    </>
  )
}