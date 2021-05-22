import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DashboardContent from "./DashboardContent";
import AddDonate from "./AddDonate";
import { FaHome, FaDonate, FaWikipediaW, FaMailBulk } from "react-icons/fa";
import AddCorpotation from "./AddCorpotation";
import FooterContact from "./UpdateFooterContact";

//Auth
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../Auth/authSlice";
import firebase from "../../Config/Firebase";
import { useHistory } from "react-router-dom";
import UpdateTotalDonate from "./UpdateTotalDonate";

function Index() {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  let history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        history.push("/login");
      }
    });
  }, []);

  return (
    <div className="user-page">
      {/* <Dashboard /> */}

      <div className="dashboard-logo">
        Bağış <font></font>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <FaHome /> Anasayfa
          </Tab>
          <Tab>
            <FaDonate /> Kampanya Ekle
          </Tab>
          <Tab>
            <FaWikipediaW /> Kurumsal Sayfası
          </Tab>
          <Tab>
            <FaMailBulk /> Footer İletişim Bilgileri
          </Tab>
          <Tab>
            <FaMailBulk /> Toplam Bağış Açıklama
          </Tab>
        </TabList>

        <TabPanel>
          <DashboardContent />
        </TabPanel>
        <TabPanel>
          <AddDonate />
        </TabPanel>
        <TabPanel>
          <AddCorpotation />
        </TabPanel>
        <TabPanel>
          <FooterContact />
        </TabPanel>
        <TabPanel>
          <UpdateTotalDonate />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Index;
// const Index = withRouter(Index);
