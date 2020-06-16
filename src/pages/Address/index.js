import React from "react";
import Wrapper from "../../components/Wrapper/index";
import Button from "../../components/Form/Button/index";
import "./index.css";
import WrapperHeader from "../../components/Wrapper-Header/index";
import { Link } from  "react-router-dom";

export default function Address() {
  return(
    <Wrapper>
      <div className="login-wrapper-main">
        <WrapperHeader marginLeft="65px" text="Address">
        </WrapperHeader>
        <form>
          <img className="map" src="https://www.placehold.it/260x210" alt="map"></img>
         <Link to="/profile-setup"><Button type="" customClass="custom-btn" text="Done"></Button></Link>
        </form>
      </div>
    </Wrapper>
  );
}