import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { logoutUser } from "../Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../Config/Firebase";
import { setCurrentUser } from "../Auth/authSlice";
function Header() {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  //   const trigger = (
  //     <span>
  //         <span avatar src={currentUser.photoURL}/>
  //     </span>
  // )

  var width = (window.innerWidth > 0) ? window.innerWidth : "";
  var widthCheck = width > 1000 ? true : false
  const [open, setOpen] = useState(widthCheck);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuStyle = {
    display: open ? "block" : "none",
  };

  console.log(open);

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
            <Link to="#" class="icon hamburger-menu" onClick={handleClick}>
              <svg viewBox="0 0 100 80" width="30" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </Link>
            <div className="header-nav" id="header-nav-menu" style={menuStyle}>
              <ul>
                <Link to="/" className="ds-hidden">
                  <li>Ansayfa</li>
                </Link>
                <Link to="/kurumsal">
                  <li>Kurumsal</li>
                </Link>
                <Link to="/bagis">
                  <li>Gündem</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="user">
            {/* <button className="dropbtn" icon={null} >{trigger}</button> */}
            <Link to="/panel">
              {/* <div className="login" onClick={()=> handleLogOut()}>Giriş Yap</div> */}
              <div className="login">Giriş Yap</div>
            </Link>
            <Link to="/bagis">
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
