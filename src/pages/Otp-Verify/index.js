import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Button from "../../components/Form/Button/index";
import "./index.css";
import { Link } from "react-router-dom";
import WrapperHeader from "../../components/Wrapper-Header/index";

const textCenter = {
  textAlign: "center"
};

export default function OTPVerify() {
  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader marginLeft="55px" text="Verify OTP">
        </WrapperHeader>
        <form>
          <div style={textCenter}>
            <span style={{ fontSize: "12px", fontWeight: "700"}}>Please enter the otp sent to your number</span>
            <p style={{fontSize: "10px", color: "lightskyblue"}}>+1 202 888 9289</p>
          </div>
          <div className="otp-code-wrapper">
            <div className="otp-code-line">
              5
            </div>
            <div className="otp-code-line">
              4
            </div>
            <div className="otp-code-line">
              2
            </div>
            <div className="otp-code-line">
              5
            </div>
            <p className="otp-code-resend">Resend Code?</p>
          </div>
         <Link to="/address"><Button type="" customClass="custom-btn" text="Verify"></Button></Link>
        </form>
      </div>
    </Wrapper>
  );
}