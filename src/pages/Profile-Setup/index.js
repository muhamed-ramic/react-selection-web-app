import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Input from "../../components/Form/Input/index";
import Button from "../../components/Form/Button/index";
import { Link } from "react-router-dom";
import WrapperHeader from "../../components/Wrapper-Header/index";

export default function ProfileSetup() {
  const exams = ["UPSC", "SSC", "Other States"];

  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader marginLeft="45px" text="Profile Setup">
        </WrapperHeader>
        <form>
         <Input type="select" toggler="exam" hasSubMenu={true} menuData={exams} labelName="Choose the Exam Type" labelStyle={{textAlign: "center", fontWeight: "700"}} placeholder="Select" imgUrl=""></Input>
         <Input type="select" labelName="Your Education" labelStyle={{textAlign: "center", fontWeight: "700"}} placeholder="Bachelor of Computer Applications" imgUrl=""></Input>
         <Link to="/profile-setup-pic"><Button type="" customClass="custom-btn" text="Done"></Button></Link>
        </form>
      </div>
    </Wrapper>
  );
}