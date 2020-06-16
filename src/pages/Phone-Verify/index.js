import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Input from "../../components/Form/Input/index";
import Button from "../../components/Form/Button/index";
import { Link } from "react-router-dom";
import WrapperHeader from "../../components/Wrapper-Header/index";

export default function PhoneVerify() {
  const countries = new Map();
  countries.set("USA", "https://place-hold.it/20x20");
  countries.set("GERMANY", "https://place-hold.it/20x20");
  countries.set("BIH", "https://place-hold.it/20x20");
  countries.set("UGANDA", "https://place-hold.it/20x20");
  countries.set("UKRAINE", "https://place-hold.it/20x20");

  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader text="Phone verification">
        </WrapperHeader>
        <form>
         <Input type="text" toggler="countries" hasSubMenu={true} menuData={countries} labelName="Select your country" placeholder="United States of America" imgUrl="https://place-hold.it/30x30"></Input>
         <Input type="phone" labelName="Enter your phone number" placeholder="202 888 9289" imgUrl=""></Input>
         <Link to="/otp"><Button type="" customClass="custom-btn" text="Verify"></Button></Link>
        </form>
      </div>
    </Wrapper>
  );
}