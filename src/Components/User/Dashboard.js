import React from "react";
import DashboardContent from "./DashboardContent"
import {Link} from "react-router-dom"
import { FaHome, FaDonate, FaUserGraduate, FaFacebookMessenger, FaUserCog, FaUserSlash } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="dashboard-logo">Bağış <font></font></div>
        <div className="dashboard-nav-item">
          <Link to=""> <FaHome /> Anasayfa</Link>
          <Link to=""><FaDonate /> Bağışlarım</Link>
          <Link to=""><FaUserGraduate /> Sertifikalar</Link>
          <Link to=""><FaFacebookMessenger /> Mesajlarım</Link>
          <Link to=""><FaUserCog /> Ayarlar</Link>
          <div className="nav-logout">
        <Link to=""><FaUserSlash /> Çıkış Yap</Link>
        </div>
        </div>
        
      </div>

    <DashboardContent />

    </div>
  );
}

export default Dashboard;
