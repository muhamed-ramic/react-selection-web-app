import React from "react";
import "./index.css";
import SubscriptionCardInfo from "../SubscriptionCardInfo/index";

export default function SubscriptionCard({ packageType, price}) {
  return (
    <>
    <div className="card">
      <div className="card-info">
        <input name="package-input" type="radio" id={"package-input" + packageType} className="input-radio"></input>
        <label htmlFor={"package-input" + packageType}></label>
        <div className="row">
           <span className="card-info-package">{packageType}</span>
          <SubscriptionCardInfo text={price}></SubscriptionCardInfo>
        </div>
        <p className="card-info-detail">Unlimited quiz</p>
        <p className="card-info-detail">Courses included UPSC | Other state Exams</p>
      </div>
    </div>
    </>
  )
}