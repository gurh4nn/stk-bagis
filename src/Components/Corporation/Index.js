import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";

function SideNav() {
  const sideNavItem = [
    {
      link: "kurumsal/hakkimizda",
      title: "Hakkımızda",
    },
    {
      link: "kurumsal/tarihce",
      title: "Tarihçe",
    },
    {
      link: "kurumsal/vergi-muafiyeti",
      title: "Vergi Muafiyeti",
    },
    
  ];
  return (
    <div className="side-nav">
      <div className="corporation-nav">
        <div className="corpotate-title">Kurumsal</div>
        <div className="nav-list">
          {sideNavItem.map((nav, index) => (
            <Link to={nav.link} key={index}>
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <Content />
    </div>
  );
}

export default SideNav;
