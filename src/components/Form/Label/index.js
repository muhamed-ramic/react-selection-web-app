import React from "react";
import "./index.css";

export default function Label({ name, style }) {
  return (
    <label style={style}>{name}</label>
  );
}