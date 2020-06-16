import React from "react";
import "./index.css";

export default function Line({ text }) {
  return (
    <>
    <div className="line">
     <div className="line-inner">{text}</div>
    </div>
    </>
  );
}