import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Label from "../../components/Form/Label/index";
import Button from "../../components/Form/Button/index";
import "./index.css";
import { Link } from "react-router-dom";
import WrapperHeader from "../../components/Wrapper-Header/index";

export default function ProfileSetupPic() {
  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader hasSkipBtn={true} marginLeft="45px" text="Profile Setup">
        </WrapperHeader>
        <form>
          <Label style={{textAlign: "center", fontWeight: "700"}} name={"Choose Profile Picture"}></Label>
          <div className="drag-n-drop-btn">+</div>
          <Button type="" customClass="custom-btn custom-btn--gray" text="Choose from files"></Button>
         <Link to="/sub"><Button type="" customClass="custom-btn" text="Done"></Button></Link>
        </form>
      </div>
    </Wrapper>
  );
}