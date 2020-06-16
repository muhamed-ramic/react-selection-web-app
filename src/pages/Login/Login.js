import React from "react";
import './Login.css';
import Input from "../../components/Form/Input/index";
import Button from "../../components/Form/Button/index";
import Line from "../../components/Form/Line/index";
import Wrapper from "../../components/Wrapper/index";
import { Link } from "react-router-dom";

export default function Login() {
  return(
    <Wrapper>
      <header className="login-wrapper-header">
        <img src="https://place-hold.it/40x40" alt="img"></img>
        <h5><b>Selection Mantra</b></h5>
      </header>
      <div className="login-wrapper-main">
        <header className="login-wrapper-main-header">
          <h5>Log In</h5>
         <button className="login-wrapper-main-reg-btn"><Link to="/reg">Register</Link></button>
        </header>
        <form>
        <Input type="email" labelName="Email" placeholder="johndoe@gmail.com" imgUrl="https://place-hold.it/30x30"></Input>
        <Input type="password" labelName="Password" placeholder="***********" imgUrl="https://place-hold.it/30x30"></Input>
        <h5 className="login-wrapper-forgot-pw">Forgot password?</h5>
        <Button type="" customClass="custom-btn" text="Log in"></Button>
        <Line text="or"></Line>
        <Button type="social" imgSrc="google.png" customClass="custom-btn custom-btn--social" text="Continue with Google"></Button>
        <Button type="social" imgSrc="fb.png" customClass="custom-btn custom-btn--social no-margin" text="Continue with Facebook"></Button>
        </form>
      </div>
    </Wrapper>
  );
}