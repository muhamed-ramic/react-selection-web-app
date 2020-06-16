import React from "react";
import "./index.css";

export default function Header() {
  const links = [{
    name: "Home",
    href: "/home",
    class: "current"
  },
  {
    name: "Orders",
    href: "/orders"
  },
  {
    name: "Leaderboard",
    href: "/board"
  },
  {
    name: "Offers",
    href: "/offers"
  }
];
  return(
    <>
    <header className="header-main">
      <div className="row">
        <div className="header-logo"><img alt="header-logo" src="/logo.png"></img></div>
        <nav>
        {
          links.map((item) => {
            return <a className={item.class} href={item.href}>{item.name}</a>
          })
        }
        </nav>
        <div className="header-info">
          <img className="header-info-bell-btn" src="https://www.placehold.it/20x20" alt="bell-button"></img>
          <img src="https://www.placehold.it/20x20" alt="user-avatar-button"></img>
          <span style={{marginLeft: "10px"}}>You</span>
        </div>
      </div>
    </header>
    </>
  )
}