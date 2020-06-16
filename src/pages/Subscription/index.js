import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Button from "../../components/Form/Button/index";
import "./index.css";
import { Link } from "react-router-dom";
import WrapperHeader from "../../components/Wrapper-Header/index";
import SubscriptionCard from "../../components/SubscriptionCards/index";

export default function Subscription() {
  const data = [{
    package: '3 month package',
    price: '$98.99'
  },
  {
    package: '6 month package',
    price: '$54.99'
  },
  {
    package: '12 month package',
    price: '$19.99/M'
  },
  {
    package: '2 years package',
    price: '$19.99/M'
  }
]
  return(
    <Wrapper style={{maxWidth: "450px"}}>
      <div className="login-wrapper-main">
        <WrapperHeader hasSkipBtn={true} marginLeft="auto" text="Get Subscription">
        </WrapperHeader>
        <form>
         {
           data.map((item) => {
            return <SubscriptionCard key={item.package} packageType={item.package} price={item.price}></SubscriptionCard>
           })
         }
         <Link to="/home"><Button type="" customClass="custom-btn custom-btn--yellow" text="Continue"></Button></Link>
         <p style={{ color: "#cacaca"}}>Already made a purchase? <span style={{  color: "lightBlue"}}>Restore it</span></p>
        </form>
      </div>
    </Wrapper>
  );
}