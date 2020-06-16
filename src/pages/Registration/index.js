import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Input from "../../components/Form/Input/index";
import Button from "../../components/Form/Button/index";
import Line from "../../components/Form/Line/index";
import WrapperHeader from "../../components/Wrapper-Header/index";
import { Link } from "react-router-dom";
import "./index.css";

export default function Registration() {
  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader text="Create New Account">
        </WrapperHeader>
        <form>
         <Input type="text" labelName="Your Name" placeholder="John Doe" imgUrl="https://place-hold.it/30x30"></Input>
         <Input type="email" labelName="Email" placeholder="johndoe@gmail.com" imgUrl="https://place-hold.it/30x30"></Input>
         <Input type="password" labelName="Password" placeholder="*********" imgUrl="https://place-hold.it/30x30"></Input>
         <Link to="/ver">
          <Button type="" customClass="custom-btn" text="Sign up">
          </Button>
         </Link>
         <Line text="or Sign up with"></Line>
         <Button type="social" imgSrc="google.png" customClass="custom-btn custom-btn--social" text="Continue with Google"></Button>
         <Button type="social" imgSrc="fb.png" customClass="custom-btn custom-btn--social no-margin" text="Continue with Facebook"></Button>
        </form>
      </div>
    </Wrapper>
  );
}