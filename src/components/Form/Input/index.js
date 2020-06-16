import React, { useRef, useState } from "react";
import "./index.css";
import Label from "../Label/index";

export default function Input({ type, labelName, labelStyle, placeholder, imgUrl, menuData, hasSubMenu, toggler }) {
  const submenu = useRef();
  const [placeholderState, setPlaceHolder] = useState(placeholder);

  const showMenu = (e) => {
    const current = submenu.current;
    if (toggler === "exam") {
      setPlaceHolder(menuData[0]);
    }
    if (current) {
      if (current.classList.contains('hidden')) {
        current.classList.remove('hidden');
      } 
    }
  };

  const hideMenu = (e) => {
    const current = submenu.current;
    if (toggler === "exam") {
       setPlaceHolder("Select");
    }
    if (current) {
      if (!current.classList.contains('hidden')) {
        current.classList.add('hidden');
      }
    }
  };

  return (
    <>
    <div className="submenu-wrapper" onMouseLeave={hideMenu}>
    <Label style={labelStyle} name={labelName}></Label>
    <div className="input-wrap" onMouseOver={showMenu}>
      {
       type==="phone"?
      <div className="phone-prefix">+1</div>
      :""
      }
      {
        type !== "select" && type !== "phone"?
        <img src={imgUrl} alt="img"></img>
        :""
      }
      <input className="custom" type={type} placeholder={placeholderState}></input>
      { type === "password" ?
        <img src="/pw-mask.png" className="pw-mask" alt="pasword-mask-img"></img>
        :""
      }
    </div>
    {
        hasSubMenu && toggler === "countries" ?
        <div ref={submenu} className="submenu hidden">
          <div className="input-wrap">
            <input className="custom"></input>
          </div>
          <ul className="country-list">
            {
              Array.from(menuData.keys()).map((key) => {
                return <li key={key}><img className="margin-r-10" src={menuData.get(key)} alt="country"></img>{key}</li>
              })
            }
          </ul>
        </div>
        :""
      }
       {
        hasSubMenu && toggler === "exam" ?
        <div ref={submenu} className="submenu hidden">
          <ul className={toggler+ "-list"}>
            {
              menuData.map((value) => {
                return <li key={value}>{value}</li>
              })
            }
          </ul>
        </div>
        :""
      }
      </div>
    </>
  );
}