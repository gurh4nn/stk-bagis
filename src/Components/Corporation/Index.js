import React from "react";
import Content from "./Content";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function SideNav() {

  return (
    <div className="side-nav">
      <div className="corporation-nav">
          <Tabs>
            <TabList>
              <Tab>Hakkımızda</Tab>
              <Tab>Tarihçe</Tab>
              <Tab>Vergi Muafiyeti</Tab>
            </TabList>

            <TabPanel>
              <Content title="Hakkımızda" path="hakkimizda"/>
            </TabPanel>
            <TabPanel>
              <Content title="Tarihçe" path="tarihce" />
            </TabPanel>
            <TabPanel>
              <Content title="Vergi Muafiyeti" path="vergi" />
            </TabPanel>
          </Tabs>

        {/* <div className="corpotate-title">Kurumsal</div>
        <div className="nav-list">
          {sideNavItem.map((nav, index) => (
            <Link to={nav.link} key={index}>
              {nav.title}
            </Link>
          ))}
        </div> */}
      </div>
      {/* <Content /> */}
    </div>
  );
}

export default SideNav;
