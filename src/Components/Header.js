import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <div className="logo-nav">
            <div className="logo">
              <Link to="">
                <img src="/img/logo.svg" alt="" />
              </Link>
            </div>
            <div className="header-nav">
              <ul>
                <Link to="/kurumsal">
                  <li>Kurumsal</li>
                </Link>
                <Link to="">
                  <li>Çalışma Alanları</li>
                </Link>
                <Link to="">
                  <li>Gündem</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="user">
            <Link to="/kullanici">
              <div className="login">Giriş Yap</div>
            </Link>
            <Link to="">
              <div className="donate">
                <span>Bağış Yap</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="brace-nav"></div>
      <Navbar />
    </div>
  );
}

export default Header;
