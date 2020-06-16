import React from "react";
import "./index.css";

export default function SubscriptionCardInfo({ text }) {
  return(
    <>
    <button className="btn-info">{ text }</button>
    </>
  )
}