import React, {useEffect} from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {logoutUser} from "../Auth/authSlice"
import {useDispatch,useSelector} from "react-redux"
import firebase from "../Config/Firebase";
import { setCurrentUser } from "../Auth/authSlice";
function Header() {

  const {currentUser} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const handleLogOut = ()=> {
      dispatch(logoutUser());


  };


//   const trigger = (
//     <span>
//         <span avatar src={currentUser.photoURL}/>
//     </span>
// )

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
          {/* <button className="dropbtn" icon={null} >{trigger}</button> */}
            <Link to="/panel">
              <div className="login" onClick={()=> handleLogOut()}>Giriş Yap</div>
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
